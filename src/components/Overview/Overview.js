import {useParams, useState} from 'react';
import placeholderImage from "../../images/placeholder.jpg";
import "./Overview.scss";
import Details from '../../data/details.json'
export default function Overview(){
const {title, runtime, release_date, poster_path, genres, overview, vote_average}=Details;

    return(
        <main>
        <h1 className = "overview__title">{title}</h1>
        <div>
            <div className = "overview__details">
            
            <div className = "overview__date">{release_date}</div>
            <div className="overview__vote">{vote_average}</div>
            <div className="overview__runtime">{runtime}</div>
            <div className="overview__genre">{genres[0].name}</div>
            </div>
            <div className="overview__overview">{overview}</div>
           <div className="overview__image-div"><img className="overview__image" src={placeholderImage} alt="thumbnail" /></div> 
        </div>
        </main>
    )
};