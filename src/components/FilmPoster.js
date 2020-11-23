import React from 'react'

function FilmPoster(props) {
  return (
    <img onError={(event) => { event.target.onerror = null; event.target.src = "https://via.placeholder.com/400" }} src={`https://image.tmdb.org/t/p/w780${props.image}`} alt={props.altText} />
  )
}

export default FilmPoster