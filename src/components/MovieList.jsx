import React from "react";

import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";
import { useSelector } from "react-redux";

const MovieList = (props) => {
  const movies = useSelector((state) =>
    state.movie.filteredMovies && state.movie.filteredMovies.length > 0
      ? state.movie.filteredMovies
      : state.movie.movies || []
  );
  return (
    <div className="flex-1">
      <div className="relative overflow-x-auto shadow-md mb-4 sm:min-h-[400px] ">
        <table className="w-full text-sm text-left text-light-gray ">
          <thead className="text-xs text-gold uppercase bg-dark-blue dark:bg-night-sky">
            <tr className="bg-dark-blue border-b dark:bg-night-sky dark:border-gold hover:bg-blue-900 dark:hover:bg-night-hover">
              <th className="px-6 py-4 font-medium text-gold whitespace-nowrap dark:text-gold">
                İsim
              </th>
              <th className="text-gold">Yönetmen</th>
              <th className="text-gold">Tür</th>
              <th className="text-gold">Metascore</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-sm">
            {movies.map((movie, index) => (
              <MovieListItem key={index} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>

      <MovieFooter totalMovies={movies.length} />
    </div>
  );
};

export default MovieList;
