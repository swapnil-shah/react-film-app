import React from "react";
import placeholderImg from '../img/placeholder.png'

export default function FilmDetails(props) {
  let details
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${props.film.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`
  if (props.film.id) {
    details = <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" onError={(e) => { e.target.onerror = null; e.target.src = placeholderImg }} />
        <h1 className="film-title">{props.film.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{props.film.tagline}</h2>
        <p className="film-detail-overview">
          <img src={posterUrl} className="film-detail-poster" alt={props.film.title} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImg }} />
          {props.film.overview}
        </p>
      </div>
    </div>
  }
  else {
    details = <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  }
  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
  );
}
