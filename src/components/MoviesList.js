import React, { useState, useEffect } from "react";
import axios from "axios"; //without a file structure coming from dependencies

import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => [console.log("The data was not returned ", error)]);
  }, []); //is only called once!
  useEffect(() => {
    console.log("Movies has changed!", movies);
    return () => {};
  }, [movies]);
  // Call an API and get data about movies
  // for each movie we want to create a new component to display that data
  return (
    <div className="">
      <ul>
        {movies.map(movie => {
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              description={movie.description}
              director={movie.director}
              release_date={movie.release_date}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesList;
