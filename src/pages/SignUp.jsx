import React from "react";
import "../styles/pagesStyles/SignUp.scss";

function SignUp() {
  return (
    <div className="sign-up">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/82e53bb2-68b3-47d0-9e0c-d9d8fd06a81a/NG-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />

      <div className="img-overly fixed bg-black/70 w-full h-screen top-0 left-0"></div>

      <div className="form-container fixed w-full px-4 py-24 z-50">
        <div className="container-overly  max-w-[450px] h-[600px] bg-black/80 text-white"></div>
      </div>
    </div>
  );
}

export default SignUp;
