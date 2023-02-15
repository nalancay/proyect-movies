import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Search from "./Search";
import { LangContext } from "../langContext/langContex";

export const Header = ({ favorites, token }) => {
  const lang = useContext(LangContext);
  const pathUrl = token ? "/list/" : "/";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {!token ? (
            <h4 className="text-success">
              <FormattedMessage id="header.login.text" />
            </h4>
          ) : (
            <>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/list">
                      <FormattedMessage id="header.movies.text" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favorites">
                      <FormattedMessage id="header.favorites.text" />
                    </Link>
                  </li>

                  <li className="nav-item d-flex align-items-center">
                    <span className="text-success">
                      {favorites.length > 0 && (
                        <>
                          <FormattedMessage id="header.moviesInFavorites" />
                          {favorites.length}
                        </>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
              <Search />
              <Link className="nav-link" to="/">
                <FormattedMessage id="header.logout.text" />
              </Link>
            </>
          )}

          <div className="d-flex">
            <Link
              className="text-light"
              to={`${pathUrl}?language=es-ES`}
              onClick={() => lang.setLang("es-ES")}
            >
              ESP
            </Link>
            <span className="text-light pl-1 pr-1">/</span>
            <Link
              className="text-light"
              to={`${pathUrl}?language=en-US`}
              onClick={() => lang.setLang("en-US")}
            >
              ING
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
