import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="container h-full mx-auto ">
      <div className="lg:flex">
        <div className=" mx-4 lg:w-[50%]">
          <h3 className="text-3xl font-extrabold tracking-widest text-[#3B008B] py-10">
            GET IN TOUCH
          </h3>

          <div className="space-y-10 info ">
            <div>
              <FaEnvelope className="icon" />
              <a href="mailto:adese.adeniran2012@gmail.com">
                adese.adeniran2012@gmail.com
              </a>
            </div>
            <div>
              <FaPhoneAlt className="icon" />
              <p>
                <a href="tel:+2347033390869">+2347033390869 </a>
              </p>
            </div>
            <div>
              <FaMapMarkerAlt className="icon" />
              <p>No 13 olowora road beside WestGate SuperMarket </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
