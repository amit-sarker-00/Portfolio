import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="sm:grid grid-cols-2" id="contact">
      <div className="py-12 w-96 sm:block hidden  mx-auto mt-10">
        <img
          className=" rounded-md"
          src="https://i.ibb.co/1JbHq3z/bloom-man-giving-online-support-via-laptop.gif"
          alt=""
        />
      </div>
      <div className=" shadow-xl py-12 mx-auto sm:mx-0 w-96 mt-10">
        <form
          action="https://formsubmit.co/7c49516f9b535e0508058b9b3970eaf6"
          method="POST"
          className=" flex flex-col gap-4 items-center justify-center "
        >
          <input
            className="border border-cyan-400 p-2 w-80 rounded-md"
            placeholder="name"
            name="name"
          />

          <input
            className="border border-cyan-400 p-2 w-80 rounded-md"
            placeholder="email"
            name="email"
          />
          <textarea
            className="border border-cyan-400 p-2 w-80 h-24 rounded-md"
            placeholder="message"
            name="message"
          ></textarea>

          <button className="btn rounded-md p-2 w-80  bg-cyan-600 text-black font-bold  hover:bg-cyan-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
