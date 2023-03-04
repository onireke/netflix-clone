import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/componentsStyles/Row.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [like, setlike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movies);
  return (
    <>
      <h2 className="movies-title">{title}</h2>
      <div id={"slider"} className="row-main">
        {movies?.map((item, id) => (
          <div className="movies-list relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />

            <div className="overly absolute">
              <p className="overly-title">{item?.title}</p>
              <p className="like">{like ? <FaHeart /> : <FaRegHeart />}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Row;
