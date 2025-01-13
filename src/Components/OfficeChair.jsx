import { CameraControls, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { loadTexture } from "../utils/loadTextures";
import { useSnapshot } from "valtio";
import { state } from "../../store";

export const OfficeChair = (props) => {
  const { nodes, materials } = useGLTF("/Office Chair.glb");
  const snap = useSnapshot(state);

  // List of texture paths
  const texturePaths = [
    "/textures/Leather/Colors/BARCELONA OLIVE/LeatherRegion_albedo.jpg",
    "/textures/Leather/Colors/Diesel Brown/LeatherRegion_albedo.jpg",
    "/textures/Leather/Colors/GIZELLE LATTE/LeatherRegion_albedo.jpg",
    "/textures/Leather/Colors/ECO TOFFEE/LeatherRegion_albedo.jpg",
    "/textures/Leather/Colors/Diesel Black/LeatherRegion_albedo.jpg",
  ];

  // texture Maps
  const barcelonaOlive = loadTexture(texturePaths[0]);
  const dieselBrown = loadTexture(texturePaths[1]);
  const gizelleLatte = loadTexture(texturePaths[2]);
  const ecoToffee = loadTexture(texturePaths[3]);
  const dieselBlack = loadTexture(texturePaths[4]);

  const LeatherAOMap = useTexture("/textures/Leather/Constant Textures/LeatherRegion_AO.jpg");
  LeatherAOMap.flipY = false;

  const LeatherNormalMap = useTexture(
    "/textures/Leather/Constant Textures/CompLeatherRegion_normal.png"
  );
  LeatherNormalMap.flipY = false;

  const LeatherRoughnessMap = useTexture(
    "/textures/Leather/Constant Textures/LeatherRegion_roughness.jpg"
  );
  LeatherRoughnessMap.flipY = false;

  useEffect(() => {
    if (!materials || !materials.LeatherRegion) return; // Safety check for materials and LeatherRegion

    // Define the texture maps
    const textureMap = [barcelonaOlive, dieselBrown, ecoToffee, gizelleLatte, dieselBlack];

    // Get the correct map or default to Barcelona Olive
    const selectedMap = textureMap[snap.leatherColor] || barcelonaOlive;

    // Update the material map
    materials.LeatherRegion.map = selectedMap;
    materials.LeatherRegion.aoMap = LeatherAOMap;
    materials.LeatherRegion.normalMap = LeatherNormalMap;
    materials.LeatherRegion.roughnessMap = LeatherRoughnessMap;
    materials.LeatherRegion.roughness = 1;

    // Mark the material as needing an update for Three.js
    materials.LeatherRegion.needsUpdate = true;
  }, [snap.leatherColor]);

  const cam = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    cam.current.zoom(0.6, true);
  }, []);

  return (
    <>
      <CameraControls
        ref={cam}
        smoothTime={0.6}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        azimuthRotateSpeed={0.6}
      />
      <group {...props} position={[0, -0.25, 0]} ref={groupRef} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MetalParts.geometry}
          material={materials.MetalParts}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeatherRegion.geometry}
          material={materials.LeatherRegion}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Strips.geometry}
          material={materials.Strips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PlasticParts.geometry}
          material={materials.PlasticParts}
        />

        {/* Rembrandt Lighting setup */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[1, 2, 1]} intensity={1.5} castShadow />
        <directionalLight position={[-2, -0.5, -2]} intensity={0.5} castShadow color="white" />
      </group>
    </>
  );
};

useGLTF.preload("/Office Chair.glb");
