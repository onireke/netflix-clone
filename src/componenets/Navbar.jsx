import React from "react";
import "../styles/componenetsStyles/Navbar.scss";

function Navbar() {
  return (
    <main className="navbar">
      <h1 className="netflix">NETFLIX</h1>
      <div className="buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </main>
  );
}

export default Navbar;
