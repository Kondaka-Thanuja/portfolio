// Admin.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

const Admin = ({ children }) => {
  const { user } = useAuth();
  return user && user.role === "admin" ? children : <Navigate to="/" replace />;
};

export default Admin;
