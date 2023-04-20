import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview/Overview";
import WatchList from "./components/WatchList/WatchList";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState(null);
  const [watchhlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=18738ecfafb89b9dc502473373a38d50").then((res) => {
      setMovieList(res.data.results);
    });
  }, []);

  ///GET localhost:8080/watchlist
  //Returns the watchlist

  //POST localhost:8080/watchlist
  //Adds an item to the watchlist
  //Returns the watchlist

  //DELETE localhost:8080/watchlist/:id
  //Deletes an item from the watchlist
  //Returns the watchlist

  //Download watchlist from API
  useEffect(() => {
    axios.get("http://localhost:8080/watchlist/").then((res) => setWatchlist(res.data));
  }, []);

  if (!movieList) {
    return <div>Loading...</div>;
  }

  const handleAddToWatchlist = (movieId) => {
    //POST id to watchlist on API
    axios.post("http://localhost:8080/watchlist/", { id: movieId }).then((res) => {
      setWatchlist(res.data);
    });

    //Update watchlist state
    // setWatchlist([...watchhlist, movieId]);
  };
  const handleRemoveFromWatchlist = (movieId) => {
    // setWatchlist(watchhlist.filter((id) => id !== movieId));
    //DELETE id from watchlist on API
    axios.delete(`http://localhost:8080/watchlist/${movieId}`).then((res) => {
      setWatchlist(res.data);
    });
  };

  return (
    <BrowserRouter>
      <NavBar watchlistCount={watchhlist.length} />
      <Routes>
        <Route path="/" element={<Home movieList={movieList} />} />
        <Route
          path="/:id"
          element={<Overview onAddToWatchlist={handleAddToWatchlist} onRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchhlist} />}
        />
        <Route path="/watchlist" element={<WatchList movieList={movieList} watchlist={watchhlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
