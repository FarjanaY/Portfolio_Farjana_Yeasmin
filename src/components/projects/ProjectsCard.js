import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, gitLink, webLink }) => {
  return (
    <div className="w-full p-5 xl:px-3 h-auto xl:py-3 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#F0F8FF] group hover:bg-gradient-to-b hover:from-gray-200 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-2 flex flex-col  gap-4">
        <div>
          <div className="flex items-center justify-between ml-1 mr-2">
            <h3 className="text-base font-bold uppercase text-designColor ">
              {title}
            </h3>
            <div className="flex gap-2 ">
              <span className="text-xl w-8 h-8 rounded-full bg-white inline-flex justify-center items-center text-black hover:text-designColor duration-300 cursor-pointer">
                <a
                  className="cursor-pointer"
                  href={gitLink}
                  webLink
                  target="blank"
                >
                  <BsGithub />
                </a>
              </span>
              <span className="text-xl w-8 h-8 rounded-full bg-white border-[1px] inline-flex justify-center items-center text-black hover:text-designColor duration-300 cursor-pointer">
                <a
                  className="cursor-pointer"
                  href={webLink}
                  webLink
                  target="blank"
                >
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="p-2 text-sm tracking-wide mt-1 hover:text-black duration-300 justify-content-center item-center text-justify">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
