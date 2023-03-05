import React from "react";
import HomeMain from "../componenets/HomeMain";
import Row from "../componenets/Row";
import requests from "../Requests";

function Home() {
  return (
    <div>
      <HomeMain />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
    </div>
  );
}

export default Home;
