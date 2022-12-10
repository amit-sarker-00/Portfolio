import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import project1 from "../../../assests/project1.png";
import project2 from "../../../assests/project2.png";
import project3 from "../../../assests/project3.png";
const LatestWork = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <div className="mb-16 mt-32">
        <h1 className="text-xl font-bold text-cyan-500 text-center">
          Latest work
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 text-center sm:mx-5 mx-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className=""
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1000"
            >
              <div className="card card-compact border  shadow-md  ">
                <div className="">
                  <img className="rounded-xl" src={project.image} alt="" />
                </div>
                <h1 className="text-xl font-bold mt-3">
                  website name: {project.name}
                </h1>
                <h2>
                  <ul className="flex gap-3 my-2 justify-center font-bold">
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express JS</li>
                    <li>JWT</li>
                  </ul>
                </h2>
                <div className="flex gap-5 justify-center items-center my-3">
                  <h1>
                    <a
                      className="text-cyan-400 link-hover font-bold"
                      href="https://resaleholder.web.app/"
                    >
                      Live side
                    </a>
                  </h1>
                  <h1>
                    <a
                      className="text-cyan-400 link-hover font-bold"
                      href="https://github.com/amit-sarker-00/resale-product-client-side"
                    >
                      Client side
                    </a>
                  </h1>
                  <h1>
                    <a
                      className="text-cyan-400 link-hover font-bold"
                      href="https://github.com/amit-sarker-00/resale-product-server-side"
                    >
                      Server side
                    </a>
                  </h1>
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="bg-cyan-400 hover:bg-cyan-600 p-2 rounded-lg text-black font-bold text-xl bottom-0"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
