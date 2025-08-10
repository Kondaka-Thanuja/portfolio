import React, { useState } from "react";
import "./Login.css";  
import { useAuth } from "../auth";

const Login = () => {
  const { user, login } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter your username");
      return;
    }

   
    if (name.trim().toLowerCase() === "thanuja") {
      login(name.trim());
      setName("");
      // After login, scroll to projects section
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("Invalid username. Please enter the correct username.");
    }
  };

  return (
    <div id="login" className="login-container">
      <h1 className="login-title">Login</h1>
      <label className="login-label" htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        className="login-input"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      {user && <p className="login-success">Logged in as: {user}</p>}
    </div>
  );
};

export default Login;
