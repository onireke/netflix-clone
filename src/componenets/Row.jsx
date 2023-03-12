import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/componentsStyles/Row.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);
  const [like, setlike] = useState(false);
  const [saved, setSaved] = useState();
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

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

  const saveShow = async () => {
    if (user?.email) {
      setlike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please login to save a movie");
    }
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
                <p onClick={saveShow} className="like">
                  {like ? <FaHeart /> : <FaRegHeart />}
                </p>
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

      <p>cloned by abdulfatah</p>
      <p>cloned abdulfatah</p>
      <p>ya ALLAH come to my aid</p>
    </>
  );
}

export default Row;
