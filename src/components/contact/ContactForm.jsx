import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [success, setsuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          if (result.status === 200) {
            setsuccess((success) => !success);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" w-[90%] lg:w-[40%] bg-white mx-auto my-20 p-10 shadow-2xl static  lg:relative lg:-bottom-48 rounded-xl">
      <h3 className="text-2xl font-bold text-[#3B008B] pb-4">SAY SOMETHING</h3>
      <form className="w-full" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col space-y-3 justify-center ">
          <label htmlFor="user_name">Full Name</label>
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="form"
            required
          />
          <label htmlFor="user_phone">Phone Number</label>
          <input
            name="user_phone"
            type="tel"
            placeholder="Your Phone Number"
            className="form"
            required
          />
          <label htmlFor="user_email">Email Address</label>
          <input
            name="user_email"
            type="email"
            placeholder="Your Mail"
            className="form"
            required
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="form h-40"
            required
          />
        </div>
        <button className=" w-full  hover:bg-white mt-5 p-4 font-bold rounded-xl shadow-md hover:shadow-xl  text-white bg-[#FF786F] hover:text-[#3B008B] border-[#3B008B] hover:border ">
          SUBMIT
        </button>
        {success && (
          <p className="text-green-500 my-5">Message Successfully sent</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
