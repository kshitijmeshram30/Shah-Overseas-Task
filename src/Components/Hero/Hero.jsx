import React from "react";
import "./Hero.css";
import hero2 from "../../assets/hero2.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <p className="hero-text-one">Never stop learning</p>
        <h1 className="hero-text-two">
          Where Education
          <br /> meets Tech & <br />
          Business thrives
        </h1>
        <button className="btn2">Explore Path</button>
      </div>
      <img src={hero2} alt="" className="hero2"></img>
    </div>
  );
};

export default Hero;
