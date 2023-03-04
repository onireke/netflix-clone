import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/componentsStyles/Row.scss";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movies);
  return (
    <>
      <h2 className="movie-titles">{title}</h2>
      <div className="movies-list">
        {movies.map((item, id) => (
          <div></div>
        ))}
      </div>
    </>
  );
}

export default Row;
