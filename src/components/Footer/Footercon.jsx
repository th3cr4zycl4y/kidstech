import React from "react";
import logo from "../../Assets/Images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footercon = () => {
  return (
    <div className=" mx-auto flex lg:py-32 py-10 w-[90%] items-center justify-center">
      <div className="space-y-10 text-center text-white">
        <div className="flex flex-col items-center justify-center space-y-10 lg:space-x-10 lg:flex-row lg:w-full">
          <div className="space-y-4">
            <div className="flex items-end justify-center  lg:w-[40%]">
              <img
                src={logo}
                className="w-[5rem] h-[5rem]"
                alt="KidsTech logo"
              />
              <h1 className="pl-5 text-4xl font-bold">KidsTech Global</h1>
            </div>

            <p>
              Kidstech global company was incorporated on 28 march 2008 to build
              core competence in every child and to exchange values with all our
              stakeholders through the use of Technology and innovation. Founded
              by a prolific veteran in the application of modern mediums of
              imparting knowledge with the use of programming languages,
              robotics, chess, drone piloting, etc in solving our societal
              problems
            </p>
          </div>

          <div className="flex space-x-5 text-3xl text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="flex justify-center mt-10 align-center">
          <ul className="flex flex-col items-center justify-center h-full mx-auto space-y-5 text-2xl font-bold text-center text-white lg:flex-row lg:space-y-0 lg:space-x-10">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#ourservice">Our Service</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footercon;
