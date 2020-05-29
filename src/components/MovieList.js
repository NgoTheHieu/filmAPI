import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  if (props.MovieList === null) {
    return <div>loading</div>;
  }
  return (
    <div className="m-5 row center">
      {props.movieList.map((item) => {
        return <MovieCard movie={item} />;
      })}
    </div>
  );
}