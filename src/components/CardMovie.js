import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const CardMovie = ({ addOrRemoveFavs, movie = {} }) => {
  const { id: movieID, title, overview, poster_path } = movie;
  const favoritesArray = localStorage.getItem("favoritesMovies") || [];

  return (
    <div className="col-2">
      <div className="card my-3">
        <img
          src={
            movie?.imgURL ?? `https://image.tmdb.org/t/p/w500/${poster_path}`
          }
          className="card-img-top"
          alt="movie"
        />
        {typeof addOrRemoveFavs === "function" && (
          <button
            className="favorite-btn"
            onClick={addOrRemoveFavs}
            data-movie-id={movieID}
          >
            {favoritesArray.includes(movieID) ? (
              <span>❤︎</span>
            ) : (
              <span>🖤</span>
            )}
          </button>
        )}
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 15)}...</h5>
          <p className="card-text">{overview.substring(0, 30)}...</p>
          <Link to={`/detail?movieID=${movieID}`} className="btn btn-primary">
            <FormattedMessage id="body.movieDetail.viewDetail" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
