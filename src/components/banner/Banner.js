import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full px-3 pt-3 pb-3 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center justify-content-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
