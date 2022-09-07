import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto h-full ">
      <div className="lg:flex">
        <div className=" mx-4 lg:w-[50%]">
          <h3 className="text-3xl font-extrabold text-[#3B008B] py-5">
            GET IN TOUCH
          </h3>
          <p className="mb-10 text-[#3B008B]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequuntur alias deserunt odit natus earum mollitia cupiditate
            illum corrupti assumenda, tempora molestiae hic laborum quidem eius
            quaerat quos. Est laboriosam voluptas at doloremque porro soluta
            quibusdam dolores totam aut sequi.
          </p>
          <div className="info space-y-10 ">
            <div>
              <FaEnvelope className="icon" />
              <p>Example@example.com</p>
            </div>
            <div>
              <FaPhoneAlt className="icon" />
              <p>
                <a href="tel:+2347033390869">+2347033390869 </a>
              </p>
            </div>
            <div>
              <FaMapMarkerAlt className="icon" />
              <p>No 13 olowoira road beside WestGate SuperMarkert </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
