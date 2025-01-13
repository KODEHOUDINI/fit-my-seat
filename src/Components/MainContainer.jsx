import { FaRegCheckCircle } from "react-icons/fa";
import { Experience } from "./Experience";
import { NavBar } from "./NavBar";
import { motion } from "motion/react";
import { state } from "../../store";
import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const thumbNails = ["1", "2", "3", "4", "5"];
  const gradients = [
    "from-[#254c2f] to-[#002c00]",
    "from-[#69453E] to-[#361610]",
    "from-[#692910] to-[#3c1100]",
    "from-[#877b66] to-[#5d4b2b]",
    "from-[#45464C] to-[#1C1C1F]",
  ];
  const LeatherMats = [
    "Barcelona Olive",
    "Diesel Brown",
    "Eco Toffee",
    "Gizelle Latte",
    "Diesel Black",
  ];

  const handleTextureColor = (positionInArray) => {
    state.leatherColor = positionInArray;
  };
  const snap = useSnapshot(state);

  const [showMatPresets, setShowMatPresets] = useState(false);

  useEffect(() => {
    // Check if the model load progress is 100
    if (snap.modelLoadProgress === 100) {
      const timer = setTimeout(() => {
        setShowMatPresets(true);
      }, 1000); // 5000ms = 5 seconds

      // Cleanup the timer on component unmount or when snap.modelLoadProgress changes
      return () => clearTimeout(timer);
    }
  }, [snap.modelLoadProgress]);

  return (
    <>
      <div
        className={`relative overflow-hidden flex justify-between w-screen h-screen text-center p-1 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  ${
          gradients[snap.leatherColor]
        }`}
      >
        {/* Nav Here */}
        <div className="flex justify-center items-start w-full z-10 p-1 absolute top-0 left-0">
          <NavBar />
        </div>
        <div className="h-full w-full bg-transparent">
          <Experience />
        </div>
        {/* Simple Footer */}
        {showMatPresets && (
          <div className="flex select-none gap-2 flex-col w-[80%] text-white p-1 z-10 absolute left-1/2 -translate-x-1/2 bottom-5">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeIn",
              }}
              className="flex justify-between text-xl"
            >
              <div>Customization</div>
              <div>Price</div>
            </motion.div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeIn",
              }}
              className="flex justify-between text-4xl"
            >
              <div>Material Type:</div>
              <div>200 USD</div>
            </motion.div>
            <div className="flex justify-between gap-1">
              {thumbNails.map((Icon, index) => (
                <motion.div
                  key={`${index}thumb`}
                  className="cursor-pointer p-2 rounded-md bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 border border-gray-100"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                  onClick={() => handleTextureColor(index)}
                >
                  <img
                    width={355}
                    height={200}
                    src={`/Material Options/Leather/${Icon}.jpeg`}
                    alt={`${Icon}`}
                    className="rounded-md"
                  />
                  <div className="flex flex-col justify-center items-center absolute z-20 top-0 w-full h-full hover:scale-125 transition-all duration-300 ">
                    {snap.leatherColor == index && <FaRegCheckCircle color="white" size={50} />}
                    <div className="text-xl">{LeatherMats[index]}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainContainer;
