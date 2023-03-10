import React from "react";
import robotimg from "../../Assets/Images/robot.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="h-full lg:h-[80vh] lg:pt-10 pt-20   z-10 bg-white text-center flex flex-col lg:flex-row  align-center justify-center"
    >
      <div className="lg:w-[50vw] flex flex-col justify-center items-center m-2">
        <h1 className="text-4xl text-[#3B008B] font-bold  lg:font-extrabold pb-6 lg:text-6xl text-">
          Prefecting Your Passion To Achieve Your Dreams
        </h1>
        <p className="font-bold text-[#3B008B] mb-6">
          Kidstech Global is a contemporary organization using modern tools and
          technics to influence the general world positively relying on
          effectiveness and efficiency in teaching methodology.
        </p>
        <button className="btn">
          <a href="#about">Learn More</a>
        </button>
      </div>
      <div className="flex justify-center align-center">
        <img src={robotimg} alt="Robot" />
      </div>
    </section>
  );
};

export default Home;
