import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full p-5 flex flex-col lgl:flex-row gap-10 lgl:gap-15"
    >
      {/* part one */}
      <div>
        <div className="py-5 lgl:py-7 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">
            Jan, 2018 - Feb, 2022
          </p>
          <h2 className="text-2xl md:text-2xl font-bold">BSc</h2>
        </div>
        <div className="mt-0 lgl:mt-0 w-full h-[px] border-l-[6px] border-l-black border-opacity-80 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science & Engineering"
            subTitle="Daffodil International University"
            result="3.86/4.00"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>

      {/* part Two */}

      <div>
        <div className="py-5 lgl:py-7 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2016</p>
          <h2 className="text-2xl md:text-2xl font-bold">HSC</h2>
        </div>
        <div className="mt-0 lgl:mt-0 w-full h-[px] border-l-[6px] border-l-black border-opacity-80 flex flex-col gap-10">
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="BAF Shaheen College, Dhaka"
            result="5.00/5.00"
            des="College is about much more than just course work. Also, students have the chance to experience a wide range of activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
