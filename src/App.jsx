import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Coding from "./Components/Coding/Coding";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./Components/auth";  // Correct import path here

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Coding />
        <Projects />
        <Contact />
        <Login />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
