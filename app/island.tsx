'use client';

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

const BURST_SPEED = 16; // ความเร็วตอนเลื่อนมาเจอ (หมุนเร็ว)
const IDLE_SPEED = 0.35; // ความเร็วตอนช้าลงแล้ว (หมุนค่อยๆ ไป)
const DAMPING = 2.0; // อัตราหน่วงให้ค่อยๆ ช้าลง

/** ดึงสีเฉลี่ยจาก Texture กรณีโมเดลใช้ภาพ UV Map แทนการลงสี Material ตรงๆ */
function sampleTextureColor(texture: THREE.Texture): string | null {
  try {
    const img = texture.image as CanvasImageSource | undefined;
    if (!img) return null;

    const canvas = document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(img, 0, 0, 8, 8);
    const { data } = ctx.getImageData(0, 0, 8, 8);

    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;

    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) continue;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    if (count === 0) return null;
    return `#${new THREE.Color(r / count / 255, g / count / 255, b / count / 255).getHexString()}`;
  } catch {
    return null;
  }
}

/** ดึงสีหลัก 1–2 สีจากตัวโมเดล เพื่อนำไปฉายแสงส่องสว่างทั้งหน้าเว็บ */
function extractModelColors(object: THREE.Object3D): [string, string] {
  const candidates: { hex: string; score: number }[] = [];
  const hsl = { h: 0, s: 0, l: 0 };

  object.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    const mesh = child as THREE.Mesh;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

    for (const mat of materials) {
      if (
        !(
          mat instanceof THREE.MeshStandardMaterial ||
          mat instanceof THREE.MeshPhysicalMaterial
        )
      ) {
        continue;
      }

      const hasEmissive =
        mat.emissive.r > 0.02 || mat.emissive.g > 0.02 || mat.emissive.b > 0.02;
      if (hasEmissive) {
        mat.emissive.getHSL(hsl);
        candidates.push({
          hex: `#${mat.emissive.getHexString()}`,
          score: 3 + hsl.s,
        });
      }

      if (mat.map) {
        const texHex = sampleTextureColor(mat.map);
        if (texHex) {
          new THREE.Color(texHex).getHSL(hsl);
          candidates.push({ hex: texHex, score: 1.5 + hsl.s });
        }
      }

      mat.color.getHSL(hsl);
      if (hsl.l > 0.08) {
        candidates.push({
          hex: `#${mat.color.getHexString()}`,
          score: 1 + hsl.s * 2,
        });
      }
    }
  });

  candidates.sort((a, b) => b.score - a.score);
  const unique: string[] = [];
  for (const c of candidates) {
    if (!unique.includes(c.hex)) unique.push(c.hex);
    if (unique.length >= 2) break;
  }

  if (unique.length === 0) return ['#f472b6', '#a855f7'];
  if (unique.length === 1) return [unique[0], unique[0]];
  return [unique[0], unique[1]];
}

function ResponsiveIsoCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.OrthographicCamera) {
      // เผื่อระยะรอบตัวโมเดลให้มีพื้นที่จางแสง Bloom ก่อนถึงขอบกรอบ
      camera.zoom = Math.min(size.width, size.height) / 4.5;
      camera.updateProjectionMatrix();
    }
  }, [camera, size.width, size.height]);

  return null;
}

interface ModelProps {
  modelPath: string;
  triggerCount: number;
  onColorsReady: (colors: [string, string]) => void;
}

