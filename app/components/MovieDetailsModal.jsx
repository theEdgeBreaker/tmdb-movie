import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const MovieDetailsModal = ({ onClose, item, img_300, unavailable }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  const handleToggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center
       bg-gray-500 bg-opacity-70 z-50"
      // onClick={onClose}
    >
      <div
        className="
        w-[90%] h-[70%]
        md:w-[93%] md:h-[63%]
        lg:w-[88%] lg:h-[55%]
        xl:w-[82%] 2xl:w-[68%]
        rounded-lg
        overflow-hidden
        md:flex 
        relative"
      >
        <Image
          className="
          
          w-[100%] h-[100%]
           md:w-[40%] md:h-[100%]
          object-cover object-left-top
           relative   
           "
          src={
            item.poster_path ? `${img_300}/${item.poster_path}` : unavailable
          }
          width={270}
          height={200}
          alt="Picture"
        />
        <span
          className=" text-2xl absolute right-4 sm:right-2 top-3 sm:top-1 z-50"
          onClick={onClose}
        >
          <IoClose />
        </span>

        <div className=" absolute md:static inset-0 w-[100%] h-[100%]  md:w-[60%] md:h-[100%] bg-black opacity-85 md:bg-black md:opacity-100  z-40">
          <div className="px-10 py-16 sm:py-9 ">
            <h5 className="text-center text-3xl sm:text-4xl md:text-4xl uppercase">
              {item.title || item.name}
            </h5>

            <div className="flex pt-7 sm:pt-4 items-center justify-between text-sm sm:text-base">
              <div>{item.media_type === "tv" ? "TV" : "Movie"}</div>

              <div className="">Rating: {item.vote_average.toFixed(1)}</div>

              <div className="">
                {item.first_air_date
                  ? new Date(item.first_air_date).getFullYear()
                  : item.release_date
                  ? new Date(item.release_date).getFullYear()
                  : ""}
              </div>
            </div>

            <div className="text-sm sm:text-base font-normal pt-7 sm:pt-5 overflow-hidden">
              <div className={`${!showFullOverview ? "line-clamp-6" : ""}`}>
                <p>{item.overview}</p>
              </div>
              {/* Check if the length of the overview text is greater than 6 * 40px (approximate height of 6 lines) */}
              {item.overview.length > 240 && (
                <>
                  {!showFullOverview && (
                    <button
                      className="text-blue-500 hover:text-blue-400 mt-2"
                      onClick={() => handleToggleOverview()}
                    >
                      Read More
                    </button>
                  )}
                  {showFullOverview && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => handleToggleOverview()}
                    >
                      Read Less
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
