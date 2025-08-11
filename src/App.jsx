import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Coding from "./Components/Coding/Coding";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./Components/Auth";

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        {/* Admin protected route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
