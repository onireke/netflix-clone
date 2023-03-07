import React from "react";
import "../styles/componentsStyles/Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <main className="navbar">
      <Link to="/">
        {" "}
        <h1 className="netflix">NETFLIX</h1>
      </Link>
      <div className="buttons">
        <Link to="/login">
          {" "}
          <button className="sign-in">Sign in</button>
        </Link>
        <Link to="/signup">
          {" "}
          <button className="sign-up">Sign up</button>
        </Link>
      </div>
    </main>
  );
}

export default Navbar;
