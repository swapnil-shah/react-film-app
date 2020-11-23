import React from 'react'
import FilmPoster from './FilmPoster'

function FilmRow(props) {
  return (
    <div className="film-row">
      <FilmPoster image={props.poster_path} altText={props.title} />
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{new Date(props.release_date).getFullYear()}</p>
      </div>
    </div>
  )
}

export default FilmRow