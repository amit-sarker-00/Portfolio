import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import LatestWork from "../LatestWork/LatestWork";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <LatestWork></LatestWork>
      <Skills></Skills>
    </div>
  );
};

export default Home;
