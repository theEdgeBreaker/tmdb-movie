import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCard = ({ item, index }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  // const fetchMovieDetails = async (movieId) => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TRENDING_KEY}&language=en-US&append_to_response=videos`
  //   );

  //   const movieDetails = await response.json();
  //   console.log("movie-details", movieDetails);

  //   const trailerVideo = movieDetails.videos.results.find(
  //     (video) => video.type === "Trailer"
  //   );
  //   // "https://vimeo.com/yourid"
  //   // setMovie({
  //   //   ...movieDetails,
  //   //   video: {
  //   //     ...trailerVideo,
  //   //     video_url: `https://www.youtube.com/embed/${trailerVideo.key}`,
  //   //   },
  //   // });

  //   setMovie({
  //     ...movieDetails,
  //     video: {
  //       ...trailerVideo,
  //       video_url:
  //         trailerVideo.site === "YouTube"
  //           ? `https://www.youtube.com/embed/${trailerVideo.key}`
  //           : `https://vimeo.com/embed/${trailerVideo.key}`,
  //     },
  //   });
  // };

  // console.log(movie, "movie");

  return (
    <div
    // onClick={() => fetchMovieDetails(item.id)}
    >
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <Image
          className="rounded-2xl  h-[19rem]  sm:h-[21.5rem] lg:h-[15.5rem] xl:h-[23.5rem] 2xl:h-[23.5rem]
          object-cover object-left-top"
          src={
            item.poster_path ? `${img_300}/${item.poster_path}` : unavailable
          }
          width={270}
          height={200}
          alt="Picture"
          onClick={handleOpen}
          priority={true}
          layout="responsive"
        />

        {/* {isModalOpen && movie && ( */}
        {isModalOpen && (
          <MovieDetailsModal
            onClose={handleClose}
            item={item}
            // movie={movie}
            img_300={img_300}
            unavailable={unavailable}
          />
        )}

        <div className="pt-3">
          <h5 className="text-center font-semibold md:text-lg xl:text-base">
            {item.title || item.name}
          </h5>

          <div className="flex pt-2 px-3 gap-14 items-center justify-evenly text-base">
            <div>{item.media_type === "tv" ? "TV" : "Movie"}</div>
            <div className="text-end">
              {item.first_air_date || item.release_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
