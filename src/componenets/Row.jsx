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
      <h2 className="movies-title">{title}</h2>
      <div id={"slider"}>
        {movies?.map((item, id) => (
          <div className="movies-list">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />

            <div className="overly">
              <p className="overly-title">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Row;