function SpinningModel({ modelPath, triggerCount, onColorsReady }: ModelProps) {
  const pivotRef = useRef<THREE.Group>(null);
  const animRootRef = useRef<THREE.Group>(null);
  const speedRef = useRef(IDLE_SPEED);

  const { scene, animations } = useGLTF(modelPath);

  const { clonedScene, offset, normalizedScale, clonedMaterials, glowColors } = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    const createdMaterials: THREE.Material[] = [];

    const extractedColors = extractModelColors(clone);

    const applySelfNeon = (mat: THREE.Material) => {
      const matClone = mat.clone();
      createdMaterials.push(matClone);

      if (
        matClone instanceof THREE.MeshStandardMaterial ||
        matClone instanceof THREE.MeshPhysicalMaterial
      ) {
        const hasEmissive =
          matClone.emissive.r > 0.01 ||
          matClone.emissive.g > 0.01 ||
          matClone.emissive.b > 0.01 ||
          Boolean(matClone.emissiveMap);

        if (hasEmissive) {
          matClone.emissiveIntensity = Math.max(matClone.emissiveIntensity, 1.8);
        } else {
          matClone.emissive.copy(matClone.color);
          if (matClone.map) {
            matClone.emissiveMap = matClone.map;
          }
          matClone.emissiveIntensity = 0.85;
        }
      }

      return matClone;
    };

    clone.updateMatrixWorld(true);
    const box = new THREE.Box3();
    const meshBox = new THREE.Box3();

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(applySelfNeon);
        } else if (mesh.material) {
          mesh.material = applySelfNeon(mesh.material);
        }

        mesh.geometry.computeBoundingBox();
        if (mesh.geometry.boundingBox) {
          meshBox.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
          box.union(meshBox);
        }
      }
    });

    if (box.isEmpty()) {
      box.setFromObject(clone);
    }

    const center = box.getCenter(new THREE.Vector3());
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const radius = sphere.radius || 1;

    return {
      clonedScene: clone,
      offset: center.negate(),
      normalizedScale: 2.35 / radius,
      clonedMaterials: createdMaterials,
      glowColors: extractedColors,
    };
  }, [scene]);

  useEffect(() => {
    onColorsReady(glowColors);
  }, [glowColors, onColorsReady]);

  useEffect(() => {
    return () => {
      clonedMaterials.forEach((mat) => mat.dispose());
    };
  }, [clonedMaterials]);

  const { actions } = useAnimations(animations, animRootRef);

  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset().fadeIn(0.4).play();
    }
    return () => {
      firstAction?.fadeOut(0.4);
    };
  }, [actions]);

  useEffect(() => {
    if (triggerCount > 0) {
      speedRef.current = BURST_SPEED;
    }
  }, [triggerCount]);

  useFrame((_, delta) => {
    const safeDelta = Math.min(delta, 0.05);

    speedRef.current = THREE.MathUtils.damp(
      speedRef.current,
      IDLE_SPEED,
      DAMPING,
      safeDelta
    );

    if (pivotRef.current) {
      pivotRef.current.rotation.y += speedRef.current * safeDelta;
    }
  });

  return (
    <group ref={pivotRef} position={[0, 0, 0]}>
      <group scale={normalizedScale}>
        <group ref={animRootRef} position={[offset.x, offset.y, offset.z]}>
          <primitive object={clonedScene} />
        </group>
      </group>
    </group>
  );
}

interface Showcase3DSectionProps {
  modelPath?: string;
  replayOnReenter?: boolean;
}

