import "./Home.scss";
import MovieList from "../MovieList/MovieList";

export default function Home({movieList}) {
  return (
    <main className="home">
      <MovieList movieList={movieList}/>
    </main>
  );
}
