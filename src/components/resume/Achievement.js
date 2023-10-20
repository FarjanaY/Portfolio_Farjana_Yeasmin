import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full p-5 flex flex-col lgl:flex-row gap-10 lgl:gap-15"
    >
      {/* part one */}
      <div>
        <div className="py-5 lgl:py-7 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">July, 2022</p>
          <h2 className="text-2xl md:text-2xl font-bold">PUBLICATIONS</h2>
        </div>
        <div className="mt-0 lgl:mt-0 w-full h-[px] border-l-[6px] border-l-black border-opacity-80 flex flex-col gap-10">
          <ResumeCard
            title="'Thesis' Issued by : Springer"
            subTitle="DOI : 10.1007/978-981-19-1844-5_9"
            result="Success"
            des="TOURIST SPOT RECOGNIZATION USING MACHINE LEARNING ALGORITHMS."
          />
        </div>
      </div>

      {/* part Two */}

      <div>
        <div className="py-5 lgl:py-7 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">
            October, 2019
          </p>
          <h2 className="text-2xl md:text-2xl font-bold">
            PROGRAMMING CONTEST
          </h2>
        </div>
        <div className="mt-0 lgl:mt-0 w-full h-[px] border-l-[6px] border-l-black border-opacity-80 flex flex-col gap-10">
          <ResumeCard
            title="Programming Contest"
            subTitle="Position : 23"
            result="Success"
            des="DIU INTRA UNIVERSITY GIRLS’ PROGRAMMING CONTEST (Organized by CPC)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
