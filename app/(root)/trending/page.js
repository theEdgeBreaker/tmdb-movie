"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
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

  return <div>page</div>;
};

export default Page;
