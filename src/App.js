import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { MovieDetail } from "./components/MovieDetail";
import ResultsMovies from "./components/ResultsMovies";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<MovieDetail />} />
          <Route path="/results_movies" element={<ResultsMovies />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
