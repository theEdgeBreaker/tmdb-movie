import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const [page, setPage] = useState(1);
  const [trendingData, setTrendingData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = process.env.NEXT_PUBLIC_TRENDING_KEY;

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`
        );
        const data = await response.json();
        setTrendingData(data.results);
        console.log("data:", data);

        setTotalPages(Math.trunc(data.total_pages / 65));
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchTrending();
  }, [apiKey, page]);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-7 md:gap-8 2xl:gap-10 
          px-10 md:px-14 xl:px-22 2xl:px-32 
          pt-6 sm:pt-12 2xl:pt-16 
          pb-72 lg:pb-60 
          relative"
    >
      {trendingData.map((item, index) => (
        <div
          key={item.id}
          className="py-3.5 px-3.5  bg-gray-800 hover:bg-gray-700 ease-out rounded-2xl "
          style={{
            height: "100%",
          }}
        >
          <MovieCard item={item} index={index} />
        </div>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TrendingMovies;
