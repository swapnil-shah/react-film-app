import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
function FilmRow(props) {
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
  }
  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.title)}>
      <FilmPoster image={props.film.poster_path} altText={props.film.title} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{new Date(props.film.release_date).getFullYear()}</p>
      </div>
      <Fave onFaveToggle={() => props.onFaveToggle(film)} />
    </div>
  )
}

export default FilmRow