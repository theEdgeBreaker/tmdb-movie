"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaFire } from "react-icons/fa6";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const [trendingData, setTrendingData] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_TRENDING_KEY; // Correctly accessing the apiKey

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );
        const data = await response.json(); // Fetching data from API in JSON format
        setTrendingData(data.results); // Storing the data in the state
        console.log("data:", data);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchTrending(); // Calling the fetchTrending function only during the initial rendering of the app
  }, [apiKey]); // Include apiKey in the dependency array to ensure useEffect runs when it changes
  return (
    <div>
      <Header />
      <div className=" bg-black  text-white min-h-screen pt-5">
        <div className=" w-full ">
          <div className=" flex gap-3 justify-center items-center  ">
            <FaFire className=" text-red-600 text-4xl font-bold" />
            <h4 className="text-3xl font-semibold underline">Trending Today</h4>
            <FaFire className=" text-red-600 text-4xl font-bold" />
          </div>
        </div>

        <MovieCard trendingData={trendingData} />
      </div>

      <Footer />
    </div>
  );
}
