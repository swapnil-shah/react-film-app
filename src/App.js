import React, { Component } from "react";
import "./styles.css";
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import TMDB from './TMDB'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }
  handleFaveToggle = film => {
    const faves = [...this.state.faves];
    console.log("faves", faves)
    const filmIndex = faves.indexOf(film);
    if (filmIndex === -1) {
      console.log("Adding [FILM NAME] to faves...")
      faves.push(film)
    }
    else {
      console.log("Removing [FILM NAME] from faves....")
      faves.splice(filmIndex, 1)
    }
    console.log("filmIndex", filmIndex)
    this.setState({ faves })
  }
  render() {
    console.log("Final Faves", this.state.faves)
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails films={this.state.current} />
        </div>
      </div>
    )
  }
}

export default App
