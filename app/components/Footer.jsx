import React from "react";
import { FaFire } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { PiMonitorBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  const data = [
    // { icon: <FaFire />, name: "Home", link: "/" },
    { icon: <FaFire />, name: "Trending", link: "/trending" },
    { icon: <BiMoviePlay />, name: "Movies", link: "/movies" },
    { icon: <PiMonitorBold />, name: "TV Series", link: "/tv" },
    { icon: <IoSearch />, name: "Search", link: "/search" },
  ];

  console.log(data, "");
  return (
    <div>
      <div className=" fixed bottom-0 w-full">
        <div className="flex justify-center items-center overflow-hidden bg-gray-800 pt-2 pb-5 sm:-b-6 md:pb-7">
          {data.map((val) => (
            <Link href={val.link} key={val.name}>
              <button
                className=" px-7 sm:px-12 md:px-16 xl:px-24 hover:bg-gray-900 hover:bg-opacity-50 
                 text-teal-50 rounded-md"
              >
                <i className="flex justify-center text-base sm:text-lg md:text-2xl pt-2">
                  {val.icon}
                </i>
                <h5 className="sm:font-semibold text-xs sm:text-sm md:text-lg pt-1.5 sm:pt-1">
                  {val.name}
                </h5>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
