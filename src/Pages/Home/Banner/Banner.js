import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className=" md:py-16 py-8 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-900 ">
      <div className="flex flex-col items-center sm:items-start w-full max-w-xl px-4 mx-auto lg:px-8 md:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:pr-5">
          <div className="text-center sm:text-start mb-6">
            <div>
              <p className="font-bold text-lg text-primary">Hello! I am</p>
            </div>
            <TypeAnimation
              sequence={[
                "Amit Sarker",
                2000,
                "Front-End Developer",
                3000,
                () => {},
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="lg:text-7xl md:text-6xl sm:text-5xl text-md  font-bold pb-4 pt-2"
            />
            <p className=" text-xl md:text-2xl font-bold text-primary">
              Front-End Developer
            </p>
            <ul className="sm:flex   gap-8 font-bold ">
              <li className="list-none">Web Developer</li>
              <li className="relative">
                {" "}
                <span className="absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3"></span>
                Programmer{" "}
              </li>
              <li className="relative">
                <span className="absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3"></span>
                Software Engineer{" "}
              </li>
            </ul>
          </div>
          <div className="flex  gap-2 items-center xs:flex-row	">
            <a
              href="https://drive.google.com/file/d/1EY7ocho6DCD1f2GpeLGDeDr_7IOCfQex/view?usp=sharing"
              className="  bg-cyan-400 py-2 sm:py-3 border-cyan-400 border-2 px-1 sm:px-4 font-bold text-black "
            >
              Get Resume
            </a>
            <a
              href="#about"
              className="  border-cyan-400 border-2 sm:py-3 py-2 px-1 sm:px-4 font-bold"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
