import React, { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/componentsStyles/SavedShows.scss";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  //

  // useEffect(() => {
  //   onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
  //     setMovies(doc.data()?.savedShows);
  //   });
  // }, [user?.email]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const unsubscribe = onSnapshot(docRef, (doc) => {
        setMovies(doc.data()?.savedShows || []);
      });
      return () => unsubscribe();
    }
  }, [db, user]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="movies-title">My Shows</h2>

      <div className="relative flex justify-between items-center group">
        <VscChevronLeft
          onClick={slideLeft}
          size={40}
          className="absolute  bg-white rounded-full opacity-50 hover:opacity-100 z-10  cursor-pointer left-0 hidden group-hover:block"
        />

        <div id={"slider"} className="row-main">
          {movies?.map((item, id) => (
            <div key={id} className="movies-list relative">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />

              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 text-white opacity-0">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className=" text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
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
    </>
  );
}

export default SavedShows;
