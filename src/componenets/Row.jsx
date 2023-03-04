import React from "react";
import "../styles/componentsStyles/Row.scss";

function Row({ title, fetchURL }) {
  return (
    <>
      <h2 className="movie-titles">{title}</h2>
    </>
  );
}

export default Row;
