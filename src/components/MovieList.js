import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  if (props.MovieList === null) {
    return <div>loading</div>;
  }
  console.log([props.genreList])
  return (
    <div className="m-5 row center Card">
      {props.movieList.map((item) => {
        return <MovieCard movie={item} />;
      })}
    </div>
  );
}