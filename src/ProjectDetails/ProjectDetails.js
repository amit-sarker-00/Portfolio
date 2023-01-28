import React from "react";
import { FaDatabase } from "react-icons/fa";
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
    <div className="mb-20 lg:px-32 px-10">
      <h1 className="text-xl md:text-3xl  font-bold text-cyan-500 text-center font-serif my-10">
        {" "}
        {project.name} project details{" "}
      </h1>
      <div>
        <div className="">
          <div className=" h-96 my-12 sm:flex gap-3 justify-around">
            <div className="">
              <img className="h-full" src={image} alt="" />
            </div>
            <div className="">
              <img className="h-full" src={image2} alt="" />
            </div>
            <div className="">
              <img className="h-full" src={image3} alt="" />
            </div>
          </div>
          <div className="my-5 mx-5">
            <div>
              <p className="font-bold text-2xl my-5">Website Name: {name}</p>
              <p className="font-bold text-xl mb-5">Languages: {languages}</p>

              <p className=" text-md">{description}</p>
            </div>
            <div className="flex gap-4 items-center justify-center text-xl font-bold text-cyan-400 my-5">
              <a href={liveside}>Live Site</a>
              <a href={clientside}>Client Site</a>
              <a href={serverside}>Server Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
