import React from "react";
import project1 from "../../../assests/project1.png";
import project2 from "../../../assests/project2.png";
import project3 from "../../../assests/project3.png";
const LatestWork = () => {
  return (
    <div>
      <div className="my-16">
        <h1 className="text-xl font-bold text-cyan-500 text-center">
          Latest work
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 text-center sm:mx-5">
        <div className="" data-aos="fade-right">
          <div className="card card-compact border  shadow-md  ">
            <div className="">
              <img className="rounded-xl" src={project1} alt="" />
            </div>
            <h1 className="text-xl font-bold mt-3">
              website name: ResaleBikes
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
          </div>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="2000"
        >
          <div className="card card-compact border  shadow-md  ">
            <div className="">
              <img className="rounded-xl" src={project2} alt="" />
            </div>
            <h1 className="text-xl font-bold mt-3">
              website name: Photography
            </h1>
            <h2>
              <ul className="flex gap-3 my-2 justify-center font-bold">
                <li>React</li>
                <li>MongoDB</li>
                <li>Express JS</li>
                <li>Tailwind CSS</li>
              </ul>
            </h2>
            <div className="flex gap-5 justify-center items-center my-3">
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://wild-photo.web.app/"
                >
                  Live side
                </a>
              </h1>
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://github.com/amit-sarker-00/service-review"
                >
                  Client side
                </a>
              </h1>
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://github.com/amit-sarker-00/service-review-server-side"
                >
                  Server side
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="1000">
          <div className="card card-compact border  shadow-md  ">
            <div className="">
              <img className="rounded-xl" src={project3} alt="" />
            </div>
            <h1 className="text-xl font-bold mt-3">
              website name: ResaleBikes
            </h1>
            <h2>
              <ul className="flex gap-3 my-2 justify-center font-bold">
                <li>React</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>MongoDb</li>
              </ul>
            </h2>
            <div className="flex gap-5 justify-center items-center my-3">
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://educational-services-d9f7c.web.app/home"
                >
                  Live side
                </a>
              </h1>
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://github.com/amit-sarker-00/Learning-client-side"
                >
                  Client side
                </a>
              </h1>
              <h1>
                <a
                  className="text-cyan-400 link-hover font-bold"
                  href="https://github.com/amit-sarker-00/Learning-server-side"
                >
                  Server side
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
