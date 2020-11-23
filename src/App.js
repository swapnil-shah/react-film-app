import React from "react";
import "./styles.css";
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import filmsObj from './TMDB'

export default function App() {
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing {...filmsObj} />
        <FilmDetails {...filmsObj} />
      </div>
    </div>
  );
}
