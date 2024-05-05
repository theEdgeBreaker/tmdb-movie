"use client";

import React, { useState, useEffect, useCallback } from "react";
import Footer from "@/app/components/Footer";
import { MdSearch } from "react-icons/md";
import MovieCard from "@/app/components/MovieCard";
import Pagination from "@/app/components/Pagination";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_TRENDING_KEY;

  const fetchSearch = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      const { results } = await data.json();
      setContent(results);
      console.log("results: ", results);
    } catch (error) {
      console.error("Error fetching movies data: ", error);
    }
  }, [page, apiKey, searchText]);

  useEffect(() => {
    fetchSearch();
  }, []);

  const handleSearch = () => {
    fetchSearch();
    console.log("search: ", searchText);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
      console.log("search: ", searchText);
    }
  };

  return (
    <div className=" bg-black min-h-screen ">
      <div className=" pt-3 mb-5 pb-5">
        <div className=" w-full pt-5 pb-3 mt-5 flex  justify-center items-center">
          <input
            type="text"
            placeholder="search..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="px-4 py-3 rounded-lg w-1/2 bg-gray-800 text-white  "
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 rounded-md text-white 
              mx-2  w-1/6 md:w-1/12 py-2 text-3xl flex justify-center"
            onClick={handleSearch}
          >
            <MdSearch />
          </button>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-7 md:gap-8 2xl:gap-10 
          px-10 md:px-14 xl:px-22 2xl:px-32 
          pt-6 sm:pt-12 2xl:pt-8
          pb-72 lg:pb-60 
          relative
          "
        >
          {content &&
            content.map((item, index) => (
              <div
                className=" py-3.5 px-3.5 bg-gray-800 hover:bg-gray-700 ease-out rounded-2xl "
                key={item.id}
                style={{
                  height: "100%",
                }}
              >
                <MovieCard item={item} index={index} />
              </div>
            ))}
          {page > 1 && <Pagination page={page} setPage={setPage} />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
