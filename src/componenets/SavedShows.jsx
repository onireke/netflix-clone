import React, { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import "../styles/componentsStyles/SavedShows.scss";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

function SavedShows() {
  const { user } = UserAuth();
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
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

              <div className="overly absolute">
                <p className="overly-title">{item?.title}</p>
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
import { UserAuth } from "../context/AuthContext";

export default SavedShows;
