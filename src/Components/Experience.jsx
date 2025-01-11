import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
  Text,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OfficeChair } from "./OfficeChair";
import { Suspense, useEffect, useState } from "react";
import { state } from "../../store";
import { useSnapshot } from "valtio";
import OfficeChairLoading from "./OfficeChairLoading";

export const Experience = () => {
  const snap = useSnapshot(state);
  const LeatherMats = [
    "Barcelona Olive",
    "Diesel Brown",
    "Eco Toffee",
    "Gizelle Latte",
    "Diesel Black",
  ];

  const { progress } = useProgress();
  state.modelLoadProgress = progress;

  const [officeLoading, setOfficeLoading] = useState(true);

  useEffect(() => {
    // Check if the model load progress is 100
    if (snap.modelLoadProgress === 100) {
      const timer = setTimeout(() => {
        setOfficeLoading(false);
      }, 3000);

      // Cleanup the timer on component unmount or when snap.modelLoadProgress changes
      return () => clearTimeout(timer);
    }
  }, [snap.modelLoadProgress]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-transparent">
      {officeLoading ? (
        <div className="-mt-44">
          <OfficeChairLoading />
        </div>
      ) : (
        <Canvas shadows camera={{ fov: 35 }}>
          <Suspense fallback={null}>
            <OfficeChair />
            <AccumulativeShadows position={[0, -0.25, 0]} frames={50} alphaTest={0.9} scale={10}>
              <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
            </AccumulativeShadows>
            <Text
              position={[0, 0.4, -1]}
              rotation={[0, 0, 0]}
              fontSize={0.4}
              font="../../static/fonts/Quickless.otf"
            >
              {LeatherMats[snap.leatherColor]}
              <meshBasicMaterial color={"white"} />
            </Text>
            <Environment preset="city" environmentIntensity={1} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
