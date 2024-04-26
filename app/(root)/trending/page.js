"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TrendingMovies from "@/app/components/TrendingMovies";
import { FaFire } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <Header />
      <div className=" bg-black  text-white min-h-screen pt-6">
        <div className=" w-full ">
          <div className=" flex gap-3 justify-center items-center  ">
            <FaFire className=" text-red-600 text-4xl font-bold" />
            <h4 className="text-3xl font-semibold underline">Trending Today</h4>
            <FaFire className=" text-red-600 text-4xl font-bold" />
          </div>
          <TrendingMovies />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
