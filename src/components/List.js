import { Navigate } from "react-router-dom";
import CardMovie from "./CardMovie";
import ApiMovies from "../api/movies";
import { useFetchList } from "../hooks/useFetchList";

const List = () => {
  const token = sessionStorage.getItem("token");
  const { entities: movieList, isLoading } = useFetchList({
    fetchDataFunction: ApiMovies.getMovies,
  });

  return (
    <>
      {!token && <Navigate to="/" />}
      {isLoading && <p>Cargando...</p>}
      <div className="row">
        {movieList.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default List;
