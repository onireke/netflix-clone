import React from "react";
import "../styles/componentsStyles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  console.log(user);

  const navigate = useNavigate;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="navbar">
      <Link to="/">
        {" "}
        <h1 className="netflix">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div className="buttons">
          <Link to="/account">
            {" "}
            <button className="sign-in">Account</button>
          </Link>{" "}
          <button onClick={handleLogout} className="sign-up">
            Logout
          </button>
        </div>
      ) : (
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
      )}
    </main>
  );
}

export default Navbar;
