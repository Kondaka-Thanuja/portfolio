import React from "react";
import './Hero.css'
import me from '../../assets/me.jpg';


const Hero=()=>{
    return(
        <div className="hero" id="hero">
            <img src={me} alt=""/>
            <h1><span>Iam Thanuja frontend developer</span> </h1>
            <p>My name is Thanuja. I'm a driven and motivated individual aiming to become a skilled developer.</p>
             <div className="hero-action ">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resume</div>
             </div>
             
        </div>
    );

}
export default Hero