import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
// import cv from "../../assets/CVs/FarjanaYeasmin_CV.pdf";
// import { FaDownload } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "MERN Stack Developer. "],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-2xl font-bold text-Black">
          Hi, I'm{" "}
          <span className="text-4xl text-designColor capitalize">
            {" "}
            Farjana Yeasmin
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-Black">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#008B8B"
          />
        </h2>
        <p className="text-base text-justify font-bold text-gray-600 font-bodyFont leading-6 tracking-wide">
          An enthusiastic and committed person seeking an opportunity to work in
          a challenging environment to prove my ability and utilize my knowledge
          and intelligence in the organization’s growth. Also, consider myself
          very motivated and passionate about continuous development and
          learning. My strength is devoted to hard work, self-motivation, and
          endurence.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
