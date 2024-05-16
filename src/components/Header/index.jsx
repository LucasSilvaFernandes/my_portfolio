import React, { useRef } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import "./styles.css";
import "./stylesBurgerMenu.css";
import Social from "./Social";
import { Link } from "react-scroll";

export const Header = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo" />
        <BiMenu onClick={openMenu} className="nav__icon nav__open" />

        <ul ref={menuRef} className="nav__menu">
          <Social className="nav__social" />
          <BiX onClick={closeMenu} className="nav__icon nav__close" />
          <li className="nav__item">
            <Link
              href="#"
              className="nav__link active-link"
              to="home"
              smooth="true"
              duration={500}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link
              href="#"
              className="nav__link"
              to="about"
              smooth="true"
              duration={500}
              onClick={handleLinkClick}
            >
              Sobre
            </Link>
          </li>

          <li className="nav__item">
            <Link
              href="#project"
              className="nav__link"
              to="project"
              smooth="true"
              duration={500}
              onClick={handleLinkClick}
            >
              Projetos
            </Link>
          </li>

          <li className="nav__item">
            <Link
              href="#contact"
              className="nav__link"
              to="contact"
              smooth="true"
              duration={500}
              onClick={handleLinkClick}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__style"></div>
    </header>
  );
};
