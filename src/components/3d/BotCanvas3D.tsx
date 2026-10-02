import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BotAvatarMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.6;
      ringRef.current.rotation.x += delta * 0.3;
      ringRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Gem Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0EA5E9"
          emissive="#0284C7"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Halo Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.05, 8, 24]} />
        <meshStandardMaterial
          color="#1E3A8A"
          emissive="#1E40AF"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
};

export const BotCanvas3D: React.FC = () => {
  return (
    <div style={{ width: 48, height: 48 }}>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        gl={{ alpha: true, antialias: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <BotAvatarMesh />
      </Canvas>
    </div>
  );
};

export default BotCanvas3D;
