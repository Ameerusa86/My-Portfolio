import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src=".\src\assets\AMEER-logos_transparent.png"
          alt="Logo"
          style={{ width: "200px" }}
        />
      </div>

      {/* Menu */}

      <ul className="hidden lg:flex">
        <li>
          <Link activeClass="" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li>
          <Link activeClass="" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="lg:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleClick}
              activeClass=""
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass=""
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass=""
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass=""
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass=""
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-lg mb-1">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold drop-shadow-lg"
              href="https://www.linkedin.com/in/ameer86/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 rounded-lg mb-1">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold drop-shadow-lg"
              href="https://github.com/Ameerusa86"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-700 rounded-lg mb-1">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold drop-shadow-lg"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500 rounded-lg mb-1">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold drop-shadow-lg"
              href=""
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
