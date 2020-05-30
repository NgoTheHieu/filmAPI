import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner,Button} from "react-bootstrap"
import Navigation from "./components/Navigation"
import Banner from "./components/Banner"
import Bottom from "./components/Bottom"
const apiKey = `9d096b4dac12b79351687a03fc133138`;
function App() {
  let [movieList, setMovieList] = useState(null);
  let [genreList, setGenreList] = useState(null);
  let [movieGenre, setMovieGenre] = useState([]);
  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    console.log("movies", result);
    
  
  
  };
  //GET GENRE DATA // 
  const getGenreData = async()=>{
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    setGenreList(resullt)
    console.log("Genre List:", result);
    //setGenreList(result2);
  //*End Of Get Genre Data*//
  }
  //*Hooking State//
  useEffect(() => {
    getNowPlayingMovie();
    getGenreData();
  }, []);
  //*End of Hooking State*/
  //*Rendering Data function*//
  
  if (movieList === null) {
    return <div className="App App-header" style={{ color: 'white' }}>
    <Spinner 
      animation="border"
      variant="info" />
    <h3>loading...</h3>
  </div>

  }
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <MovieList genreList={genreList} movieList={movieList} />
      </div>
      <div>
        
      <Button class="d-flex justify-content-center" id="load-more-btn" variant="info" type="button" onClick={getNowPlayingMovie()}>
          Load More
        </Button>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;