"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaFire } from "react-icons/fa6";
import TrendingMovies from "./components/TrendingMovies";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" bg-black  text-white min-h-screen pt-5 sm:pt-6 md:pt-8">
        <div className=" w-full ">
          <div className=" flex gap-3 justify-center items-center  ">
            <FaFire className=" text-red-600 text-3xl sm:text-4xl font-bold" />
            <h4 className=" text-2xl sm:text-3xl font-semibold underline">
              Trending Today
            </h4>
            <FaFire className=" text-red-600 text-3xl sm:text-4xl font-bold" />
          </div>
        </div>

        <TrendingMovies />
      </div>

      <Footer />
    </div>
  );
}
