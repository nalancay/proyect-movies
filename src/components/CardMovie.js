import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  const { id: movieID, title, overview, poster_path } = movie;
  return (
    <div className="col-2">
      <div className="card my-3">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt="movie"
        />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 15)}...</h5>
          <p className="card-text">{overview.substring(0, 30)}...</p>
          <Link to={`/detail?movieID=${movieID}`} className="btn btn-primary">
            View detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
