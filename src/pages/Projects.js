import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    name: "Pinterest Clone",
    description: "A clone website showing the basic structure of Pinterest.",
    github: "https://github.com/yourprofile/Pinterest-clone",
  },
  {
    name: "Complaint Management System",
    description: "A MERN stack application for managing complaints registrations and matching.",
    github: "https://github.com/priyanshi480/ResolveHub",
  },
  {
    name: "Phishing Website Detection",
    description: "A classification model to detect phishing websites based on URL analysis.",
    github: "https://github.com/priyanshi480/phishing-detection",
  },
  {
    name: "Crypto Converter",
    description: "A real-time cryptocurrency converter using API integration.",
    github: "https://github.com/priyanshi480/crypto-converter",
  },
  {
    name: "Liver Disease Prediction",
    description: "A machine learning model to predict liver disease based on patient data.",
    github: "https://github.com/priyanshi480/liver-disease-prediction",
  },
  {
    name: "Superstore Analysis",
    description: "A data analysis project to gain insights into superstore sales trends.",
    github: "https://github.com/priyanshi480/superstore-analysis",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              🔗 GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

