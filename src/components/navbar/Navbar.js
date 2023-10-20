import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import cv from "../../assets/CVs/FarjanaYeasmin_CV.pdf";

//import logo from "../../assets/images/bannar/farjana_logo_no_bg.png";

import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full justify-content-center h-14 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-shadowOne border-b-[1px] border-b-gray-600  ">
      <h1 className="text-xl font-bold text-black px-3 ">
        ___FARJANA YEASMIN___
      </h1>
      <div>
        <ul className=" hidden mdl:inline-flex items-center gap-3 lg:gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-bold text-gray-700 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="pt-2 text-2xl mdl:hidden bg-white w-10 h-10 inline-flex justify-content-center item-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen box-shadow overflow-scroll justify-content-center item-center absolute top-0 left-0 bg-white p-4 scrollbar-hide">
            <div className="flex flex-col gap-3 py-2 relative ">
              <div>
                <h1 className="w-18 text-xl font-bold text-black item-cemter">
                  FARJANA YEASMIN
                </h1>
                <p className=" text-sm font-bold  text-gray-600 mt-2 py-3 justify-content-center item-center">
                  An enthusiastic and committed person seeking an opportunity to
                  work in a challenging environment to prove my ability and
                  utilize my knowledge and intelligence in the organization’s
                  growth. Also, consider myself very motivated and passionate
                  about continuous development and learning. My strength is
                  devoted to hard work, self-motivation, and endurence.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-bold text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <div className="w-full flex ">
                  <a
                    href={cv}
                    download="Farjana_Yeasmin_CV"
                    className="w-20 h-8 bg-white text-designColor text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:text-black bg-opacity-40 hover:-translate-y-1 transition-all hover: cursor-pointer duration-300"
                  >
                    <FaDownload />
                    CV
                  </a>
                </div>
                <h2 className="text-base uppercase font-titleFont mb-2 text-designColor">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
