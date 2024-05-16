import React from "react";
import "./styles.css";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonClass = isSelected ? "project__tag selected" : "project__tag";

  return (
    <button className={buttonClass} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
