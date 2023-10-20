import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-0  font-titleFont mb-5 px-10">
      <h3 className="text-sm uppercase font-light text-designColor item-center justify-content-center tracking-wide">
        {title}
      </h3>
      <h1 className="text-2xl md:text-3xl text-gray-black font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
