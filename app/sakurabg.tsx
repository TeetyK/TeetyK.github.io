'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PetalData {
  mesh: THREE.Mesh;
  speedY: number;
  speedX: number;
  speedZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  swayOffset: number;
  swaySpeed: number;
  swayAmplitude: number;
  delay: number;
  boundY: number;
}

interface SakuraBackgroundProps {
  className?: string;
  petalsCount?: number;
  introDuration?: number;
}

function createSakuraPetalGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.3, 0.4, 0.7, 1.1, 0.6, 1.8);
  shape.bezierCurveTo(0.5, 2.2, 0.2, 2.4, 0.08, 2.15); // Left lobe
  shape.lineTo(0, 2.0); // Center notch
  shape.lineTo(-0.08, 2.15); // Right notch tip
  shape.bezierCurveTo(-0.2, 2.4, -0.5, 2.2, -0.6, 1.8); // Right lobe
  shape.bezierCurveTo(-0.7, 1.1, -0.3, 0.4, 0, 0);

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    steps: 1,
    depth: 0.04,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 2,
  };

  const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const curl = Math.sin(y * 1.5) * 0.2 + x * x * 0.15;
    pos.setZ(i, pos.getZ(i) + curl);
  }
  geo.computeVertexNormals();
  geo.center();
  return geo;
}

export default function SakuraBackground({
  className = 'fixed inset-0 pointer-events-none z-0 w-full h-full',
  petalsCount = 65,
  introDuration = 10,
}: SakuraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff0f5, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const sakuraPointLight = new THREE.PointLight(0xf472b6, 2.5, 50);
    sakuraPointLight.position.set(-10, 10, 15);
    scene.add(sakuraPointLight);

    // Geometry & Materials
    const petalGeo = createSakuraPetalGeometry();
    const petalMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        roughness: 0.35,
        metalness: 0.1,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xfbcfe8,
        roughness: 0.4,
        metalness: 0.05,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        roughness: 0.3,
        metalness: 0.15,
        side: THREE.DoubleSide,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xfda4af,
        roughness: 0.45,
        metalness: 0.05,
        side: THREE.DoubleSide,
      }),
    ];

    const petals: PetalData[] = [];
    const group = new THREE.Group();
    scene.add(group);

    const fieldWidth = 38;
    const fieldDepth = 20;
    const halfFovRad = THREE.MathUtils.degToRad(camera.fov / 2);

    for (let i = 0; i < petalsCount; i++) {
      const mat = petalMaterials[Math.floor(Math.random() * petalMaterials.length)];
      const mesh = new THREE.Mesh(petalGeo, mat);

      const scale = 0.45 + Math.random() * 0.65;
      mesh.scale.set(scale, scale, scale);

      const z = (Math.random() - 0.5) * fieldDepth;
      // คำนวณระยะเหนือขอบบนของหน้าจอตามความลึก z ของแต่ละกลีบ
      const boundY = Math.tan(halfFovRad) * (camera.position.z - z) + 2;

      mesh.position.set((Math.random() - 0.5) * fieldWidth, boundY, z);
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      mesh.visible = false; // ซ่อนไว้ก่อนจนกว่าจะถึงคิวปล่อย

      // ช่วงแรกค่อยๆ ออกมาช้าๆ แล้วทยอยถี่ขึ้นอย่างเป็นธรรมชาติ
      const progress = i / Math.max(petalsCount - 1, 1);
      const delay = Math.pow(progress, 1.3) * introDuration;

      petals.push({
        mesh,
        speedY: 0.025 + Math.random() * 0.035,
        speedX: (Math.random() - 0.5) * 0.015,
        speedZ: (Math.random() - 0.5) * 0.01,
        rotX: (Math.random() - 0.5) * 0.025,
        rotY: (Math.random() - 0.5) * 0.035,
        rotZ: (Math.random() - 0.5) * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: 1.2 + Math.random() * 1.5,
        swayAmplitude: 0.015 + Math.random() * 0.02,
        delay,
        boundY,
      });

      group.add(mesh);
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetWindX = 0;
    let targetWindY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 0.03;
      mouseY = normY * 0.02;
    };

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // Animation loop
    const clock = new THREE.Clock();
    let elapsedTime = 0;
    let animationFrameId = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // จำกัด delta ไม่เกิน 50ms กันกลีบกระโดดเวลาสลับแท็บ
      const rawDelta = Math.min(clock.getDelta(), 0.05);
      elapsedTime += rawDelta;
      const dt = rawDelta * 60;

      const windLerp = Math.min(0.05 * dt, 1);
      targetWindX += (mouseX - targetWindX) * windLerp;
      targetWindY += (mouseY - targetWindY) * windLerp;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // ยังไม่ถึงเวลาปล่อยให้ข้ามไปก่อน
        if (elapsedTime < p.delay) continue;
        if (!p.mesh.visible) p.mesh.visible = true;

        const sway = Math.sin(elapsedTime * p.swaySpeed + p.swayOffset) * p.swayAmplitude;

        p.mesh.position.y -= (p.speedY + targetWindY * 0.2) * dt;
        p.mesh.position.x += (p.speedX + sway + targetWindX) * dt;
        p.mesh.position.z += p.speedZ * dt;

        p.mesh.rotation.x += p.rotX * dt;
        p.mesh.rotation.y += p.rotY * dt;
        p.mesh.rotation.z += p.rotZ * dt;

        // พอตกพ้นขอบล่าง ให้กลับไปรอโรยลงมาจากขอบบนใหม่เรื่อยๆ
        if (p.mesh.position.y < -p.boundY) {
          p.mesh.position.y = p.boundY;
          p.mesh.position.x = (Math.random() - 0.5) * fieldWidth;
        }
        if (p.mesh.position.x > fieldWidth / 2) {
          p.mesh.position.x = -fieldWidth / 2;
        } else if (p.mesh.position.x < -fieldWidth / 2) {
          p.mesh.position.x = fieldWidth / 2;
        }
        if (p.mesh.position.z > fieldDepth / 2) {
          p.mesh.position.z = -fieldDepth / 2;
        } else if (p.mesh.position.z < -fieldDepth / 2) {
          p.mesh.position.z = fieldDepth / 2;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      petalGeo.dispose();
      petalMaterials.forEach((mat) => mat.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [petalsCount, introDuration]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}