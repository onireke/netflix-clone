import React from "react";
import "../styles/pagesStyles/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="sign">
      <img
        className="sign-img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/82e53bb2-68b3-47d0-9e0c-d9d8fd06a81a/NG-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />

      <div className="img-overly fixed bg-black/60 w-full h-screen top-0 left-0"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
          <div className="form-container">
            <h1 className="signup-word">SignIn</h1>

            {error ? <p className="p-3 my-3 bg-red-400">{error}</p> : null}
            <form onSubmit={handleSubmit} className="form">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="button">Sign In</button>

              <div className="form-bottom">
                <p className="remember">
                  <input type="checkbox" />
                  Remember me
                </p>

                <p className="help">Need Help?</p>
              </div>

              <p className="already-signin">
                <span>New to Netflix?</span>

                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
