import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import LatestWork from "../LatestWork/LatestWork";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <LatestWork></LatestWork>
    </div>
  );
};

export default Home;
