import React from "react";
import "./Hero.css";
import me from "../../assets/me.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll"; // ✅ Import for smooth scroll

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={me} alt="Thanuja" />
      <h1>
        <span>I am Thanuja frontend developer</span>
      </h1>
      <p>
        My name is Thanuja. I'm a driven and motivated individual aiming to
        become a skilled developer.
      </p>
      <div className="hero-action">
        {/* ✅ Same class name, now wrapped in AnchorLink */}
        <AnchorLink href="#contact" className="hero-connect">
          Connect With Me
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
