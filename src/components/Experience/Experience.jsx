import React from "react";
import "./Experience.scss";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    org: "Step One Step Ahead",
    date: "Dec 2025 – Feb 2026 ",
    desc: "Contributed to the company’s live product “Test Callibre” migration to angular. Assisted for developing the Master module consisting of 18+ submodules, focusing on modular architecture, Designed and implemented Custom Field operations with complex backend logic, improving flexibility.",
  },
  {
    role: "Web Developer Intern",
    org: "AD Infocom Pvt. Ltd.",
    date: "Dec 2024 – Jan 2025",
    desc: "Designed landing page using HTML/CSS/JS for restaurant website, optimized performance and ensured mobile responsiveness.",
  },
];

const education = [
  {
    role: "B.E. in ENTC Engineering",
    org: "DYPIEMR, Pune",
    date: "2022 – 2026",
    desc: "Focused on core subject of computer science, DSA and full-stack development.   CGPA: 8.57/10",
  },
  {
    role: "HSC – Science",
    org: "KAANMS College Satana",
    date: "2021 – 2022",
    desc: "Physics, Chemistry and Mathematics. Percentage: 63.5%",
  },
  {
    role: "SSC",
    org: "Pragati Secondary School Satana",
    date: "2019 – 2020",
    desc: "Rank 1 in School with 95.40%",
  }
];

const Experience = () => {
  return (
    <section className="app__experience" id="experience"
      data-aos="fade-up" data-aos-offset="200"
      data-aos-delay="150" data-aos-duration="700"
      data-aos-easing="ease" data-aos-once="true"
    >
      <h2 className="app__experience-title">Experience & Education</h2>
      <p className="app__experience-sub">My journey so far</p>

      <div className="app__experience-grid">
        <div className="app__experience-col">
          <h3 className="app__experience-col_heading exp"> Experience</h3>
          {experiences.map((item, i) => (
            <div className="app__experience-card exp" key={i}>
              <p className="app__experience-card_role">{item.role}</p>
              <p className="app__experience-card_org exp">{item.org}</p>
              <p className="app__experience-card_date">{item.date}</p>
              <p className="app__experience-card_desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="app__experience-col">
          <h3 className="app__experience-col_heading edu"> Education</h3>
          {education.map((item, i) => (
            <div className="app__experience-card edu" key={i}>
              <p className="app__experience-card_role">{item.role}</p>
              <p className="app__experience-card_org edu">{item.org}</p>
              <p className="app__experience-card_date">{item.date}</p>
              <p className="app__experience-card_desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;