import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    clientside,
    serverside,
    languages,
    image2,
    image,
    image3,
    description,
    liveside,
    name,
  } = project;
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="40"
      data-aos-duration="1000"
      className="mb-20"
    >
      <h1 className="text-xl md:text-3xl  font-bold text-cyan-500 text-center font-serif my-10">
        {" "}
        {project.name} project details{" "}
      </h1>
      <div className="border-2 border-cyan-400 shadow-xl lg:mx-56 md:mx-36 mx-2">
        <div className="flex gap-4 flex-wrap justify-center items-center py-10">
          <img className="w-56 border" src={image} alt="" />
          <img className="w-56 border" src={image2} alt="" />

          <img className="w-60 border" src={image3} alt="" />
        </div>
        <div>
          <div className="mx-10 mb-10">
            <h1 className="font-bold text-xl text-cyan-400 ">Name: {name}</h1>
            <h2 className="my-3">Languages: {languages}</h2>
            <p>
              <strong>Description: {description}</strong>
            </p>
            <ul className="flex gap-4 my-3">
              <li className="text-cyan-400 link-hover">
                <a href={liveside}>Live Side</a>
              </li>
              <li className="text-cyan-400 link-hover">
                <a href={clientside}>Client Side</a>
              </li>
              <li className="text-cyan-400 link-hover">
                <a href={serverside}>Server side</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
