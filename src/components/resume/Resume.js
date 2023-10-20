import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import cv from "../../assets/CVs/FarjanaYeasmin_CV.pdf";
import { FaDownload } from "react-icons/fa";

// import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  // const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-5 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="My Resume" des="___Achivements & Skills___" />
      </div>
      <div className="w-full flex items-center justify-center pt-0 pb-5">
        <a
          href={cv}
          download="Farjana_Yeasmin_CV"
          className="w-14 h-8 bg-white text-designColor text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:font-bold bg-opacity-40 hover:-translate-y-1 transition-all hover: cursor-pointer duration-300"
        >
          <FaDownload />
          CV
        </a>
      </div>
      <div>
        <ul className="w-full shadow-shadowOne rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              // setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              // setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li> */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              // setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {skillData && <Skills />}
      {educationData && <Education />}
      {achievementData && <Achievement />}
      {/* {experienceData && <Experience />} */}
    </section>
  );
};

export default Resume;
