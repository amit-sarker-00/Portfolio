import React from "react";
import photo from "../../../assests/myself.png";
const About = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="40" data-aos-duration="1000">
      <p
        id="about"
        className="text-cyan-400 font-bold text-center md:mb-20 mb-10 text-xl"
      >
        About
      </p>
      <div className=" lg:px-32 px-10 grid grid-cols-1  md:grid-cols-2 gap-10  md:px-20 md:mb-20 mb-10">
        <div>
          <p className="md:text-xl">
            Hello! I'm Amit Sarker, a passionate Full Stack Developer. I develop
            web applications, mobile applications, and desktop applications. My
            core skill is based on JavaScript and I love to do most of the
            things using JavaScript. I love to make the web more open to the
            world. I have learned programming from programming hero. I am
            available for any kind of job opportunity that suits my interests.
          </p>
          <div className="space-x-3 mt-10">
            <a
              href="https://drive.google.com/file/d/1EY7ocho6DCD1f2GpeLGDeDr_7IOCfQex/view?usp=sharing"
              className="  bg-cyan-400 py-2 sm:py-3 border-cyan-400 border-2 px-1 sm:px-4 font-bold text-black"
            >
              Get Resume
            </a>
            <a
              href="#skills"
              className="  border-cyan-400 border-2 sm:py-3 py-2 px-1 sm:px-4 font-bold"
            >
              My Skills
            </a>
          </div>
        </div>
        <div>
          <div className="md:pl-5 ">
            <img
              className="md:h-80 rounded-lg shadow border"
              src={photo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
