import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { MathUtils } from 'three';

// An abstract fluid-like or glassmorphic object
function GlassShape({ position, rotation, scale, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Smoothly animate entrance scale
      if (meshRef.current.scale.x < scale) {
        meshRef.current.scale.x = MathUtils.lerp(meshRef.current.scale.x, scale, 0.05);
        meshRef.current.scale.y = MathUtils.lerp(meshRef.current.scale.y, scale, 0.05);
        meshRef.current.scale.z = MathUtils.lerp(meshRef.current.scale.z, scale, 0.05);
      }
      
      // Rotate over time
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5 + rotation[0];
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        {/* Premium Glassmorphic Material */}
        <meshPhysicalMaterial 
          color={color}
          transmission={0.5}
          opacity={0.8}
          transparent={true}
          roughness={0.1}
          metalness={0.2}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// Interactive cursor-following light
function CursorLight() {
  const lightRef = useRef();
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      // Smoothly follow the mouse
      lightRef.current.position.x = MathUtils.lerp(lightRef.current.position.x, x, 0.1);
      lightRef.current.position.y = MathUtils.lerp(lightRef.current.position.y, y, 0.1);
    }
  });

  return (
    <pointLight 
      ref={lightRef} 
      position={[0, 0, 5]} 
      intensity={5} 
      color="#d1ff4d" 
      distance={15} 
    />
  );
}

const Scene = () => {
  const groupRef = useRef();

  // Subtle parallax effect for the whole scene based on mouse
  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.x * 2);
      const targetY = (state.pointer.y * 2);
      
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.1, 0.05);
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, -targetY * 0.1, 0.05);
    }
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#4dffff" />
      
      <CursorLight />

      <group ref={groupRef}>
        {/* Background Shapes */}
        <GlassShape position={[-4, 2, -5]} rotation={[0, 0, 0]} scale={2} color="#d1ff4d" />
        <GlassShape position={[5, -3, -8]} rotation={[Math.PI / 4, 0, 0]} scale={2.5} color="#ffffff" />
        <GlassShape position={[0, 0, -15]} rotation={[0, Math.PI / 2, 0]} scale={4} color="#a4d42b" />
        
        {/* Interactive Particles */}
        <Sparkles 
          count={150} 
          scale={20} 
          size={4} 
          speed={0.4} 
          opacity={0.5} 
          color="#d1ff4d" 
          noise={1}
        />
      </group>
      
      <Preload all />
    </>
  );
};

export default function Background3D() {
  return (
    <div className="w-full h-full bg-[#0a0a0a]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
