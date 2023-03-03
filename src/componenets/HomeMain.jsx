import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "../styles/componentsStyles/HomeMain.scss";

function HomeMain() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);

  const cutStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="home-main">
      <div className="image-wrapper">
        <div className="overly"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full "
        />

        <div className="info-wrapper">
          <p className="movie-title">{movie?.title}</p>

          <div className="buttons">
            <button className="play-button">Play</button>
            <button className="watch-later">Watch Later</button>
          </div>

          <p className="released-date"> Released: {movie?.release_date}</p>
          <p className="movie-info">{cutStr(movie?.overview, 155)}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
