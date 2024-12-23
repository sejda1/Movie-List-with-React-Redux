import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../store/actions/movieActions";

const FavoriteMovieList = (props) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-dark-blue shadow rounded-md dark:bg-night-sky dark:border-gold">
      <h5 className="font-bold text-gold">Favori Filmler</h5>
      {
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <Link
              key={movie.id}
              className="py-1 flex gap-2 justify-between text-light-gray hover:text-gold"
              to={`/movies/${movie.id}`}
              data-testid="favorite-movie"
            >
              {movie.title}
              <span
                onClick={() => dispatch(removeFavorite(movie.id))}
                className="material-icons hover:text-red-600 text-[18px] cursor-pointer"
              >
                remove_circle
              </span>
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default FavoriteMovieList;
