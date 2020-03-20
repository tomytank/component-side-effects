import React from "react";

const MovieCard = props => {
  return (
    <li className="movie-card" key={props.id}>
      <h2>Film title: {props.title}</h2>
      <p>{props.description}</p>
      <p>Director: {props.director}</p>
      <p>
        Release date:{" "}
        <small className="text-warning">{props.release_date}</small>
      </p>
    </li>
  );
};
export default MovieCard;
