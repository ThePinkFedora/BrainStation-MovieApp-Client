import "./Home.scss";
import MovieList from "../MovieList/MovieList";

export default function Home({ movieList, watchlist }) {
  document.title = `MOVIE APP: Home`;

  return (
    <main className="home">
      <MovieList movieList={movieList} watchlist={watchlist} />
    </main>
  );
}
