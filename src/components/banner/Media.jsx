import React from "react";
import {
  FaFacebookF,
  FaNode,
  FaGithub,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-between">
      <div>
        <h2 className=" text-base text-designColor uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              className="cursor-pointer"
              href="https://github.com/FarjanaY"
              target="blank"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/farjana-yeasmin-15107923b/?locale=fr_FR"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/profile.php?id=100007295927032"
              target="blank"
            >
              <FaFacebookF />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base text-designColor uppercase font-titleFont mb-4 ">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <DiJavascript />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNode />
          </span>

          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
