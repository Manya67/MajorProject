import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const SortButtons = ({ name }) => {
  return (
    <div
      className="bg-gray-light rounded-xl px-4 py-2 flex flex-row justify-center items-center gap-2"
      onClick={() => {}}
    >
      <span>{name}</span>
      <IoIosArrowDropdown />
    </div>
  );
};

export default SortButtons;
