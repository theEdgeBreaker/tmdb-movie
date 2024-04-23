import React from "react";
import { FaFire } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { PiMonitorBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  const data = [
    { icon: <FaFire />, name: "Trending", link: "/" },
    // { icon: <FaFire />, name: "Trending", link: "trending" },
    { icon: <BiMoviePlay />, name: "Movies", link: "/movies" },
    { icon: <PiMonitorBold />, name: "TV Series", link: "/tv" },
    { icon: <IoSearch />, name: "Search", link: "/search" },
  ];
  return (
    <>
      <div className=" fixed bottom-0 w-full">
        <div className=" flex justify-center items-center  bg-gray-800 pt-2 pb-5">
          {data.map((val) => (
            <Link href={val.link} key={val.name}>
              <button
                className="px-24 hover:bg-gray-900 hover:bg-opacity-50 
                 text-teal-50 rounded-md"
              >
                <i className="flex justify-center text-2xl pt-2">{val.icon}</i>
                <h5 className="font-semibold text-lg pt-1 pb-2">{val.name}</h5>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
