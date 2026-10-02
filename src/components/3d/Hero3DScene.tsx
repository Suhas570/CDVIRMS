import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const particleCount = 750; // Optimized for 60fps performance across devices
  const maxDistance = 2.4;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const skyBlue = new THREE.Color('#0EA5E9');
    const navyAccent = new THREE.Color('#1E3A8A');
    const lightBlue = new THREE.Color('#38BDF8');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread across 3D space
      pos[i3] = (Math.random() - 0.5) * 22;
      pos[i3 + 1] = (Math.random() - 0.5) * 14;
      pos[i3 + 2] = (Math.random() - 0.5) * 16;

      const mixVal = Math.random();
      const chosenColor = mixVal < 0.45 ? skyBlue : mixVal < 0.8 ? navyAccent : lightBlue;

      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [particleCount]);

  // Compute connecting line segments dynamically
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    // Pre-calculate nearest connections for network effect
    for (let i = 0; i < particleCount; i += 2) {
      const i3 = i * 3;
      const x1 = positions[i3];
      const y1 = positions[i3 + 1];
      const z1 = positions[i3 + 2];

      for (let j = i + 1; j < Math.min(i + 15, particleCount); j++) {
        const j3 = j * 3;
        const x2 = positions[j3];
        const y2 = positions[j3 + 1];
        const z2 = positions[j3 + 2];

        const distSq =
          (x1 - x2) * (x1 - x2) +
          (y1 - y2) * (y1 - y2) +
          (z1 - z2) * (z1 - z2);

        if (distSq < maxDistance * maxDistance) {
          lines.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    return new Float32Array(lines);
  }, [positions, particleCount]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.04;
      linesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group>
      {/* 3D Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.75}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Interconnecting Network Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#0EA5E9"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Performance Rule: Unmount/pause off-screen via IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        opacity: 0.85,
      }}
      aria-hidden="true"
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 11], fov: 60 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.6} />
          <ParticleNetwork />
        </Canvas>
      )}
    </div>
  );
};

export default Hero3DScene;
