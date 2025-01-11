import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export const LightingSetup = ({
  preset,
  mainLightPosition,
  fillLightPosition,
  mainIntensity,
  fillIntensity,
}) => {
  // Define the light positions for each preset
  const lightingConfig = {
    rembrandt: {
      main: [1, 2, 1],
      fill: [-2, -0.5, -2],
    },
    portrait: {
      main: [-1, 2, 0.5],
      fill: [-1, 0.5, -1.5],
    },
    upfront: {
      main: [0, 2, 1],
      fill: [-1, 0.5, -1.5],
    },
    soft: {
      main: [-2, 4, 4],
      fill: [-1, 0.5, -1.5],
    },
  };

  // Get the positions for the selected preset
  const { main, fill } = lightingConfig[preset] || lightingConfig["rembrandt"];

  // Set dynamic positions and intensities based on controls
  const mainPosition = mainLightPosition || main;
  const fillPosition = fillLightPosition || fill;

  // Create references for the lights
  const mainLightRef = useRef();
  const fillLightRef = useRef();

  // Attach helpers using the useHelper hook
  useHelper(mainLightRef, DirectionalLightHelper, "royalblue"); // Helper for the main light
  useHelper(fillLightRef, DirectionalLightHelper, "royalblue"); // Helper for the fill light

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        ref={mainLightRef}
        position={mainPosition}
        intensity={mainIntensity}
        castShadow
      />
      <directionalLight
        ref={fillLightRef}
        position={fillPosition}
        intensity={fillIntensity}
        castShadow
        color="white"
      />
    </>
  );
};
