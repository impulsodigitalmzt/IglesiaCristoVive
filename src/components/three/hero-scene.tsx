"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingOrb({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const meshRef = React.useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.22}
          roughness={0.15}
          metalness={0.35}
          transmission={0.35}
          thickness={0.8}
        />
      </mesh>
    </Float>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 4, 2]} intensity={0.8} color="#ffffff" />
      <Sparkles count={90} scale={[14, 8, 8]} size={2} speed={0.25} color="#EA4B21" opacity={0.35} />
      <Sparkles count={40} scale={[10, 6, 6]} size={1.5} speed={0.15} color="#D4AF37" opacity={0.25} />
      <FloatingOrb position={[-3.5, 0.5, -2]} color="#EA4B21" scale={0.85} />
      <FloatingOrb position={[4, -0.8, -3]} color="#D4AF37" scale={0.55} />
      <FloatingOrb position={[1.2, 1.4, -4]} color="#ffffff" scale={0.35} />
    </>
  );
}

function HeroScene() {
  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <div
      data-hero-three
      className="pointer-events-none absolute inset-0 z-[1] opacity-80 mix-blend-screen will-change-[opacity]"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 52 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}

export { HeroScene };
