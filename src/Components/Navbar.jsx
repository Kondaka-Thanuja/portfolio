
import  { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";




import './Navbar.css';

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const [hoveredItem, setHoveredItem] = useState(null); // null means no hover
  const isActive = (item) => menu === item;


  return (
    <div className="navbar">
      <h1 >Thanuja</h1>
      <ul className="nav-menu">
        <li 
          style={{ cursor: "pointer", width: "100px", textAlign: "center",borderBottom: isActive("home") ? "2px solid #f1356d" : "none", }}
          onMouseEnter={() => setHoveredItem("home")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={()=>setMenu("home")}
        >
          
          <AnchorLink offset={50} href="#hero" className="color">{hoveredItem === "home" ? <FaHome style={{ fontSize: 25 }} /> : "Home"}</AnchorLink>
        </li>

        <li
          style={{ cursor: "pointer", width: "100px", textAlign: "center", borderBottom: isActive("about") ? "2px solid #f1356d" : "none",
                }}
          onMouseEnter={() => setHoveredItem("about")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={()=>setMenu("about")}
        >
          <AnchorLink  offset={50} href="#about" className="color">
          {hoveredItem === "about" ? <MdPerson style={{ fontSize: 25 }} /> : "About Me"}
          </AnchorLink>
        </li>
        <li 
         style={{ cursor: "pointer", width: "100px", textAlign: "center",borderBottom: isActive("coding") ? "2px solid #f1356d" : "none", }}
         onMouseEnter={() => setHoveredItem("coding")}
         onMouseLeave={() => setHoveredItem(null)}
         onClick={()=>setMenu("coding")}
         >
         <AnchorLink offset={50} href="#coding" className="color">{hoveredItem === "coding" ? <FaTools style={{ fontSize: 25 }} /> : "Coding"}</AnchorLink>
        </li>
        
         <li style={{cursor: "pointer",width:'100px', textAlign:'center',paddingBottom:"4px",borderBottom: isActive("contact") ? "2px solid #f1356d" : "none", }}
          onMouseEnter={() => setHoveredItem("contact")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={()=>setMenu("contact")}
        >
          <AnchorLink offset={50} href="#contact" className="color"> 
        {hoveredItem==="contact" ? <FaPhoneAlt style={{fontSize:25}} />:"contact"}
        </AnchorLink></li>
        <li 
        >
       </li>



      </ul>
      <div 
      
           className="nav-connect"> <AnchorLink href="#contact">Connect with me</AnchorLink>
</div>
    </div>
  );
};

export default Navbar;
