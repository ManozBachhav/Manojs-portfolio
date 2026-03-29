import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section className="app__about" id="about">
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
           
            Hello! I'm Manoj Bachhav, a passionate Full Stack Developer with a strong
             focus on building scalable web applications and backend systems. I enjoy 
             transforming complex problems into efficient and user-friendly solutions.
          </p>

          <p>
            I have hands-on experience with technologies like React, Node.js, Spring Boot,
             and MongoDB, along with a solid understanding of system design, authentication 
             mechanisms like JWT, and database management. I also explore DevOps practices using Docker and AWS for deployment and scalability.
          </p>

          <p>
            During my internship, I contributed to a live enterprise product, where I worked 
            on Angular migration and implemented complex backend logic for scalable and modular systems in company   
             <a
              href="https://www.steponestepahead.com/"
              target="_blank"
              className="app__links"
            >
               Step One Step Ahead
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
