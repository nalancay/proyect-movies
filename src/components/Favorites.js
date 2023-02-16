import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Navigate } from "react-router-dom";
import CardMovie from "./CardMovie";

const Favorites = ({ addOrRemoveFavs = () => {}, favorites = [] }) => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <h2>
        <FormattedMessage id="body.title.MyFavourites" />
      </h2>
      <div className="row">
        {!favorites.length && (
          <div className="col-12 text-danger">
            <FormattedMessage id="body.messageMyFavourites" />
          </div>
        )}
        {favorites.map((favMovie) => {
          return (
            <CardMovie
              key={favMovie.id}
              movie={favMovie}
              addOrRemoveFavs={addOrRemoveFavs}
            />
          );
        })}
      </div>
    </>
  );
};

Favorites.propTypes = {
  addOrRemoveFavs: PropTypes.func,
  favorites: PropTypes.array,
};

export default Favorites;
