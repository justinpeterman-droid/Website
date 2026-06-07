"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

/**
 * Temporary Phase 1 smoke test — proves R3F + Three.js render on the home page.
 * Removed in Phase 4 when the persistent app-shell Canvas replaces it.
 */
function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#e07a5f" />
    </mesh>
  );
}

export default function SpinningCubeScene() {
  return (
    <Canvas
      className="h-[min(60vh,28rem)] w-full rounded-xl bg-zinc-900"
      camera={{ position: [2, 2, 2], fov: 50 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <Cube />
    </Canvas>
  );
}
