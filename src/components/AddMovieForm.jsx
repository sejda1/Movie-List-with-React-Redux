import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addMovie } from "../store/actions/movieActions";

const AddMovieForm = (props) => {
  const { push } = useHistory();

  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    id: Math.floor(Math.random() * 10000 + 100),
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddMovie = (movie) => {
    console.log(movie);
    dispatch(addMovie(movie));
    push("/movies/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(movie);
  };

  const { title, director, genre, metascore, description } = movie;
  return (
    <div className="bg-dark-blue rounded-md shadow flex-1 dark:bg-night-sky dark:text-light-gray">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-gold">
          <h4 className="text-xl font-bold text-gold">
            Yeni Film Ekle <strong>{title}</strong>
          </h4>
        </div>
        <div className="px-5 py-3">
          <div className="py-2">
            <label htmlFor="title" className="block pb-1 text-lg text-light-gray">
              Title
            </label>
            <input
              className="bg-night-sky text-light-gray border-gold focus:ring-gold"
              value={title}
              onChange={handleChange}
              name="title"
              id="title"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="director" className="block pb-1 text-lg text-light-gray">
              Director
            </label>
            <input
              className="bg-night-sky text-light-gray border-gold focus:ring-gold"
              value={director}
              onChange={handleChange}
              name="director"
              id="director"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="genre" className="block pb-1 text-lg text-light-gray">
              Genre
            </label>
            <input
              className="bg-night-sky text-light-gray border-gold focus:ring-gold"
              value={genre}
              onChange={handleChange}
              name="genre"
              id="genre"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="metascore" className="block pb-1 text-lg text-light-gray">
              Metascore
            </label>
            <input
              className="bg-night-sky text-light-gray border-gold focus:ring-gold"
              value={metascore}
              onChange={handleChange}
              name="metascore"
              id="metascore"
              type="number"
            />
          </div>
          <div className="py-2">
            <label htmlFor="description" className="block pb-1 text-lg text-light-gray">
              Description
            </label>
            <textarea
              className="bg-night-sky text-light-gray border-gold focus:ring-gold"
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-gold flex justify-end gap-2">
          <Link to={`/movies/`} className="myButton bg-red-600 hover:bg-red-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-gold hover:bg-gold-dark text-dark-blue"
          >
            Yeni Filmi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
