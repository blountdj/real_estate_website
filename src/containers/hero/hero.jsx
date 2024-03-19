import React from "react";
import Navbar from '../../components/navbar/navbar';
import Filter from '../../components/filter/filter';
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_section" id="hero">
      <Navbar />
      <div className="bg_container"></div>
      <div className="hero_section_text">
        <h1>premium home agents</h1>
        <p>We are Monserrate, the premium and independent real estate agency in Valencia.
            We provide you with properties in the most exclusive neighborhoods of Valencia,
            residential areas, and high standing developments in the metropolitan area</p>
      </div>
      <Filter />
    </div>
  )
};

export default Hero;