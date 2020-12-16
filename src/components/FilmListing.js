import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "all"
    }
  }
  handleFilterClick = (filter) => {
    this.setState({
      filter
    })
  }
  render() {
    const allFilms = this.props.films.map((film) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
        />
      )
    }); const allActive = this.state.filter === "all" && "is-active"
    const favesActive = this.state.filter === "faves" && "is-active"
    return (
      <div className="film-list" >
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${allActive}`} onClick={() => this.handleFilterClick("all")}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${favesActive}`} onClick={() => this.handleFilterClick("faves")}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        { allFilms}
      </div>
    )
  }
}

export default FilmListing;