import { useState, useRef } from "react";
import { FaHome, FaTools, FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "./auth";

import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const [menu, setMenu] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  const isActive = (item) => menu === item;

  return (
    <div className="navbar">
      <h1>Thanuja</h1>

      {/* Mobile menu open icon */}
      <MdOutlineMenu
        onClick={openMenu}
        style={{ fontSize: 30 }}
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        {/* Mobile menu close icon */}
        <IoMdClose
          onClick={closeMenu}
          className="nav-mob-close"
          style={{ fontSize: 30 }}
        />

        {/* Home */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: isActive("home") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("home")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("home")}
        >
          <AnchorLink offset={50} href="#hero" className="color">
            {hoveredItem === "home" ? (
              <FaHome style={{ fontSize: 25 }} />
            ) : (
              "Home"
            )}
          </AnchorLink>
        </li>

        {/* About */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: isActive("about") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("about")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("about")}
        >
          <AnchorLink offset={50} href="#about" className="color">
            {hoveredItem === "about" ? (
              <MdPerson style={{ fontSize: 25 }} />
            ) : (
              "About Me"
            )}
          </AnchorLink>
        </li>

        {/* Coding */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: isActive("coding") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("coding")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("coding")}
        >
          <AnchorLink offset={50} href="#coding" className="color">
            {hoveredItem === "coding" ? (
              <FaTools style={{ fontSize: 25 }} />
            ) : (
              "Coding"
            )}
          </AnchorLink>
        </li>

        {/* Projects */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: isActive("projects") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("projects")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("projects")}
        >
          <AnchorLink offset={50} href="#projects" className="color">
            {hoveredItem === "projects" ? (
              <FaTools style={{ fontSize: 25 }} />
            ) : (
              "Projects"
            )}
          </AnchorLink>
        </li>

        {/* Contact */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            paddingBottom: "4px",
            borderBottom: isActive("contact") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("contact")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("contact")}
        >
          <AnchorLink offset={50} href="#contact" className="color">
            {hoveredItem === "contact" ? (
              <FaPhoneAlt style={{ fontSize: 25 }} />
            ) : (
              "Contact"
            )}
          </AnchorLink>
        </li>

        {/* Login */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            paddingBottom: "4px",
            borderBottom: isActive("login") ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("login")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenu("login")}
        >
          <a href="#login" className="color" style={{ textDecoration: "none" }}>
            {hoveredItem === "login" ? (
              <IoIosLogIn style={{ fontSize: 25 }} />
            ) : (
              "Login"
            )}
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink href="#contact" className="color">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
