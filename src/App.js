import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

const apiKey = `9d096b4dac12b79351687a03fc133138`;
function App() {
  let [movieList, setMovieList] = useState(null);

  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    console.log("movies", result);
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  if (movieList === null) {
    return <div>loading</div>;
  }
  return (
    <div>
      <h1>Bitflix</h1>
      <div>
        <MovieList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
