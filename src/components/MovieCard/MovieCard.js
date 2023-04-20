import "./MovieCard.scss";
import placeholderImage from "../../images/placeholder.jpg";
import {Link} from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { id, title, release_date, poster_path, vote_average } = movie;
  return (
    <article className="movie-card">
    <Link to = "/id">
      <img className="movie-card__thumbnail" src={placeholderImage} alt="thumbnail" />
      <div className="movie-card__content">
        <h4 className="movie-card__title">{title}</h4>
        <p className="movie-card__text">{release_date}</p>
        <p className="movie-card__text">{vote_average}</p>
      </div>
      </Link>
    </article>
  );
}
