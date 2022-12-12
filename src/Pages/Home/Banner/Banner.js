import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className=" md:px-20 lg:px-36 px-8 lg:my-28 md:my-24 sm:my-12 lg:h-96 h-72  "
      data-aos="fade-up"
      data-aos-delay="40"
      data-aos-duration="1000"
    >
      <div>
        <h2 className="text-cyan-400 text-2xl">Hello! I am</h2>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold lg:text-8xl">
          Amit Sarker
        </h1>
        <h2 className="text-cyan-400 text-2xl font-bold mt-5">
          Full Stack Developer
        </h2>
      </div>
      <div className="space-x-3 mt-10">
        <a
          href="https://drive.google.com/file/d/1EY7ocho6DCD1f2GpeLGDeDr_7IOCfQex/view?usp=sharing"
          className="  bg-cyan-400 py-2 sm:py-3 border-cyan-400 border-2 px-1 sm:px-4 font-bold text-black"
        >
          Get Resume
        </a>
        <Link className="  border-cyan-400 border-2 sm:py-3 py-2 px-1 sm:px-4 font-bold">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Banner;
