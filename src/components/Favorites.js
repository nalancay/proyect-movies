import { Navigate } from "react-router-dom";
import CardMovie from "./CardMovie";

const Favorites = ({ addOrRemoveFavs = () => {}, favorites = [] }) => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <h2>Mis favoritos</h2>
      <div className="row">
        {!favorites.length && (
          <div className="col-12 text-danger">No tienes nada en favoritos</div>
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

export default Favorites;
