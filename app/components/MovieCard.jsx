import React from "react";
import Image from "next/image";

const MovieCard = ({ trendingData }) => {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-32 pt-14 pb-64">
      {trendingData.map((item, index) => (
        <div className=" pt-3" key={item.id}>
          {/* <div className=" bg-red-300 py-3 flex justify-center" key={item.id}> */}

          <div
            className="bg-gray-800 flex flex-col items-center rounded-md"
            style={{ height: "31rem" }}
            key={item.id}
          >
            <Image
              className="pt-4 pb-0 px-3 rounded-3xl "
              src={
                item.poster_path
                  ? `${img_300}/${item.poster_path}`
                  : unavailable
              }
              width={270}
              height={200}
              alt="Picture"
            />

            <div className="pt-3 ">
              <h5 className="text-center font-semibold text-lg">
                {item.title || item.name}
              </h5>

              <div className="flex pt-2 gap-14 items-center justify-evenly text-base">
                <div>{item.media_type === "tv" ? "TV" : "Movie"}</div>
                <div>{item.first_air_date || item.release_date}</div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
