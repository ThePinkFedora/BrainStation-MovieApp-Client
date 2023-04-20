import "./MovieCard.scss";
import placeholderImage from "../../images/placeholder.jpg";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { id, title, release_date, poster_path, vote_average } = movie;
  const img_url = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <Link to={"/" + id}>
      <article className="movie-card">
        <img className="movie-card__thumbnail" src={img_url} alt="thumbnail" />
        <div className="movie-card__content">
          <h4 className="movie-card__title">{title}</h4>
          <p className="movie-card__text">{release_date}</p>
          <p className="movie-card__text">{vote_average} / 10</p>
        </div>
      </article>
    </Link>
  );
}
