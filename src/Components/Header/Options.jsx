import React, { useState } from "react";

const Options = () => {
  const [active, setActive] = useState("Home");
  const activeOptionStyle = " border-highlight-dark";
  return (
    <ul className="flex flex-row justify-between items-center gap-2 px-4 h-full text-lg cursor-pointer">
      <li
        className={`${
          active == "Home" ? activeOptionStyle : "border-transparent"
        } h-full flex items-center border-b-4`}
        onClick={() => {
          setActive("Home");
        }}
      >
        Home
      </li>
      <li
        className={`${
          active == "Explore" ? activeOptionStyle : "border-transparent"
        } h-full flex items-center border-b-4`}
        onClick={() => {
          setActive("Explore");
        }}
      >
        Explore
      </li>
      <li>Home</li>
      <li>Explore</li>
      <li>Home</li>
      <li>Explore</li>
    </ul>
  );
};

export default Options;
