import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

import CanvasLoader from "../Loader";

const EarthCanvas = () => {
  return (
    <Canvas className="absolute bottom-1/3 sm:scale-200 z-10">
      <Suspense fallback={<CanvasLoader />}>
        <Loader/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;