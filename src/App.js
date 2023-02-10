import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
