import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Search from "./Search";
import { LangContext } from "../langContext/langContex";

const styleButton = {
  color: "#5B2C6F",
  outline: "none",
  border: 0,
  background: "#EBDEF0",
};

export const Header = ({
  favorites = [],
  token = null,
  setToken = () => {},
}) => {
  const lang = useContext(LangContext);

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
  };

  return (
    <header>
      <Navbar expand="lg" style={{ background: "#EBDEF0" }}>
        <Container fluid>
          {!token ? (
            <Navbar.Brand>
              <FormattedMessage id="header.login.text" />
            </Navbar.Brand>
          ) : (
            <>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <Link className="nav-link " to="/list">
                      <FormattedMessage id="header.movies.text" />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="nav-link" to="/favorites">
                      <FormattedMessage id="header.favorites.text" />
                    </Link>
                  </Nav.Link>
                  <Nav.Link disabled className="d-flex align-items-center">
                    <span className="text-success">
                      {favorites.length > 0 && (
                        <>
                          <FormattedMessage id="header.moviesInFavorites" />
                          {favorites.length}
                        </>
                      )}
                    </span>
                  </Nav.Link>
                </Nav>
                <Search />
              </Navbar.Collapse>
            </>
          )}

          <div className="d-flex">
            <button
              className="ml-4"
              style={styleButton}
              onClick={() => lang.setLang("es-ES")}
            >
              ESP
            </button>
            <span className="pl-1 pr-1">/</span>
            <button onClick={() => lang.setLang("en-US")} style={styleButton}>
              ING
            </button>
            {token && (
              <Link className="ml-4" to="/" onClick={logout}>
                <FormattedMessage id="header.logout.text" />
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  favorites: PropTypes.array,
  token: PropTypes.string,
  setToken: PropTypes.func,
};
