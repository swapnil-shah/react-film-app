import React from 'react'

function FilmRow(props) {
  console.log("🚀 ~ file: FilmRow.js ~ line 4 ~ FilmRow ~ props", props)
  return (
    <div className="film-row">
      <img src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`} alt="" />
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{new Date(props.release_date).getFullYear()}</p>
      </div>
    </div>
  )
}

export default FilmRow
