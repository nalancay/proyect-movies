import { Link } from "react-router-dom";
import Search from "./Search";
export const Header = ({ favorites, token }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {!token ? (
            <h4 className="text-success">Iniciar sesión</h4>
          ) : (
            <>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/list">
                      Peliculas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favorites">
                      Favorites
                    </Link>
                  </li>

                  <li className="nav-item d-flex align-items-center">
                    <span className="text-success">
                      {favorites.length > 0 &&
                        `Pelicula en favoritos: ${favorites.length}`}
                    </span>
                  </li>
                </ul>
              </div>
              <Search />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
