import React from "react";
import "./Projects.css";
import digitalclock from "../../assets/digitalclock.jpg";
import weather from "../../assets/weather.jpg";
import { useAuth } from "../auth";

const Projects = () => {
  const { user } = useAuth();

  const projects = [
    {
      p_no: 1,
      p_name: "Digital Clock",
      Tech_Stack:
        "React.js, JavaScript, CSS, State Management: React Hooks (useState, useEffect)",
      description:
        "This project displays the current time in a digital format, updating every second. It uses React functional components along with the useState hook to store the time and the useEffect hook to set up an interval that updates the time continuously. The JavaScript Date object is used to fetch the current hours, minutes, and seconds. Basic CSS styling is applied to enhance the clock’s appearance..",
      projectLink: "https://benevolent-alpaca-312612.netlify.app/",
      image: digitalclock,
    },
    {
      p_no: 2,
      p_name: "Weather App",
      Tech_Stack:
        "React.js, JavaScript, CSS, API: OpenWeatherMap API,State Management: React Hooks (useState, useEffect)",
      description:
        "This project fetches and displays real-time weather information for a given city using a Weather API (such as OpenWeatherMap). It uses React functional components with the useState hook to store weather data and useEffect to trigger API calls. The fetch() method or Axios is used to request data from the API. The response includes details like temperature, humidity, wind speed, and weather conditions, which are then displayed dynamically. Basic CSS styling is used for a clean and responsive UI.",
      projectLink: "https://keen-kitten-36befa.netlify.app/",
      image: weather,
    },
  ];

  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title about">
        Projects
      </h2>
      <div className="Projects" id="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${index % 2 === 0 ? "row" : "row-reverse"}`}
          >
            <div className="project-content">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>
                <b>Tech_Stack:</b> {project.Tech_Stack}
              </p>
              <p>
                <b>Description:</b> {project.description}
              </p>

              {/* Only show "View demo" if user is logged in */}
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
                <p className="login-warning">
                  🔒 Please log in to view this project
                </p>
              )}
            </div>

            <div className="project-image">
              {user ? (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.p_name}
                    className="project-img"
                  />
                </a>
              ) : (
                <div
                  className="project-locked"
                  onClick={() =>
                    document
                      .getElementById("login")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <img
                    src={project.image}
                    alt={project.p_name}
                    className="project-img locked"
                  />
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
