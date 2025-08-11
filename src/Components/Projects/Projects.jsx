import React, { useState, useEffect } from "react";
import "./Projects.css";
import digitalclock from "../../assets/digitalclock.jpg";
import weather from "../../assets/weather.jpg";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router-dom";

const defaultProjects = [
  {
    p_no: 1,
    p_name: "Digital Clock",
    Tech_Stack: "React.js, JavaScript, CSS, State Management: React Hooks (useState, useEffect)",
    description: "This project displays the current time...",
    projectLink: "https://benevolent-alpaca-312612.netlify.app/",
    image: digitalclock,
  },
  {
    p_no: 2,
    p_name: "Weather App",
    Tech_Stack: "React.js, JavaScript, CSS, API: OpenWeatherMap API...",
    description: "This project fetches and displays real-time weather info...",
    projectLink: "https://keen-kitten-36befa.netlify.app/",
    image: weather,
  },
];

const Projects = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Load projects from localStorage or use defaultProjects
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : defaultProjects;
  });

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Edit handler
  const handleEdit = (index) => {
    const newName = prompt("Edit project name:", projects[index].p_name);
    if (newName) {
      const updatedProjects = [...projects];
      updatedProjects[index].p_name = newName;
      setProjects(updatedProjects);
    }
  };

  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title about">Projects</h2>
      <div className="Projects" id="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${index % 2 === 0 ? "row" : "row-reverse"}`}
          >
            <div className="project-content">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p><b>Tech_Stack:</b> {project.Tech_Stack}</p>
              <p><b>Description:</b> {project.description}</p>

              {/* Show Edit button only for admin */}
              {user && user.role === "admin" && (
                <button onClick={() => handleEdit(index)} className="edit-button">
                  ✏️ Edit
                </button>
              )}

              {/* Show View demo if logged in */}
              {user ? (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-demo"
                >
                  🔗 View demo
                </a>
              ) : (
                <p className="login-warning" onClick={()=>navigate("/login")}>🔒 Please log in to view this project</p>
              )}
            </div>

            <div className="project-image">
              {user ? (
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.p_name} className="project-img" />
                </a>
              ) : (
                <div
                  className="project-locked"
                  onClick={()=>navigate("/login")}
                >
                  <img src={project.image} alt={project.p_name} className="project-img locked" />
                  <div className="overlay">🔒 Login to view</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
