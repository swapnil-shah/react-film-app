import React, { Component } from "react";
import "./styles.css";
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import TMDB from './TMDB'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    // const faves = [...this.state.faves];

    if (filmIndex > -1) {
      console.log("Removing " + film.title + " from faves");
      faves.splice(filmIndex, 1);
    } else {
      console.log("Adding " + film.title + " to faves");
      faves.push(film);
    }
    this.setState({ faves });
  };

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    this.setState({ current: film });
  };
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            handleDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails films={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
