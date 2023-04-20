import MovieCard from "../MovieCard/MovieCard";
import "./WatchList.scss";

export default function WatchList({ movieList, watchlist }) {
  const watchMovieList = movieList.filter((movie) => watchlist.includes(movie.id + ""));

  document.title = `MOVIE APP: Watchlist`;

  return (
    <main className="watch-list">
      <div className="watch-list__content">
        <h1 className="watch-list__title">Watch List</h1>
        <ul className="watch-list__list">
          {watchMovieList.map((movie) => (
            <li className="watch-list__item" key={movie.id}>
              {" "}
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
