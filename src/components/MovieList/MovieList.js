import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ movieList, watchlist }) {
  return (
    <div>
      <h2 className="movie-list__title">Movies</h2>
      <ul className="movie-list__list">
        {movieList.map((movie) => (
          <li className="movie-list__item" key={movie.id}>
            {" "}
            <MovieCard movie={movie} highlight={watchlist.includes(movie.id + "")} />
          </li>
        ))}
      </ul>
    </div>
  );
}
