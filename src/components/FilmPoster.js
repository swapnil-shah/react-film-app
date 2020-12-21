import React from "react";
import placeholderImg from '../img/placeholder.png'
export default function FilmPoster(props) {
  console.log(props.posterUrl)
  const imgSrc = `https://image.tmdb.org/t/p/w780${props.posterUrl}`
  return (
    <img src={imgSrc} alt="" onError={(e) => { e.target.onerror = null; e.target.src = placeholderImg }} />
  );
}
