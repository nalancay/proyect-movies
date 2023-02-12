import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";
import ApiMovies from "../api/movies";

async function fetchData(movie_id) {
  const response = await ApiMovies.getMovieDetail(movie_id);
  return response;
}
export const useFetchMovie = ({ movie_id }) => {
  const [isLoading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData(movie_id)
        .then((response) => {
          const movieData = response;
          setMovie(movieData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          swAlert(<h2>Hubo un error </h2>);
        });
    }, 1000);
  }, [movie_id]);

  return { movie, isLoading };
};
