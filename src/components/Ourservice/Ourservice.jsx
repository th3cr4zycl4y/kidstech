import React from "react";
import Scard from "./Scard";

const Ourservice = () => {
  return (
    <section id="ourservice" className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h3
          className="text-4xl lg:text-5xl my-5 text-[#3B008B] font-extrabold"
          data-aos="fade-up"
        >
          Our Services
        </h3>
        <div>
          <Scard />
        </div>
        <button data-aos="fade-up" className="mt-10 btn">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Ourservice;
