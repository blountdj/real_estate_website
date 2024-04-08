import React, { useState, useEffect } from 'react';
import Filter from '../../../components/filter/filter';
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./hero.scss";


const Hero = () => {

  const isVisible = useScrollVisibility('.hero_section_text');

  return (
    <section className="hero_section" id="hero">
      <div className="bg_container"></div>
      <div className={`hero_section_text ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero_section_text_h1">premium home agents</h1>
        <p className="hero_section_text_p">We are Monserrate, the premium and independent real estate agency in Valencia.
            We provide you with properties in the most exclusive neighborhoods of Valencia,
            residential areas, and high standing developments in the metropolitan area</p>
      </div>
      <Filter page="home" more_filters="false" />

    </section>
  )
};

export default Hero;