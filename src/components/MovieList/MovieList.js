import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import movieListData from "../../data/movies.json";

export default function MovieList() {
  const movieList = movieListData.results;
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
