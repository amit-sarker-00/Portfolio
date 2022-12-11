import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gray-900  rounded">
        <div className="grid grid-flow-col gap-4">
          <a href="#about" className="link link-hover">
            About us
          </a>
          <Link to="/contactme" className="link link-hover">
            Contact
          </Link>
          <a href="#skills" className="link link-hover">
            Skill
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/amit.sarker.581187">
              {" "}
              <FaFacebook className="w-8 h-8 text-cyan-400"></FaFacebook>
            </a>

            <a href="https://www.linkedin.com/in/amitsarker0/">
              <FaLinkedin className="w-8 h-8 text-cyan-400"></FaLinkedin>
            </a>
            <a href="tel:+8801746889508">
              <FaWhatsapp className="w-8 h-8 text-cyan-400"></FaWhatsapp>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Amit Sarker</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
