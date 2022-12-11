import React from "react";

const Skills = () => {
  return (
    <div className="mx-20 my-32" id="skills">
      <h1 className="my-10 text-cyan-400 font-bold text-xl text-center">
        Skills
      </h1>
      <div className="flex gap-5 flex-wrap">
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">HTML</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 90 }}
          >
            90%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">CSS</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 90 }}
          >
            90%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Tailwind CSS</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 85 }}
          >
            85%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">React</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 80 }}
          >
            80%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">MongoDB</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 60 }}
          >
            60%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Express JS</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 50 }}
          >
            50%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Firebase</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 90 }}
          >
            90%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">JWT</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 90 }}
          >
            90%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Node JS</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 70 }}
          >
            70%
          </div>
        </div>
        <div className="border-2 border-cyan-400 w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Bootstrap</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 90 }}
          >
            90%
          </div>
        </div>
        <div className="border-2 border-cyan-400 sm:w-32 shadow text-center rounded-3xl">
          <h2 className="my-2 font-bold">Axios</h2>
          <div
            className="w-20 mb-4 radial-progress bg-cyan-400 text-cyan-900 border-4 border-cyan-400"
            style={{ "--value": 50 }}
          >
            50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
