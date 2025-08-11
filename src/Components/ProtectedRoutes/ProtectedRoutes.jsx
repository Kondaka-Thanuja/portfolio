import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";
const ProtectedRoute = ({ children, roleRequired }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in: redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required, check user's role
  if (roleRequired && user.role !== roleRequired) {
    // Role mismatch: redirect to home or unauthorized page
    return <Navigate to="/" replace />;
  }

  // Authorized: render the child components
  return children;
};

export default ProtectedRoute;
