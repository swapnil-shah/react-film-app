import React, { Component } from 'react'
import FilmRow from './FilmRow'


class FilmListing extends Component {
  state = {
    filter: "all"
  };

  handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`);
    this.setState({ filter });
  };

  render() {
    const films =
      this.state.filter === "faves" ? this.props.faves : this.props.films;
    const allFilms = films.map((film) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          posterUrl={film.poster_path}
          releaseDate={film.release_date}
          title={film.title}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          isFave={this.props.faves.includes(film)}
          handleDetailsClick={() => this.props.handleDetailsClick(film)}
        />
      );
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""
              }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""
              }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
