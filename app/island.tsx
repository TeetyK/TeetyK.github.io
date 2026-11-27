'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

const BURST_SPEED = 16; // ความเร็วตอนเลื่อนมาเจอ (หมุนเร็ว)
const IDLE_SPEED = 0.35; // ความเร็วตอนช้าลงแล้ว (หมุนค่อยๆ ไป)
const DAMPING = 2.0; // อัตราหน่วงให้ค่อยๆ ช้าลง

function ResponsiveIsoCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.OrthographicCamera) {
      // ยิ่งตัวหารน้อย ยิ่งซูมใกล้ (ปรับช่วง 5.0 - 7.0 ได้ตามขนาดโมเดล)
      camera.zoom = Math.min(size.width, size.height) / 4;
      camera.updateProjectionMatrix();
    }
  }, [camera, size.width, size.height]);

  return null;
}

interface ModelProps {
  modelPath: string;
  triggerCount: number;
}

function SpinningModel({ modelPath, triggerCount }: ModelProps) {
  const pivotRef = useRef<THREE.Group>(null);
  const animRootRef = useRef<THREE.Group>(null);
  const speedRef = useRef(IDLE_SPEED);

  const { scene, animations } = useGLTF(modelPath);

  const { clonedScene, offset, normalizedScale, clonedMaterials } = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    const createdMaterials: THREE.Material[] = [];

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
        } else if (!matClone.vertexColors) {
          // ดึงสีและ Texture จริงของแต่ละชิ้นส่วนมาเรืองแสงตามสีของตัวเอง
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
    };
  }, [scene]);

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
  const ambientWrapperRef = useRef<HTMLDivElement>(null);
  const ambientCanvasRef = useRef<HTMLCanvasElement>(null);
  const webglCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [triggerCount, setTriggerCount] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const hasPlayedOnce = useRef(false);

  // 1. เปิดไฟเมื่อเลื่อนมาเจอ / ดับไฟเมื่อเลื่อนกลับขึ้นไปหน้าแรกด้านบน
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
        } else if (entry.boundingClientRect.top > 0) {
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

  // 2. ขยับตำแหน่งแสงพื้นหลังให้ตรงกลางโมเดลตลอดตอนเลื่อนหน้าจอ
  useEffect(() => {
    let rafId = 0;

    const updateGlowPosition = () => {
      const stage = stageRef.current;
      const wrapper = ambientWrapperRef.current;
      if (!stage || !wrapper) return;

      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      wrapper.style.transform = `translate3d(${centerX}px, ${centerY}px, 0) translate(-50%, -50%)`;

      if (rect.top >= window.innerHeight) {
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

  // 3. ดูดภาพจริงจาก WebGL ลง Canvas จิ๋ว 64x64 (~20fps) เพื่อทำแสงฟุ้งตรงตามสีโมเดลทุกมุมแบบเรียลไทม์
  useEffect(() => {
    if (!hasRevealed) return;

    let rafId = 0;
    let lastDraw = 0;

    const syncAmbientGlow = (now: number) => {
      rafId = requestAnimationFrame(syncAmbientGlow);
      if (now - lastDraw < 50) return;
      lastDraw = now;

      const src = webglCanvasRef.current;
      const dst = ambientCanvasRef.current;
      if (!src || !dst || src.width === 0 || src.height === 0) return;

      const ctx = dst.getContext('2d');
      if (!ctx) return;

      // ตัดเฉพาะโซนสี่เหลี่ยมจัตุรัสตรงกลางที่มีตัวโมเดล แล้ววางเว้นขอบไว้ 16px กันขอบเบลอโดนตัด
      const size = Math.min(src.width, src.height);
      const sx = (src.width - size) / 2;
      const sy = (src.height - size) / 2;

      ctx.clearRect(0, 0, dst.width, dst.height);
      ctx.drawImage(src, sx, sy, size, size, 16, 16, 32, 32);
    };

    rafId = requestAnimationFrame(syncAmbientGlow);
    return () => cancelAnimationFrame(rafId);
  }, [hasRevealed]);

  return (
    <>
      {/* แสงฟุ้งแบบ Ambient Mode ที่ดึงสีจริงจากตัวโมเดล 3D ทุกเฟรม (ไร้ขอบตัด) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          ref={ambientWrapperRef}
          className="absolute top-0 left-0 w-[70vmax] h-[70vmax] mix-blend-screen transition-opacity duration-1000 ease-out will-change-transform"
          style={{
            opacity: !hasRevealed ? 0 : isBursting ? 0.95 : 0.72,
            filter: 'blur(95px) saturate(3) brightness(3)',
          }}
        >
          <canvas
            ref={ambientCanvasRef}
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
      </div>

      <section
        id="showcase-3d"
        className="relative z-10 w-full min-h-dvh flex flex-col pt-24 pb-space-lg"
      >
        <div className="max-w-7xl w-full mx-auto px-margin flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-space-sm">
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

        {/* ยืดเต็มพื้นที่ความสูงของหน้าจอนั้นๆ และไล่ขอบด้วย Radial Mask */}
        <div
          ref={stageRef}
          className="relative flex-1 min-h-[420px] w-full"
          style={{
            maskImage:
              'radial-gradient(ellipse 48% 48% at 50% 50%, black 52%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 48% 48% at 50% 50%, black 52%, transparent 100%)',
          }}
        >
          <div className="absolute inset-0">
            <Canvas
              orthographic
              dpr={[1, 2]}
              gl={{
                alpha: true,
                antialias: true,
                premultipliedAlpha: true,
                preserveDrawingBuffer: true, // จำเป็นเพื่อให้ Ambient Canvas ดูดสีภาพจริงไปทำแสงฟุ้งได้
                toneMapping: THREE.ACESFilmicToneMapping,
              }}
              onCreated={({ gl }) => {
                webglCanvasRef.current = gl.domElement;
              }}
              camera={{ position: [10, 10, 10], zoom: 65, near: -100, far: 1000 }}
            >
              <ResponsiveIsoCamera />

              <ambientLight intensity={0.4} color="#ffffff" />
              <directionalLight position={[10, 14, 10]} intensity={1.4} color="#ffffff" />
              <directionalLight position={[-10, -6, -10]} intensity={0.6} color="#ffffff" />

              <Suspense fallback={null}>
                <Environment preset="night" />
                <SpinningModel modelPath={modelPath} triggerCount={triggerCount} />
              </Suspense>

              <EffectComposer multisampling={0}>
                <Bloom
                  mipmapBlur
                  luminanceThreshold={0.45}
                  luminanceSmoothing={0.25}
                  intensity={1.0}
                  radius={0.5}
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
        </div>
      </section>
    </>
  );
}