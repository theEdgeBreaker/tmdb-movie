import React from "react";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-gray-800 uppercase py-5 text-4xl">
      <div className=" text-teal-50 text-5xl">
        <IoVideocam />
      </div>
      <div className=" text-teal-50 tracking-widest">CineSphere</div>
    </div>
  );
};

export default Header;
