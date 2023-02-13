import { Navigate } from "react-router-dom";
import { useFetchMovie } from "../hooks/useFetchMovie";
import { useUrlParams } from "../hooks/useValueUrlParams";

export const MovieDetail = () => {
  const token = sessionStorage.getItem("token");

  let { valueQuery: idMovieInQuery } = useUrlParams({
    queryParamsString: window.location.search,
    stringIdQuery: "movieID",
  });

  const { movie, isLoading } = useFetchMovie({ movie_id: idMovieInQuery });

  return (
    <>
      {!token && <Navigate to="/" />}
      {isLoading && <p>Cargando...</p>}
      {movie && (
        <>
          <h2>Titulo: {movie.title}</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-fluid"
                alt="movie poster"
              />
            </div>
            <div className="col-8">
              <h5>Fecha de estreno: {movie.release_date}</h5>
              <h5>Reseña:</h5>
              <p>{movie.overview}</p>
              <h5>Rating: {Math.round(movie.vote_average)}</h5>
              <h5>Generos:</h5>
              <ul>
                {movie.genres.map((movieGenre) => (
                  <li key={movieGenre.id}>{movieGenre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
