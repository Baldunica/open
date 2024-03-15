import React, { Suspense, useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ShaderMaterial, Vector3, Color } from 'three'; // Добавляем Color для настройки освещения

const Loader = () => {
  const gltf = useLoader(GLTFLoader, './opencoin/legenda1.gltf');

  const meshRef = useRef();

  const gradientMaterial = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        color1: { value: new Vector3(0.5, 0.3, 0.8) }, // Фиолетовый (темный оттенок)
        color2: { value: new Vector3(0.1, 0.1, 0.1) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
      `,
    });
  }, []);

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = gradientMaterial;
    }
  });

  useFrame(({ clock }) => {
    // Вращение объекта
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.x += 0.0005;
    meshRef.current.rotation.z += 0.002;

    // Позиционирование объекта (пример)
    meshRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
  });

  return (
    <mesh rotation={[80, 0, 0]} scale={0.6} ref={meshRef}>
      <Suspense fallback={null}>
        {gltf ? <primitive object={gltf.scene} /> : null}
      </Suspense>
    </mesh>
  );
};

export default Loader;
