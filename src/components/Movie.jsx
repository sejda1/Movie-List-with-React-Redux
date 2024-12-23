import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { addFavorites, deleteMovie } from "../store/actions/movieActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const movie = movies.find((movie) => movie.id === Number(id));

  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId));
    push("/movies");
  };
  const handleAddFavorites = (movie) => {
    dispatch(addFavorites(movie));
    push("/");
  };
  if (!movie) {
    return <div>Film bulunamadı!</div>;
  }
  return (
    <div className="bg-dark-blue rounded-md shadow flex-1 dark:bg-night-sky dark:text-light-gray">
      <div className="p-5 pb-3 border-b border-gold">
        <h4 className="text-xl font-bold text-gold">{movie.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label text-light-gray">İsim</div>
          <div className="flex-1 text-light-gray">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label text-light-gray">Yönetmen</div>
          <div className="flex-1 text-light-gray">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label text-light-gray">Tür</div>
          <div className="flex-1 text-light-gray">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label text-light-gray">Metascore</div>
          <div className="flex-1 text-light-gray">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label text-light-gray">Açıklama</div>
          <p className="flex-1 text-light-gray">{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gold flex justify-end gap-2">
        <button
          onClick={() => handleDelete(movie.id)}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500 dark:bg-red-200 dark:hover:bg-red-400 dark:text-dark-blue"
        >
          Sil
        </button>
        <button
          onClick={() => handleAddFavorites(movie)}
          className="myButton bg-gold hover:bg-gold-dark text-dark-blue"
        >
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Movie;