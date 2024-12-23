import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = (props) => {
  const { id, title, director, genre, metascore } = props.movie;

  return (
    <tr className="bg-dark-blue border-b border-gold dark:bg-night-sky dark:border-gold hover:bg-blue-900 dark:hover:bg-night-hover">
      <td className="pl-4 text-light-gray">{title}</td>
      <td className="text-light-gray">{director}</td>
      <td className="text-light-gray">{genre}</td>
      <td className="text-center text-light-gray">{metascore}</td>
      <td className="p-2">
        <Link
          to={`/movies/${id}`}
          className="myButton bg-gold hover:bg-gold-dark text-dark-blue"
        >
          Detay
        </Link>
      </td>
    </tr>
  );
};

export default MovieListItem;
