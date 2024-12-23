import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovie, toggleFavorites } from "../store/actions/movieActions";


const MovieHeader = (props) => {
  const appTitle = useSelector((state) => state.movie.appTitle);
  const displayFavorites = useSelector(
    (state) => state.favorite.displayFavorites
  );

  const dispatch = useDispatch();

  const handleToggleFavorites = () => {
    dispatch(toggleFavorites());
  };

  const handleChange = (e) => {
    dispatch(searchMovie(e.target.value));
  };

  return (
    <div className="flex flex-col justify-between items-center shadow rounded-md bg-dark-blue p-2 pl-3 my-2 dark:bg-night-sky">
      <h2 className="text-gold">{appTitle}</h2>
      <div className="flex flex-col md:flex-row gap-2">
        {location.pathname === "/movies" ? (
          <input
            type="text"
            onChange={handleChange}
            className="border w-44 bg-night-sky text-light-gray placeholder-light-gray focus:outline-none"
            placeholder="Film Ara"
          />
        ) : ( ''

        )}

        <div
          onClick={handleToggleFavorites}
          className="myButton bg-gold hover:bg-gold-dark text-dark-blue cursor-pointer"
        >
          <span>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link
          to="/movies"
          className="myButton bg-gold hover:bg-gold-dark text-dark-blue"
        >
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="myButton bg-gold hover:bg-gold-500 text-light-gray"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieHeader;
