import "./Home.scss";
import MovieList from "../MovieList/MovieList";

export default function Home({ movieList }) {
  document.title = `MOVIE APP: Home`;

  return (
    <main className="home">
      <MovieList movieList={movieList} />
    </main>
  );
}
