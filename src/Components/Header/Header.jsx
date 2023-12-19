import React from "react";
import Logo from "./Logo";
import Options from "./Options";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div className="h-[10%] bg-gray-dark border-b-[0.5px] border-b-white flex justify-center items-center">
      <div className="w-[85%] h-[100%] flex flex-row justify-start items-center">
        <div className="w-1/6 h-full border-2 border-white ">
          <Logo />
        </div>
        <div className="w-3/6 h-full">
          <Options />
        </div>
        <div className="w-2/6 h-full">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Header;
