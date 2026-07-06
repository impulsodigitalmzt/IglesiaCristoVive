"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingRing() {
  const meshRef = React.useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0.5, -3]} scale={1.6}>
      <torusGeometry args={[1, 0.08, 16, 64]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.12} />
    </mesh>
  );
}

function AmbientSceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Sparkles count={50} scale={[16, 10, 8]} size={1.5} speed={0.12} color="#EA4B21" opacity={0.2} />
      <Sparkles count={30} scale={[12, 8, 6]} size={1} speed={0.08} color="#D4AF37" opacity={0.15} />
      <FloatingRing />
    </>
  );
}

type AmbientSceneProps = {
  className?: string;
};

function AmbientScene({ className }: AmbientSceneProps) {
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
      aria-hidden
      className={className}
      data-ambient-three
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <AmbientSceneContent />
      </Canvas>
    </div>
  );
}

export { AmbientScene };