export default function Showcase3DSection({
  modelPath = '/models/my-model.glb',
  replayOnReenter = true,
}: Showcase3DSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const ambientOrbRef = useRef<HTMLDivElement>(null);

  const [triggerCount, setTriggerCount] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const [glowColors, setGlowColors] = useState<[string, string]>(['#f472b6', '#a855f7']);
  const hasPlayedOnce = useRef(false);

  const handleColorsReady = useCallback((colors: [string, string]) => {
    setGlowColors(colors);
  }, []);

  // เปิดไฟฟุ้งทั่วเว็บ + เร่งหมุน เมื่อเลื่อนมาเจอตัวโมเดล
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    let burstTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);

          if (replayOnReenter || !hasPlayedOnce.current) {
            hasPlayedOnce.current = true;
            setTriggerCount((prev) => prev + 1);
            setIsBursting(true);
            clearTimeout(burstTimer);
            burstTimer = setTimeout(() => setIsBursting(false), 1400);
          }
        }else if(entry.boundingClientRect.top > 0){
            setHasRevealed(false);
            setIsBursting(false);
            clearTimeout(burstTimer);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(burstTimer);
    };
  }, [replayOnReenter]);

  // ขยับจุดศูนย์กลางแสงพื้นหลังตามตำแหน่งโมเดลเวลาเลื่อนหน้าจอ
  useEffect(() => {
    let rafId = 0;

    const updateGlowPosition = () => {
      const stage = stageRef.current;
      const orb = ambientOrbRef.current;
      if (!stage || !orb) return;

      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      orb.style.transform = `translate3d(${centerX}px, ${centerY}px, 0) translate(-50%, -50%)`;
      if (rect.top >= window.innerHeight){
        setHasRevealed(false);
        setIsBursting(false);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateGlowPosition);
    };

    updateGlowPosition();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const [primaryGlow, secondaryGlow] = glowColors;

  return (
    <>
      {/* แสง Neon ที่ฟุ้งกระจายกลืนไปทั่วทั้งหน้าเว็บ (ไร้ขอบตัด) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* แสงย้อมบรรยากาศนุ่มๆ คลุมทั้งหน้าจอ */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{
            opacity: !hasRevealed ? 0 : isBursting ? 0.36 : 0.24,
            background: `radial-gradient(circle at 50% 50%, ${primaryGlow}66 0%, ${secondaryGlow}33 50%, transparent 90%)`,
          }}
        />

        {/* ลำแสงขนาดใหญ่พิเศษที่แผ่จากกลางโมเดลออกไปทั่วจอ */}
        <div
          ref={ambientOrbRef}
          className="absolute top-0 left-0 w-[160vmax] h-[160vmax] rounded-full mix-blend-screen transition-opacity duration-1000 ease-out will-change-transform"
          style={{
            opacity: !hasRevealed ? 0 : isBursting ? 0.72 : 0.52,
            filter: 'blur(110px)',
            background: `radial-gradient(circle, ${primaryGlow}dd 0%, ${primaryGlow}88 22%, ${secondaryGlow}44 45%, transparent 72%)`,
          }}
        />
      </div>

      {/* เอา max-w-7xl ไปไว้เฉพาะหัวข้อ เพื่อให้โซนโมเดล 3D กว้างเต็มจอไม่มีขอบซ้าย-ขวา */}
      <section id="showcase-3d" className="relative z-10 w-full min-h-dvh py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <div className="flex items-center gap-space-xs font-nerd text-sm text-primary tracking-widest uppercase mb-1">
              <span>00 // 3D INTERACTIVE SHOWCASE</span>
              <span className="w-8 h-px bg-primary/40 shrink-0" />
            </div>
            <h2 className="font-thai text-lg text-on-surface tracking-tight">
              3D Animation &amp; Modeling
            </h2>
          </div>
          <p className="font-thai text-body-sm text-on-surface-variant max-w-md">
            สามารถคลิกลากเพื่อหมุนดูโมเดลรอบทิศทางได้
          </p>
        </div>

        {/* ใช้ ellipse 48% 48% เพื่อให้จางเป็น 0% สนิทก่อนชนขอบ Canvas ทุกด้าน */}
        <div
          ref={stageRef}
          className="relative w-full flex-1 min-h-[420px] h-[520px] sm:h-[600px] md:h-[680px] flex items-center justify-center"
          style={{
            maskImage:
              'radial-gradient(ellipse 48% 48% at 50% 50%, black 52%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 48% 48% at 50% 50%, black 52%, transparent 100%)',
          }}
        >
          <Canvas
            orthographic
            dpr={[1, 2]}
            gl={{
              alpha: true,
              antialias: true,
              premultipliedAlpha: true,
              toneMapping: THREE.ACESFilmicToneMapping,
            }}
            camera={{ position: [10, 10, 10], zoom: 65, near: -100, far: 1000 }}
          >
            <ResponsiveIsoCamera />

            <ambientLight intensity={0.4} color="#ffffff" />
            <directionalLight position={[10, 14, 10]} intensity={1.4} color="#ffffff" />
            <directionalLight position={[-10, -6, -10]} intensity={0.6} color="#ffffff" />

            <Suspense fallback={null}>
              <Environment preset="night" />
              <SpinningModel
                modelPath={modelPath}
                triggerCount={triggerCount}
                onColorsReady={handleColorsReady}
              />
            </Suspense>

            {/* ลด radius ลงเล็กน้อยให้ Bloom กระจุกสวยรอบตัวเกาะ แล้วให้แสงชั้นพื้นหลังรับช่วงฟุ้งต่อทั่วเว็บ */}
            <EffectComposer multisampling={0}>
              <Bloom
                mipmapBlur
                luminanceThreshold={0.45}
                luminanceSmoothing={0.25}
                intensity={1.0}
                radius={0.55}
              />
            </EffectComposer>

            <OrbitControls
              makeDefault
              target={[0, 0, 0]}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </section>
    </>
  );
}