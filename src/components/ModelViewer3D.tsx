'use client';

import { Bounds, Center, ContactShadows, Environment, Html, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Mesh, MeshStandardMaterial, RepeatWrapping, SRGBColorSpace, type Object3D, type Texture } from 'three';

export type WoodTexturePaths = {
  map: string;
  normalMap: string;
  roughnessMap: string;
};

export type ModelViewer3DProps = {
  modelPath?: string;
  applyWoodMaterial?: boolean;
  woodTexturePaths?: WoodTexturePaths;
  className?: string;
};

const defaultWoodTexturePaths: WoodTexturePaths = {
  map: '/textures/wood-color.jpg',
  normalMap: '/textures/wood-normal.jpg',
  roughnessMap: '/textures/wood-roughness.jpg',
};

function LoadingFallback() {
  return <Html center><span className="model-viewer-loading">Carregando modelo...</span></Html>;
}

function WoodMaterialOverride({ scene, paths }: { scene: Object3D; paths: WoodTexturePaths }) {
  const colorTexture = useTexture(paths.map);
  const normalTexture = useTexture(paths.normalMap);
  const roughnessTexture = useTexture(paths.roughnessMap);

  const wood = useMemo(() => {
    const configureTexture = (source: Texture, isColor: boolean) => {
      const texture = source.clone();
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(2, 2);
      if (isColor) texture.colorSpace = SRGBColorSpace;
      texture.needsUpdate = true;
      return texture;
    };

    const map = configureTexture(colorTexture, true);
    const normalMap = configureTexture(normalTexture, false);
    const roughnessMap = configureTexture(roughnessTexture, false);
    const material = new MeshStandardMaterial({ map, normalMap, roughnessMap, roughness: 0.7, metalness: 0 });
    return { material, textures: [map, normalMap, roughnessMap] };
  }, [colorTexture, normalTexture, roughnessTexture]);

  useEffect(() => {
    const previousMaterials = new Map<Mesh, Mesh['material']>();
    scene.traverse((object) => {
      if (!(object instanceof Mesh)) return;
      previousMaterials.set(object, object.material);
      object.material = wood.material;
    });

    return () => {
      previousMaterials.forEach((material, mesh) => { mesh.material = material; });
      wood.material.dispose();
      wood.textures.forEach((texture) => texture.dispose());
    };
  }, [scene, wood]);

  return null;
}

function ModelAsset({ modelPath, applyWoodMaterial, woodTexturePaths }: Required<Pick<ModelViewer3DProps, 'modelPath' | 'applyWoodMaterial'>> & Pick<ModelViewer3DProps, 'woodTexturePaths'>) {
  const { scene } = useGLTF(modelPath);
  const model = useMemo(() => cloneSkeleton(scene), [scene]);

  return (
    <>
      <primitive object={model} dispose={null} />
      {applyWoodMaterial && <WoodMaterialOverride scene={model} paths={woodTexturePaths ?? defaultWoodTexturePaths} />}
    </>
  );
}

export default function ModelViewer3D({
  modelPath = '/models/peca.glb',
  applyWoodMaterial = false,
  woodTexturePaths,
  className = '',
}: ModelViewer3DProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const pauseRotation = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setAutoRotate(false);
  };

  const resumeRotationSoon = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setAutoRotate(true), 3000);
  };

  return (
    <div className={`model-viewer ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Environment preset="studio" />
          <directionalLight position={[4, 6, 5]} intensity={1.25} />
          <Bounds fit clip observe margin={1.2}>
            <Center bottom>
              <ModelAsset
                modelPath={modelPath}
                applyWoodMaterial={applyWoodMaterial}
                woodTexturePaths={woodTexturePaths}
              />
            </Center>
          </Bounds>
          <ContactShadows position={[0, -0.02, 0]} opacity={0.28} blur={2.5} scale={8} far={5} />
          <OrbitControls
            makeDefault
            enableDamping
            enablePan={false}
            enableZoom
            enableRotate
            minDistance={0.5}
            maxDistance={12}
            autoRotate={autoRotate}
            autoRotateSpeed={0.45}
            onStart={pauseRotation}
            onEnd={resumeRotationSoon}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}