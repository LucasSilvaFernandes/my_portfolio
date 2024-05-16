import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://wa.me/+5511985099480">
        <FaWhatsapp className="home__social-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/lucas-da-silva-fernandes-5854462b7/"
        className="home__social-icon"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/LucasSilvaFernandes"
        className="home__social-icon"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
