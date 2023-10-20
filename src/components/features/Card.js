import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 h-60 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-bodyColor group hover:bg-gradient-to-b hover:from-white hover:to-[#F0F8FF] transition-colors duration-100 group">
      <div className="h-52 overflow-y-hidden">
        <div className="flex h-full flex-col gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-800 ">
              {title}
            </h2>
            <p className="base text-sm text-justify">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
