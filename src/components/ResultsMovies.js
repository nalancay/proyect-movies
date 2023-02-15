import { useFetchList } from "../hooks/useFetchList";
import { useUrlParams } from "../hooks/useValueUrlParams";
import ApiMovies from "../api/movies";
import CardMovie from "./CardMovie";
import { FormattedMessage } from "react-intl";

const RenderEmptyMessage = () => (
  <div className="col-12 text-danger">
    <FormattedMessage id="body.menssageResultMovies" />
  </div>
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
      {isLoading ? (
        <p>
          <FormattedMessage id="body.loadingMessage" />
        </p>
      ) : (
        <h5 className="col-12 text-danger">
          <FormattedMessage id="body.searched.text" /> {keyword}
        </h5>
      )}
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
