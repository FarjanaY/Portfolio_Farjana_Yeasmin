import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import contact from "../../assets/images/contacts/contact_me.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[40%] h-full bg-gradient-to-r from-[#F0F8FF] to-bodyColor p-4 lgl:p-4 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-1"
        src={contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-xl font-bold text-black">Farjana Yeasmin</h3>
        <p className="text-lg font-normal text-black">MERN Stack Developer</p>
        <p className="text-base text-gray-900 tracking-wide">
          For any queries, you can contact 24X7 <br /> with me.
        </p>
        <p className="text-base text-black flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1234567890</span>
        </p>
        <p className="text-base text-black flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">farjanaa.yyeasmin@gmail.com</span>
        </p>
      </div>
      <div className="flex px-5 gap-4 item-center justify-content-center">
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
  );
};

export default ContactLeft;
