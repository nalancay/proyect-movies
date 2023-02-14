import { useFetchList } from "../hooks/useFetchList";
import { useUrlParams } from "../hooks/useValueUrlParams";
import ApiMovies from "../api/movies";
import CardMovie from "./CardMovie";

const RenderEmptyMessage = () => (
  <div className="col-12 text-danger">No se encontraron resultados</div>
);

const ResultsMovies = () => {
  const { valueQuery: keyword } = useUrlParams({
    queryParamsString: window.location.search,
    stringIdQuery: "keyword",
  });

  const { entities: moviesResult, isLoading } = useFetchList({
    fetchDataFunction: ApiMovies.getSearchMovies,
    keyword,
  });

  return (
    <>
      {isLoading ? <p>Cargando...</p> : <h5>Buscaste: {keyword}</h5>}
      {!isLoading && moviesResult.length === 0 ? (
        <RenderEmptyMessage />
      ) : (
        <div className="row">
          {moviesResult.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default ResultsMovies;
