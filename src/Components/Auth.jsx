import React, { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

const login = (username) => {
  const trimmedUsername = username.trim();
  const normalizedUsername = trimmedUsername.toLowerCase();

  let role = "guest";
  if (normalizedUsername === "thanuja") {
    role = "admin";
  }

  // Save user object with username and role as JSON string in localStorage
  localStorage.setItem("user", JSON.stringify({ username: trimmedUsername, role }));

  // Set user state from the same data
  setUser({ username: trimmedUsername, role });

  setLogged(true);
};

const logout = () => {
  setUser(null);
  setLogged(false);               // Also reset logged state on logout
  localStorage.removeItem("username");  // Clear localStorage on logout
};

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const userObj = JSON.parse(storedUser);
    setUser(userObj);
    setLogged(true);
  }
}, []);



  return (
    <AuthContext.Provider value={{ user, login, logout,logged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
