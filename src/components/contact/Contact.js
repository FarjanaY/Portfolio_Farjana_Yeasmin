import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section id="contact" className="w-full py-5 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="___Get in Touch___" />
      </div>
      <div className="w-full">
        <div className="w-full gap-5 px-5 h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[55%] h-full py-3 bg-gradient-to-r from-white to-bodyColor flex flex-col gap-5 p-4 lgl:px-10 lgl:py-2 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-4 py-2 lgl:py-5"
              action="mailto:farjanaa.yyeasmin@gmail.com"
              method="post"
              enctype="text/plain"
            >
              {errMsg && (
                <p className="py-3 rounded-lg bg-gradient-to-r from-white to-red font-bold shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 rounded-lg bg-gradient-to-r from-white to-green font-bold shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-black font-bold uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Enter Your Name"
                    className={`${
                      errMsg === "Username is required!" && "outline-[#F08080]"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-black font-bold uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    placeholder="Enter Your Phone Number"
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-[#F08080]"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black font-bold uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Your Email Address"
                  className={`${
                    errMsg === "Please give your Email!" && "outline-[#F08080]"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black font-bold uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Enter Message Subject"
                  className={`${
                    errMsg === "Plese give your Subject!" && "outline-[#F08080]"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black font-bold uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Enter Your Message"
                  className={`${
                    errMsg === "Message is required!" && "outline-[#F08080]"
                  } contactTextArea`}
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-9  bg-designColor rounded-lg text-base text-white font-bold tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 rounded-lg bg-gradient-to-r from-white to-red shadow-shadowOne text-center text-red-500 font-bold text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 rounded-lg bg-gradient-to-r from-white to-green font-bold shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
