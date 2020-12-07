import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
function FilmRow(props) {
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
  }
  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.title)}>
      <FilmPoster image={props.poster_path} altText={props.title} />
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{new Date(props.release_date).getFullYear()}</p>
      </div>
      <Fave />
    </div>
  )
}

export default FilmRow