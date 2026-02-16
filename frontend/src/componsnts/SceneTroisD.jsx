import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron, Environment, ContactShadows } from '@react-three/drei';

function DynamicShape({ modelType, color }) {
  // On utilise un matériau 'Physical' pour que l'objet brille vraiment
  const materialProps = {
    color: color,
    metalness: 0.8,
    roughness: 0.1,
    emissive: color,
    emissiveIntensity: 0.2,
  };

  switch (modelType) {
    case 'cart':
      return (
        <Torus args={[1, 0.4, 16, 100]}>
          <meshPhysicalMaterial {...materialProps} />
        </Torus>
      );
    case 'saas':
      return (
        <Icosahedron args={[1, 0]}>
          <meshPhysicalMaterial {...materialProps} flatShading />
        </Icosahedron>
      );
    case 'api':
      return (
        <Box args={[1.2, 1.2, 1.2]}>
          <meshPhysicalMaterial {...materialProps} />
        </Box>
      );
    default:
      return (
        <Sphere args={[1, 100, 200]}>
          <MeshDistortMaterial color={color} speed={4} distort={0.3} radius={1} />
        </Sphere>
      );
  }
}

const SceneTroisD = ({ modelType, color }) => {
  return (
    <div className="w-full h-full min-h-[150px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }} gl={{ antialias: true }}>
        {/* Éclairage puissant pour voir les couleurs */}
        <ambientLight intensity={1.5} /> 
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.25} penumbra={1} intensity={2} />
        
        <Suspense fallback={null}>
          {/* L'environnement 'city' donne des reflets réalistes (indispensable pour le métal) */}
          <Environment preset="city" />
          
          <Float speed={3} rotationIntensity={2} floatIntensity={2}>
            <DynamicShape modelType={modelType} color={color} />
          </Float>

          {/* Une petite ombre au sol pour l'effet de profondeur */}
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2} far={4.5} />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default SceneTroisD;