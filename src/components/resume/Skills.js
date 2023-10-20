import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* 1st colomn */}
      <div className="w-full lgl:w-1/3">
        <div>
          <div className=" pt-7 py-3 font-titleFont flex flex-col gap-1">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Programming Languages
            </h2>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JavaScript</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Python</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[55%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">55%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">C</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className=" pt-5 py-3 font-titleFont flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-bold">Database</h2>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">MongoDB</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">MySQL</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd colomn */}
      <div className="w-full lgl:w-1/3">
        <div>
          <div className="pt-7 py-3 font-titleFont flex flex-col gap-1">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Frameworks & Libraries
            </h2>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">React.js</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Node.js</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Express.js</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-5 py-3 font-titleFont flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-bold">
              Markup & Stylesheet
            </h2>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">HTML 5</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Third colomn */}
      <div className="w-full lgl:w-1/3">
        <div>
          <div className=" pt-7 py-3 font-titleFont flex flex-col gap-1">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Platforms & <br /> Tools
            </h2>
          </div>
          <div className='className="mt-10 w-full flex flex-col gap-1'>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium"> Git</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Github</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Visual Studio Code
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-paleturquoise-500 to-teal-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
