import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const ComputersCanvas = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1}/>
      <directionalLight intensity={0.5}/>
      <CanvasLoader/>
    </Canvas>
  );
};

export default ComputersCanvas;
