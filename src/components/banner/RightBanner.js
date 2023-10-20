import React from "react";
import bannarImage from "../../assets/images/bannar/farjana_no_bg.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative bottom-12">
      <img
        className="w-[390px] h-[420px] lgl:w-[550px] lgl:h-[590px] z-10 "
        src={bannarImage}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[340px] h-[300px] lgl:w-[440px] lgl:h-[400px] bg-gradient-to-r from-[#FFFAFA] to-[#F0F8FF] shadow-shadowOne flex justify-center items-center "></div>
    </div>
  );
};

export default RightBanner;
