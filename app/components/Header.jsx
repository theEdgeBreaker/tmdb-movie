import React from "react";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-gray-800 uppercase py-5 ">
      <div className=" text-teal-50 text-4xl sm:text-5xl">
        <IoVideocam />
      </div>
      <div className=" text-teal-50 text-3xl sm:text-4xl tracking-widest">
        CineSphere
      </div>
    </div>
  );
};

export default Header;
