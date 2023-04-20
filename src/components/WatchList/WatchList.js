import MovieCard from "../MovieCard/MovieCard";

export default function WatchList({ movieList, watchlist}){
 const watchMovieList = movieList.filter((movie)=>watchlist.includes(movie.id));

console.log({watchlist, watchMovieList})
    return(
    <main>
    <h1>Watch List</h1>
      <ul className="watch-list__list">
        {watchMovieList.map((movie) => (
         <li className="movie-list__item" key={movie.id} > <MovieCard  movie={movie} /></li>
        ))}
      </ul>
 
    </main>
    )
};