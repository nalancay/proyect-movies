import { useContext, useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";
import ApiMovies from "../api/movies";
import { LangContext } from "../langContext/langContex";

async function fetchData({ language, movie_id }) {
  const response = await ApiMovies.getMovieDetail({ language, movie_id });
  return response;
}
export const useFetchMovie = ({ movie_id }) => {
  const [isLoading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const lang = useContext(LangContext);
  const language = lang?.language ?? "en-US";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData({ language, movie_id })
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
  }, [movie_id, language]);

  return { movie, isLoading };
};
