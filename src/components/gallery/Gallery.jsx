import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gdata from "./Gdata.json";

const Gallery = () => {
  const settings = {
    autoplaySpeed: 1500,
    cssEase: "linear",
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,

          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
        },
      },
    ],
  };
  return (
    <section className="container mx-auto " id="gallery">
      <h2 className="text-3xl tracking-widest font-extrabold text-center lg:text-4xl text-[#3B008B]  ">
        Gallery
      </h2>
      <div className="h-[30rem] w-[full] flex flex-col item-center justify-center">
        <Slider {...settings}>
          {Gdata.map((item, index) => (
            <div key={index} className="w-[25rem] px-2">
              <img
                className="w-[25rem] h-[25rem] rounded-xl"
                src={item.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
