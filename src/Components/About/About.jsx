import React from "react";
import './About.css'
import me from '../../assets/me.jpg'
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiBootstrap } from "react-icons/di";



const About=()=>{
    return(
        <div className="about" id="about">
            <div className="about-title">
                <h1>About me</h1>
                <hr/>
            </div>
          
            <div className="about-sections">
                <div className="about-left">
                    <img className="image" src={me} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Thanuja, a driven and enthusiastic final-year Electrical and Electronics Engineering student with a strong interest in frontend development. I have hands-on experience with Python, HTML, JavaScript, and React, and I enjoy creating clean, responsive, and user-friendly web interfaces. My academic background in engineering has helped me develop a solid problem-solving mindset and analytical thinking.</p>
                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React Js </p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript </p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Python </p><hr style={{width:"50%"}}/></div>
                        <div className="icons">
            <RiReactjsFill style={{color:"green", fontSize:"50px"}}/>
            <FaHtml5 style={{color:"green", fontSize:"50px"}}/>
            <FaCss3Alt style={{color:"green", fontSize:"50px"}}/>
            <IoLogoJavascript style={{color:"green", fontSize:"50px"}}/>
            <DiBootstrap style={{color:"green", fontSize:"50px"}}/>
            
            </div>
                    </div>
                    
                </div>
            </div>
            
            

        </div>
    );

}
export default About