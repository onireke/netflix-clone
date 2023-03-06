import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/componentsStyles/Row.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);
  const [like, setlike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <>
      <h2 className="movies-title">{title}</h2>

      <div className="relative flex justify-between items-center group">
        <VscChevronLeft
          onClick={slideLeft}
          size={40}
          className="absolute  bg-white rounded-full opacity-50 hover:opacity-100 z-10  cursor-pointer left-0 hidden group-hover:block"
        />

        <div id={"slider" + rowId} className="row-main">
          {movies?.map((item, id) => (
            <div key={id} className="movies-list relative">
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
        <VscChevronRight
          onClick={slideRight}
          size={40}
          className="absolute  bg-white rounded-full opacity-50 hover:opacity-100 z-10 right-0 hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default Row;
