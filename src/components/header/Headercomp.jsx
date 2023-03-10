import React from "react";
import logo from "../../Assets/Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Headercomp = ({ NavToggle, toggle }) => {
  return (
    <section
      id="home"
      className="container mx-auto flex h-[5rem]  justify-between items-center shadow-sm bg-white"
    >
      <div className="pl-2 logo">
        <img
          src={logo}
          alt="Kids Tech Global Logo"
          className="w-[5rem] h-[5rem]"
        />
      </div>
      <nav
        className={
          toggle
            ? "hidden lg:block w-[35rem]"
            : "block w-full lg:w-[35rem] lg:h-[8rem]  h-[50vh] text-center lg:text-left absolute lg:static top-[5rem] container mx-auto lg:m-0"
        }
      >
        <ul className="flex flex-col items-center justify-center h-full mx-auto space-y-5 text-2xl bg-white shadow-xl lg:shadow-none lg:space-y-0 lg:text-xl lg:flex-row lg:justify-around ">
          <li>
            <a onClick={NavToggle} href="#Home">
              Home
            </a>
          </li>
          <li>
            <a onClick={NavToggle} href="#ourservice">
              Our Service
            </a>
          </li>
          <li>
            <a onClick={NavToggle} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={NavToggle} href="#gallery">
              Gallery
            </a>
          </li>

          <li>
            <a onClick={NavToggle} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="pr-2 text-3xl text-[#3B008B] lg:hidden cursor-pointer"
        onClick={NavToggle}
      >
        {toggle ? <FaBars /> : <FaTimes />}
      </div>
    </section>
  );
};

export default Headercomp;
