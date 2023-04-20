import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import axios from 'axios';
import {useState, useEffect}from "react";

export default function MovieList({movieList}) {
 
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
