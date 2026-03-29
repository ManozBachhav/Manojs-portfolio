import React from "react";
import MultiDevice from "../../assets/images/multi-device.svg";
import skillCategories from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="app__skills" id="skills">
      {/* TITLE */}
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>

        <p className="app__skills-title_content">
          I specialize in full-stack development with a strong focus on backend
          and scalable system design — currently deepening my knowledge of{" "}
          <a
            href="https://www.java.com/"
            target="_blank"
            rel="noreferrer"
            className="app__links"
          >
            Java
          </a>{" "}
          and{" "}
          <a
            href="https://spring.io/projects/spring-boot"
            target="_blank"
            rel="noreferrer"
            className="app__links"
          >
            Spring Boot
          </a>.
        </p>

        <p className="app__skills-title_content">
          I build real-world applications using modern technologies across
          frontend, backend, and cloud environments.
        </p>
      </div>

      {/* SKILLS */}
      <div className="app__skills-container">
        <div className="app__skills-container_skills">
          {skillCategories.map((group) => (
            <div key={group.category} className="app__skills-category">
              
              <h3 className="app__skills-category_label">
                {group.category}
              </h3>

              <div className="app__skills-category_grid">
                {group.skills.map((skill, index) => (
                  <SkillsCard key={index} skill={skill} />
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="app__skills-container_image multidevice">
        <img src={MultiDevice} alt="Multi Device Illustration" />
      </div>
    </section>
  );
};

export default Skills;