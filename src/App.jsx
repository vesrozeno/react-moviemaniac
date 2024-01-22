import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular"></MovieList>
      <MovieList type="top-rated" title="Top Rated"></MovieList>
      <MovieList type="upcoming" title="Upcoming"></MovieList>
    </div>
  );
};

export default App;
