import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import movieListData from "../../data/movies.json";
import axios from 'axios';
import {useState, useEffect}from "react";

export default function MovieList() {
  const [movieList, setMovieList]=useState(null);
 
useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=18738ecfafb89b9dc502473373a38d50')
  .then((res)=>{
  setMovieList(res.data.results)
  })
}, []);
if(!movieList){
  return <div>Loading...</div>
}
  return (
    <div>
      <h2 className = "movie-list__title">Movies</h2>
      <ul className="movie-list__list">
        {movieList.map((movie) => (
         <li className="movie-list__item" key={movie.id} > <MovieCard  movie={movie} /></li>
        ))}
      </ul>
    </div>
  );
}
