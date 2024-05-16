import React from "react";
import "./styles.css";
import "./stylesMobileProjectCard.css";
import { FaEye, FaCode } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <section className="projectCard">
      <div
        className="projectCard__image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="projectCard__overlay">
          <Link href={gitUrl} className="projectCard__link facode" target="_blank">
            <FaCode className="projectCard__icon" />
          </Link>
          <Link href={previewUrl} className="projectCard__link faeye" target="_blank">
            <FaEye className="projectCard__icon" />
          </Link>
        </div>
      </div>
      <div className="projectCard__content">
        <h5 className="projectCard__title">{title}</h5>
        <p className="projectCard__description">{description}</p>
      </div>
    </section>
  );
};

export default ProjectCard;
