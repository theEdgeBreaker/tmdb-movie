"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Genre from "@/app/components/Genre";
import useGenre from "@/app/useGenre";
import Pagination from "@/app/components/Pagination";
import MovieCard from "@/app/components/MovieCard";

const Page = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);
  const apiKey = process.env.NEXT_PUBLIC_TRENDING_KEY;

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`
        );
        const dataJ = await data.json();
        setState(dataJ.results);
        console.log("dataa: ", dataJ);

        setTotalPages(Math.trunc(dataJ.total_pages / 2900));
      } catch (error) {
        console.error("Error fetching movies data: ", error);
      }
    };

    fetchTrending();
  }, [page, apiKey, genreURL]);

  return (
    <div>
      <Header />
      <div className=" bg-black  text-white min-h-screen pt-6">
        <div className=" w-full ">
          <div className=" flex gap-3 justify-center items-center  ">
            <h4 className="text-4xl font-bold underline">Movies</h4>
          </div>
        </div>
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="movie"
          value={value}
          setValue={setValue}
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-7 md:gap-8 2xl:gap-10 
          px-10 md:px-14 xl:px-22 2xl:px-32 
          pt-7 sm:pt-10 2xl:pt-8
          pb-72 lg:pb-60 
          relative"
        >
          {state.map((item, index) => (
            <div
              className=" py-3.5 px-3.5  bg-gray-800 hover:bg-gray-700 ease-out rounded-2xl "
              key={item.id}
              style={{
                height: "100%",
              }}
            >
              <MovieCard item={item} index={index} />
            </div>
          ))}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
