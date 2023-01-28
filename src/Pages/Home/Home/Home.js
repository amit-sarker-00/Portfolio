import React from "react";
import ContactMe from "../../ContactMe/ContactMe";
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
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
