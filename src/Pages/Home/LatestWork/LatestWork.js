import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LatestWork = () => {
  const [websites, setWebsite] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setWebsite(data));
  }, [setWebsite]);
  return (
    <div>
      <div className="mb-16 mt-32">
        <h1 className="text-xl font-bold text-cyan-500 text-center">
          Latest work
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 text-center sm:mx-5 mx-1">
        {websites?.map((website) => (
          <div key={website._id} className="" data-aos="fade-up">
            <div className="card card-compact border  shadow-md  ">
              <div className="">
                <img className="rounded-xl" src={website.image} alt="" />
              </div>
              <h1 className="text-xl font-bold mt-3">
                website name:{website.name}
              </h1>
              <h2>
                <ul className="flex gap-3 my-2 justify-center font-bold">
                  <li>{website.languages}</li>
                </ul>
              </h2>
              <div className="flex gap-5 justify-center items-center my-3">
                <h1>
                  <a
                    className="text-cyan-400 link-hover font-bold"
                    href={website.liveside}
                  >
                    Live side
                  </a>
                </h1>
                <h1>
                  <a
                    className="text-cyan-400 link-hover font-bold"
                    href={website.clientside}
                  >
                    Client side
                  </a>
                </h1>
                <h1>
                  <a
                    className="text-cyan-400 link-hover font-bold"
                    href={website.serverside}
                  >
                    Server side
                  </a>
                </h1>
              </div>
              <Link
                to={`/project/${website.name}`}
                className="bg-cyan-400 hover:bg-cyan-600 p-2 rounded-lg text-black font-bold text-xl bottom-0"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
