import React from "react";

const ContactMe = () => {
  return (
    <div>
      <div className="border border-cyan-500 shadow-xl py-12 w-96 mx-auto mt-10">
        <form
          action="https://formsubmit.co/7c49516f9b535e0508058b9b3970eaf6"
          method="POST"
          className=" flex flex-col gap-4 items-center justify-center "
        >
          <input
            className="border border-cyan-400 p-2 w-80"
            placeholder="name"
            name="name"
          />

          <input
            className="border border-cyan-400 p-2 w-80 "
            placeholder="email"
            name="email"
          />
          <textarea
            className="border border-cyan-400 p-2 w-80"
            placeholder="message"
            name="message"
          ></textarea>

          <button className="btn rounded-md p-2 w-80  bg-cyan-400 text-black font-bold hover:bg-cyan-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
