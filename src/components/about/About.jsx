import React from "react";
import AboutImg from "../../Assets/Images/teacher.jpg";

const About = () => {
  return (
    <section id="about" className="container py-20 mx-auto h-[100vh]">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="w-full px-4 mx-auto about-txt lg:w-[50%]">
          <h2
            className="text-3xl my-5 lg:text-4xl text-[#3b008b] font-extrabold"
            data-aos="fade-up"
          >
            Welcome to KidsTech Global!
          </h2>
          <p data-aos="fade-up">
            We provide modern educational support tools to facilitate learning
            process among the children in both primary and secondary schools
            relying on robotics, coding, chess and scrabble games couple with
            modern artistic asset to influence the quantitative, qualitative
            reasoning with healthy creativity among the children to be able to
            compete with their counterpart in the rest of the world.
          </p>
          <p data-aos="fade-up">
            We also tutor foriegn languages and coach those who will like to
            write international examination towards achieving their targeted
            points.
          </p>
          <p data-aos="fade-up">
            We build up children with requisite capacity to accomodate growth
            and impact which allows them to attract choice people and hand
            lifter that will emerge to be way super successfull. There's no
            greater time than now, the power of the mind is so great at a young
            stage where worries and over-thinking isn't a problem.
          </p>
          <p data-aos="fade-up">
            Kidstech Global will nuture and bring out the hidden potentials in
            children and you'll be surprise at how much they could do. Kidstech
            Global was founded with a great motor to help and nurture start-up
            in children. Schools around are given out their testimonies on how
            we have impacted the lives and learning process of their ward.
          </p>
        </div>
        <div className="p-4 lg:w-[50%] h-[30rem]" data-aos="fade-up">
          <img
            src={AboutImg}
            alt="about img"
            className="w-full h-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
