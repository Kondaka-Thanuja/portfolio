import React from "react";
import './Coding.css'
import { TbBrandLeetcode } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Coding=()=>{
    return(
        <div  id="coding">
            <div className="coding-title">
                <h1>Coding & TechStack</h1>
                <hr/>
            </div>
            <div className="coding">
                <div className="code">
                    <div><TbBrandLeetcode style={{color:"gold", fontSize:"50px"}} /> </div>
                    <div className="code-inner">
                        <p>Leetcode</p>
                        <a href="https://leetcode.com/u/Thanuja-22/" target="_blank" rel="noreferrer">Visit Profile</a>
                    </div>
                </div>
                 <div className="code">
                <div><FaLinkedin style={{color:"blue", fontSize:"50px"}} /> </div>
                    <div className="code-inner">
                        <p>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/kondaka-thanuja/" target="_blank" rel="noreferrer">Visit Profile</a>
                    </div>
            </div>

            <div className="code">
                <div><FaGithub  style={{color:"white", fontSize:"50px"}} /> </div>
                    <div className="code-inner">
                        <p>GitHub</p>
                        <a href="https://github.com/Kondaka-Thanuja" target="_blank" rel="noreferrer">Visit Profile</a>
                    </div>
                
            </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    <p>Always Curious & Learning</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>150+</h1>
                    <p>Problems sloved in Leetcode</p>
                </div>
            </div>

           

            


        </div>

    );

}
export default Coding