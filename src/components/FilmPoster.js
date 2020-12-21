import React from "react";
export default function FilmPoster(props) {
  return (
    <img src={"https://image.tmdb.org/t/p/w780/" + props.posterUrl} alt="" />
  );
}
