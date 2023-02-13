import { useFetchList } from "../hooks/useFetchList";
import { useUrlParams } from "../hooks/useValueUrlParams";
import ApiMovies from "../api/movies";
import CardMovie from "./CardMovie";

const RenderEmptyMessage = () => <p>No se encontraron datos</p>;

const ResultsMovies = () => {
  const { valueQuery: keyword } = useUrlParams({
    queryParamsString: window.location.search,
    stringIdQuery: "keyword",
  });

  const { entities: moviesResult, isLoading } = useFetchList({
    fetchDataFunction: ApiMovies.getSearchMovies,
    keyword,
  });
  console.log("moviesResult", moviesResult);

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && moviesResult.length === 0 ? (
        <RenderEmptyMessage />
      ) : (
        <>
          <h5>Buscaste: {keyword}</h5>
          <div className="row">
            {moviesResult.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ResultsMovies;
