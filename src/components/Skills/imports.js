import CSS from "../../assets/images/skills/css.svg";
import Git from "../../assets/images/skills/git.svg";
import Github from "../../assets/images/skills/github.svg";
import HTML from "../../assets/images/skills/html.svg";
import JavaScript from "../../assets/images/skills/javascript.svg";
import MYSQL from "../../assets/images/skills/mysql.svg";
import React from "../../assets/images/skills/react.svg";
import TailwindCSS from "../../assets/images/skills/tailwindcss.svg";
import TypeScript from "../../assets/images/skills/typescript.svg";
import Vercel from "../../assets/images/skills/vercel.svg";
import VSCode from "../../assets/images/skills/vscode.svg";
import NodeJS from "../../assets/images/skills/nodejs.svg";
import Docker from "../../assets/images/skills/docker.svg";
import MongoDB from "../../assets/images/skills/MongoDB.svg";
import AWS from "../../assets/images/skills/aws.svg";
import java from "../../assets/images/skills/java.svg";
import Cpp from "../../assets/images/skills/cpp.svg";
import Angular from "../../assets/images/skills/Angular.svg";
import Postman from "../../assets/images/skills/Postman.svg";
import SpringBoot from "../../assets/images/skills/Spring.svg";

const skillCategories = [
  {
    category: "Languages",
    skills: [
       { image: Cpp, text: "C++" },
      { image: java, text: "Java" },
     

    ],
  },
  {
    category: "Frontend",
    skills: [
      { image: HTML, text: "HTML5" },
      { image: CSS, text: "CSS3" },
      { image: React, text: "React.js" },
      { image: Angular, text: "Angular" },
      { image: TailwindCSS, text: "TailwindCSS" },

    ],
  },
  {
    category: "Backend",
    skills: [
      { image: NodeJS, text: "Node.js" },
      { image: SpringBoot, text: "Spring Boot" },
      { image: JavaScript, text: "JavaScript" },
      { image: TypeScript, text: "TypeScript" }, // add this import if you have the SVG
    ],
  },
  {
    category: "Database",
    skills: [
      { image: MYSQL, text: "MySQL" },
      { image: MongoDB, text: "MongoDB" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { image: Docker, text: "Docker" },
      { image: AWS, text: "AWS EC2" },
      { image: Git, text: "Git" },
      { image: Github, text: "GitHub" },
      { image: Vercel, text: "Vercel" },
      { image: Postman, text: "Postman" },
      { image: VSCode, text: "VS Code" },
    ],
  },
];

export default skillCategories;