import React from "react";
import Filter from '../../../components/filter/filter';
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero_section" id="hero">
      <div className="bg_container"></div>
      <div className="hero_section_text flex-center flex-center-column">
        <h1 className="hero_section_text_h1">premium home agents</h1>
        <p className="hero_section_text_p">We are Monserrate, the premium and independent real estate agency in Valencia.
            We provide you with properties in the most exclusive neighborhoods of Valencia,
            residential areas, and high standing developments in the metropolitan area</p>
      </div>
      <Filter />
    </section>
  )
};

export default Hero;