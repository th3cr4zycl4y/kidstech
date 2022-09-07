import React from "react";
import logo from "../../Assets/Images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footercon = () => {
  return (
    <div className=" mx-auto flex lg:py-32 py-10 w-[90%] items-center justify-center">
      <div className="text-center space-y-10 text-white">
        <div className="space-y-10 lg:space-x-10 flex   items-center justify-center flex-col  lg:flex-row lg:w-full">
          <div className="space-y-4">
            <img
              src={logo}
              className="w-[5rem] h-[5rem] mx-auto"
              alt="KidsTech logo"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              numquam inventore quo recusandae quasi cum nulla omnis neque iure
              in provident architecto dolorum delectus ab molestiae, quas, ad,
              dignissimos mollitia itaque earum deleniti. Vitae sint quo enim
              voluptate placeat incidunt?
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ABOUT US</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio facilis culpa maxime aperiam nam sunt qui cupiditate
              fuga facere maiores, minima itaque esse illum non saepe aspernatur
              nulla. Libero, perspiciatis..
            </p>
          </div>
          <div className="flex text-3xl text-white  space-x-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="flex justify-center align-center mt-10">
          <ul className="flex flex-col lg:flex-row items-center justify-center text-2xl lg:space-y-0   space-y-5 text-center lg:space-x-10 font-bold h-full mx-auto  text-white">
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
