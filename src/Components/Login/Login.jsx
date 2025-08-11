import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../Auth";
// import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { user, login } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter your username");
      return;
    }

    const username = name.trim();

    // Call login with only username,
    // role is assigned inside AuthProvider based on username

    login(username);

    setName("");
    navigate("/projects");
  };

  return (
    <div id="login" className="login-container">
      <h1 className="login-title">Login</h1>
      <label className="login-label" htmlFor="username">
        Username
      </label>
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

      {user && (
        <p className="login-success">
          Logged in as: {user.username} ({user.role})
        </p>
      )}
    </div>
  );
};

export default Login;
