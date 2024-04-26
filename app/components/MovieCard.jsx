import React from "react";
import Image from "next/image";

const MovieCard = ({ item, index }) => {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-2xl  h-[19rem]  sm:h-[21.5rem] lg:h-[15.5rem] xl:h-[22rem] 2xl:h-[23.5rem]
          object-cover object-left-top"
          src={
            item.poster_path ? `${img_300}/${item.poster_path}` : unavailable
          }
          width={270}
          style={{
            width: "100%",
            "@media only screen and (min-width: 769px)": {
              width: "100px",
            },
          }}
          height={200}
          alt="Picture"
        />

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
