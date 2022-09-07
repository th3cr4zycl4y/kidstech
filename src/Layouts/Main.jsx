import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Home from "../components/home/home";
import Ourservice from "../components/Ourservice/Ourservice";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/contact";

const Main = ({ isVisible }) => {
  return (
    <main className="container mx-auto overflow-x-hidden lg:overflow-x-visible">
      <div className={isVisible ? "hidden" : "block"}>
        <a href="#top" className="text-3xl text-white">
          <div className="fixed bottom-10 right-5  z-50 p-3 lg:mx-3  bg-[#3B008B] rounded-full lg:block h-30 w-30">
            <FaArrowUp />
          </div>
        </a>
      </div>
      <Home />
      <Ourservice />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Main;
