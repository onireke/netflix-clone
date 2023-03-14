import React from "react";
import "../styles/pagesStyles/Account.scss";
import SavedShows from "../componenets/savedShows";
function Account() {
  return (
    <div>
      <div className="saved-wrapper">
        <img
          className="account-img absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/82e53bb2-68b3-47d0-9e0c-d9d8fd06a81a/NG-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <div className="saved-overly"></div>
        <div className="shows-content">
          <h1 className="my-shows">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </div>
  );
}

export default Account;
