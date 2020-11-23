import React from 'react'
import FilmRow from './FilmRow'
function FilmListing(props) {
  const allFilms = props.films.map(function (film) {
    return <FilmRow key={film.id} {...film} />
  })

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {allFilms}
    </div>
  )
}

export default FilmListing;