import { useState, useRef } from "react";
import { FaHome, FaTools, FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom"; // <-- import useLocation
import { useAuth } from "./Auth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logged, logout } = useAuth();
  const menuRef = useRef();
  const location = useLocation(); 

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  // Derive active tab from the current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/coding")) return "coding";
    if (path.startsWith("/contact")) return "contact";
    if (path.startsWith("/projects")) return "projects";
    if (path.startsWith("/login")) return "login";
    return ""; // default none
  };

  const activeTab = getActiveTab();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <h1>Thanuja</h1>

      <MdOutlineMenu
        onClick={openMenu}
        style={{ fontSize: 30 }}
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
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
            borderBottom: activeTab === "home" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("home")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/" className="color">
            {hoveredItem === "home" ? (
              <FaHome style={{ fontSize: 25 }} />
            ) : (
              "Home"
            )}
          </Link>
        </li>

        {/* About */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: activeTab === "about" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("about")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/about" className="color">
            {hoveredItem === "about" ? (
              <MdPerson style={{ fontSize: 25 }} />
            ) : (
              "About Me"
            )}
          </Link>
        </li>

        {/* Coding */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: activeTab === "coding" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("coding")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/coding" className="color">
            {hoveredItem === "coding" ? (
              <FaTools style={{ fontSize: 25 }} />
            ) : (
              "Coding"
            )}
          </Link>
        </li>

        {/* Contact */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: activeTab === "contact" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("contact")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/contact" className="color">
            {hoveredItem === "contact" ? (
              <FaPhoneAlt style={{ fontSize: 25 }} />
            ) : (
              "Contact"
            )}
          </Link>
        </li>

        {/* Projects */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: activeTab === "projects" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("projects")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/projects" className="color">
            {hoveredItem === "projects" ? (
              <FaTools style={{ fontSize: 25 }} />
            ) : (
              "Projects"
            )}
          </Link>
        </li>

        {/* Login/Logout */}
        <li
          style={{
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
            borderBottom: activeTab === "login" ? "2px solid #f1356d" : "none",
          }}
          onMouseEnter={() => setHoveredItem("login")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {logged ? (
            <div onClick={handleLogout} style={{ color: "white" }}>
              {hoveredItem === "login" ? (
                <IoIosLogIn style={{ fontSize: 25 }} />
              ) : (
                "Logout"
              )}
            </div>
          ) : (
            <Link to="/login" className="color">
              {hoveredItem === "login" ? (
                <IoIosLogIn style={{ fontSize: 25 }} />
              ) : (
                "Login"
              )}
            </Link>
          )}
        </li>
        {logged && (
          <li style={{ color: "gray", textAlign: "center" }}>
            {user.role}
          </li>
        )}
      </ul>

      <div className="nav-connect">
        <Link to="/contact" className="color">
          Connect with me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
