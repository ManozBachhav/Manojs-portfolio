// PROJECTS

import Chatapp from "../../assets/images/projects/Chatapp.png";
// import Portfolio from "../../assets/images/projects/portfolio.jpg";
import Apnabazaar from "../../assets/images/projects/Apnabazaar.png";
import Vignam from "../../assets/images/projects/Vignam.png";
import Hiredai from "../../assets/images/projects/Hiredai.png";
import UserManagement from "../../assets/images/projects/Usermanagement.png";



// CERTICIFICATES

import Azure from "../../assets/images/certificate/Azure.png";
import AWS from "../../assets/images/certificate/Aws.png";

export { Azure, AWS };

const ProjectDetails = [
  {
    image: Hiredai,
    title: "Hired.ai – AI Interview Platform",
    text: "Built an AI-powered interview platform using React, Node.js, and MongoDB. Integrated Google Gemini API to generate role-based interview questions and implemented an AI-driven feedback system for performance evaluation.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    site: "https://hired-ai-one.vercel.app/",
    code: "https://github.com/ManozBachhav/Hired.ai",
  },
   {
    image: Chatapp,
    title: "Real-time Chat Application for users",
    text: "Built a real-time chat application using Socket.io with features like instant messaging, user authentication, and scalable backend architecture.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    site: "https://chat-app-theta-lilac.vercel.app/",
    code: "https://github.com/ManozBachhav/Chat-App",
  },
     {
    image: Apnabazaar,
    title: "ApnaBazaar – E-commerce Platform",
    text: "Developed a full-stack e-commerce platform connecting local producers directly with consumers. Implemented authentication, product management, and Stripe payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    site: "https://apnabazaar-theta-wheat.vercel.app/",
    code: "https://github.com/ManozBachhav/ApnaBazaar",
  },
  {
    
    image: UserManagement, // replace later with correct image if available
    title: "User Management Backend System (Spring Boot)",
    text: "Developed a secure REST API using Spring Boot with JWT authentication, layered architecture, and MySQL integration for managing users.",
    tech: ["Java", "Spring Boot", "JWT", "MySQL"],
    site: null,
    code: "https://github.com/ManozBachhav/Usermanagement-Backend",
  },

  {
    image: Vignam,
    title: "Vignam",
    text: "A Landing page for Startup built with ReactJS, Node.js, Express and MongoDB.",
    site: "https://vignam-landing.vercel.app/",
    code: "https://github.com/ManozBachhav/vignam-landing",
  },

 
];

export default ProjectDetails;
