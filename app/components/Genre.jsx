import React, { useEffect } from "react";

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
  const apiKey = process.env.NEXT_PUBLIC_TRENDING_KEY;

  useEffect(() => {
    const fetchGenre = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`
      );
      const { genres } = await data.json();
      console.log("genres: ", genres);
      setGenre(genres);
    };

    fetchGenre();
  }, [setGenre, type, apiKey]);

  const CategoryAdd = (genres) => {
    //first - select everything that's inside of values using the spread operator
    //second - add those genres that are being sent from the non-selected arrays
    setValue([...value, genres]);
    //removing those genres from the non selected array that have been added to the selected array.
    setGenre(genre.filter((g) => g.id !== genres.id));
    setPage(1);
  };

  //removing a perticular genre from the selected array
  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);
  };

  return (
    <div className="container pt-6 sm:pt-8 ">
      <div className="px-10 md:px-14 xl:px-22 2xl:px-32  ">
        <div className="flex flex-wrap ">
          {value &&
            value.map((val) => {
              const { id, name } = val;
              const isSelected = value.some((g) => g.id === val.id);
              return (
                <div
                  className={` m-1 md:m-2 ${
                    isSelected ? "bg-blue-600" : "bg-gray-800"
                  } rounded-3xl`}
                  key={id}
                >
                  <button
                    className="text-white text-xs px-2 py-1 md:px-4 md:py-2 text-center "
                    onClick={() => CategoryRemove(val)}
                  >
                    {name}
                  </button>
                </div>
              );
            })}

          {genre &&
            genre.map((Gen) => {
              const { id, name } = Gen;
              return (
                <div
                  className=" m-1 sm:m-1.5 md:m-2 bg-gray-800 rounded-3xl hover:bg-blue-600"
                  key={id}
                >
                  <button
                    className="bg-dark text-white text-xs sm:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-center"
                    onClick={() => CategoryAdd(Gen)}
                  >
                    {name}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Genre;
