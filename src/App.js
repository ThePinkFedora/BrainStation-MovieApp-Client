import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview/Overview";

function App() {
  const [watchhlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movieId) => {
    setWatchlist([...watchhlist, movieId]);
  };
  const handleRemoveFromWatchlist = (movieId) => {
    setWatchlist(watchhlist.filter((id) => id !== movieId));
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={<Overview onAddToWatchlist={handleAddToWatchlist} onRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchhlist} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
