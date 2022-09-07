import React from "react";
import Sdata from "./Sdata.json";

const Scard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {Sdata &&
        Sdata.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="flex lg:w-[30rem] flex-col items-center justify-center space-y-4 shadow-md bg-slate-50 m-5 py-10 hover:shadow-xl rounded-2xl  hover:text-white"
                data-aos="fade-up"
              >
                <div className="w-12 h-12">
                  <img src={item.icon} alt="" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#3B008B] w-1/2 text-center">
                  {item.title}
                </h3>
                <p className="w-[80%] text-[#3B008B]">{item.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Scard;
