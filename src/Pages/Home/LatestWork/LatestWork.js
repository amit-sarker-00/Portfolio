import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const LatestWork = () => {
  const [websites, setWebsite] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-side-chi.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setWebsite(data));
  }, [setWebsite]);
  if (websites?.length >= 0) {
    <BallTriangle
      height={200}
      width={200}
      radius={5}
      color="#22d3ee"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />;
  }
  return (
    <div className="md:mx-6 mx-auto">
      <div className="mb:mb-16 mb-8 mb:mt-32 mt-10">
        <h1 className="text-xl font-bold text-cyan-500 text-center">
          Latest work
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 text-center sm:mx-5 mx-1">
        {websites?.map((website) => (
          <div key={website._id} className="" data-aos="fade-up">
            <div className=" border pb-5 ">
              <div className="h-60 ">
                <img className=" h-full w-full" src={website.image} alt="" />
              </div>
              <div className="relative mb-10">
                <h1 className="text-xl font-bold mt-3">{website.name}</h1>
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
              </div>
              <Link
                to={`/project/${website.name}`}
                className="bg-cyan-400 absolute bottom-0 w-full left-0   p-2 text-black font-bold text-xl"
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
