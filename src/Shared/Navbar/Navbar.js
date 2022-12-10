import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menubar = (
    <>
      <li className="hover:text-cyan-400">
        <Link to="/home">HOME</Link>
      </li>
      <li className="hover:text-cyan-400">
        <a href="#about">ABOUT</a>
      </li>
      <li className="hover:text-cyan-400">
        <Link to="/blogs">BLOGS</Link>
      </li>

      <li className="hover:text-cyan-400">
        <Link>SKILL</Link>
      </li>

      <li className="hover:text-cyan-400">
        <Link to="/contactme">CONTACT ME</Link>
      </li>
    </>
  );
  return (
    <div
      className="navbar bg-gray-900 py-5 md:px-20"
      data-aos="fade-down"
      data-aos-delay="40"
      data-aos-duration="1000"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900    rounded-box w-52 font-bold border-2 border-cyan-400"
          >
            {menubar}
          </ul>
        </div>
        <Link to="/" className=" text-xl font-bold">
          PORTFOLIO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold">{menubar}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1EY7ocho6DCD1f2GpeLGDeDr_7IOCfQex/view?usp=sharing"
          className="  border-cyan-400 border-2 py-2 px-4 font-bold"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Navbar;
