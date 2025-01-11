import { MiddleMenu } from "./MiddleMenu";
import { NavBar } from "./NavBar";

export const UI = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="text-center p-1">
        <NavBar />
      </div>
      <div className="flex-1 flex justify-between items-center text-center font-happyboy p-1">
        <MiddleMenu />
      </div>
      <div className="text-center p-1">bottom</div>
    </div>
  );
};
