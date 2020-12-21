import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
export default function FilmRow(props) {
  return (
    <div className="film-row" onClick={props.handleDetailsClick}>
      <FilmPoster posterUrl={props.posterUrl} />
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{new Date(props.releaseDate).getFullYear()}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  );
}
