"use client";
import { useState, useRef } from "react";
import "./styles.css";
import "./stylesMobileProjects.css";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import ProjectTag from "./ProjectTag/ProjectTag";
import ProjectsData from "./ProjectData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" className="projects">
      <h2 className="project__title">Meus Projetos</h2>
      <div className="project__tags">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation, Pagination]}
        className="custom__swiper"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SwiperSlide key={index} className="custom__swiper__slide">
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </SwiperSlide>
            {console.log("Animate state:", isInView ? "animate" : "initial")}
          </motion.li>
        ))}
        <div>
          <MdArrowBackIosNew className="custom-swiper-button-prev" />
        </div>
        <div>
          <MdArrowForwardIos className="custom-swiper-button-next" />
        </div>
      </Swiper>
    </section>
  );
};
