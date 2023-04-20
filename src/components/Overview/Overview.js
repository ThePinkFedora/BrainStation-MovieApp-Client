import { useState, useEffect } from "react";
import placeholderImage from "../../images/placeholder.jpg";
import "./Overview.scss";
import Details from "../../data/details.json";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Overview() {

const {id} = useParams();

const movieDetailsUrl=`https://api.themoviedb.org/3/movie/${id}?api_key=18738ecfafb89b9dc502473373a38d50&language=en-US`;
 
  
const[movieDetails, setMovieDetails]= useState(null);
 useEffect(()=>{
    axios.get(movieDetailsUrl)
    .then((res)=>{
        setMovieDetails(res.data);
    })
 })
 if(!movieDetails){
    return <div> Loading...</div>
 }

 const { title, runtime, release_date, poster_path, genres, overview, vote_average } = movieDetails;
 const duration = `${Math.floor(runtime / 60)}:${runtime % 60}`;
 const img_url='https://image.tmdb.org/t/p/original'+poster_path;
 
  return (
    <main className="overview">
      <h1 className="overview__title">{title}</h1>
      <div className="overview__main-content">
        <div className="overview__image-div">
          <img className="overview__image" src={img_url} alt="thumbnail" />
        </div>
        <div className="overview__content">
          <div className="overview__details">
            <div className="overview__date">Release: {release_date}</div>
            <div className="overview__runtime">Duration: {duration}</div>
          </div>
          <div className="overview__overview">{overview}</div>
          <div className="overview__details">
            <div className="overview__vote">Rating: {vote_average}</div>
            <div className="overview__genre">Genre: {genres[0].name}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
