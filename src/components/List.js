import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import CardMovie from "./CardMovie";
import ApiMovies from "../api/movies";
import { useFetchList } from "../hooks/useFetchList";
import { FormattedMessage } from "react-intl";

const List = ({ addOrRemoveFavs = () => {} }) => {
  const token = sessionStorage.getItem("token");
  const { entities: movieList, isLoading } = useFetchList({
    fetchDataFunction: ApiMovies.getMovies,
  });

  return (
    <>
      {!token && <Navigate to="/" />}
      {isLoading && (
        <p>
          <FormattedMessage id="body.loadingMessage" />
        </p>
      )}
      <div className="col-12 pb-5 row">
        {movieList.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
            addOrRemoveFavs={addOrRemoveFavs}
          />
        ))}
      </div>
    </>
  );
};

List.propTypes = {
  addOrRemoveFavs: PropTypes.func,
};

export default List;
