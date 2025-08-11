import React from "react";
import './Footer.css'
import { TbBrandLeetcode } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer=()=>{
    return(
        <div id="footer">
            <hr/>
            <div className="footer">
                <div className="copy">copy right &copy;</div>
                <div className="name">Kondaka Thanuja</div>
                <div className="mail">#kondakathanuja@gmail.com</div>
            </div>
            <div className="logo">
                <a 
                   href="https://leetcode.com/u/Thanuja-22/"
                   target="_blank"
                   rel="noreferrer"
                   style={{ fontSize: "40px", color: "white" }}
                   >
                  <TbBrandLeetcode />
                </a>
                <a 
                   href="https://www.linkedin.com/in/kondaka-thanuja/"
                   target="_blank"
                   rel="noreferrer"
                   style={{ fontSize: "40px", color: "white" }}
                   >
                  <FaLinkedin />
                </a>
                <a 
                   href="https://github.com/Kondaka-Thanuja"
                   target="_blank"
                   rel="noreferrer"
                   style={{ fontSize: "40px", color: "white" }}
                   >
                  <FaGithub />
                </a>
                
                 
            </div>
            

        </div>
        
        

    );

}
export default Footer