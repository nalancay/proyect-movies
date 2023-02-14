import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { MovieDetail } from "./components/MovieDetail";
import ResultsMovies from "./components/ResultsMovies";
import "./css/app.css";
import Favorites from "./components/Favorites";
import { useEffect, useState } from "react";

function App() {
  const [favorites, setfavorites] = useState([]);
  const [token, setToken] = useState(null);

  const addOrRemoveFavs = (e) => {
    let favInLocalStorage =
      JSON.parse(localStorage.getItem("favoritesMovies")) || [];

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;

    const movieData = { id: btn.dataset["movieId"], imgURL, title, overview };
    const movieIsArray = favInLocalStorage.find(
      (movie) => movie?.id === movieData.id
    );

    if (!movieIsArray) {
      favInLocalStorage.push(movieData);
      localStorage.setItem(
        "favoritesMovies",
        JSON.stringify(favInLocalStorage)
      );
      setfavorites(favInLocalStorage);
    } else {
      let movieLeft = favInLocalStorage.filter(
        (movie) => movie.id !== movieData.id
      );
      localStorage.setItem("favoritesMovies", JSON.stringify(movieLeft));
      setfavorites(movieLeft);
    }
  };

  useEffect(() => {
    const tokenSessionStorage = sessionStorage.getItem("token");
    const parseFavArray = JSON.parse(localStorage.getItem("favoritesMovies"));
    let favInLocalStorage = parseFavArray || [];
    setfavorites(favInLocalStorage);
    setToken(tokenSessionStorage);
  }, []);

  return (
    <>
      <Header favorites={favorites} token={token} />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route
            path="/list"
            element={<List addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route path="/detail" element={<MovieDetail />} />
          <Route path="/results_movies" element={<ResultsMovies />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                addOrRemoveFavs={addOrRemoveFavs}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
