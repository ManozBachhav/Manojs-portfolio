import React, { useRef, useState } from "react";
import CertificateCard from "./CertificateCard";
import ProjectDetails, { Azure, AWS } from "./imports";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const certificates = [Azure, AWS];
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  const visibleProjects = showAll
    ? ProjectDetails
    : ProjectDetails.slice(0, 3);

  return (
    <section className="app__projects" id="projects" ref={projectsRef}>
      <div className="app__projects-container">
        <h2>Projects</h2>
        <div className="app__projects-container_projects">
          {visibleProjects.map((projects, index) => (
            <ProjectsCard key={index} projects={projects} />
          ))}
        </div>

        {ProjectDetails.length > 3 && (
          <div className="app__projects-showmore">
            <button
              onClick={() => {
                if (showAll) {
                  projectsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setShowAll(!showAll);
              }}
            >
              {showAll ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        )}

        <div className="app__projects-container_certificate">
          <h2>Certificates</h2>
          <div className="app__projects-container_certificate-cert">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} cert={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;