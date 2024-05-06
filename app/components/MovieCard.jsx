import React from "react";
import Image from "next/image";

import { useState } from "react";
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

  return (
    <div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <Image
          className="rounded-2xl  h-[19rem] w-[100%]  sm:h-[21.5rem] lg:h-[21.5rem] xl:h-[23.5rem] 2xl:h-[23.5rem]
          object-cover object-top sm:object-left-top"
          src={
            item.poster_path ? `${img_300}/${item.poster_path}` : unavailable
          }
          width={270}
          height={200}
          alt="Picture"
          onClick={handleOpen}
          priority={true}
          // layout="responsive"
        />

        {isModalOpen && (
          <MovieDetailsModal
            onClose={handleClose}
            item={item}
            img_300={img_300}
            unavailable={unavailable}
          />
        )}

        <div className="pt-3">
          <h5 className="text-center font-semibold md:text-lg xl:text-base text-white">
            {item.title || item.name}
          </h5>

          <div className="flex pt-2 px-3 gap-14 items-center justify-evenly text-base text-white">
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
