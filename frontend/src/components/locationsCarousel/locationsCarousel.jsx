import React, { useState, useEffect } from 'react';
import "./locationsCarousel.scss";
import {   
  los_monasterios,
  alfinach,
  monte_picayo,
  valencia,
  other_urbanisations,
  controller_left,
  controller_right } from './imports';


const LocationsCarousel = ({page}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
      setCurrentImageIndex((currentImageIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentImageIndex((currentImageIndex - 1));
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const carouselWidth = screenWidth * 0.90;
    const gap = carouselWidth * 0.0133;

    console.log('screenWidth', screenWidth)
    console.log('carouselWidth', carouselWidth)
    console.log((carouselWidth / 4)  + (gap / 3))

    const translateValue = `translateX(calc(${-currentImageIndex} * ${(carouselWidth / 4) + (gap/3)}px))`;
    
    const locations = [
      {"title": "Los Monasterios", "img": los_monasterios},
      {"title": "Alfinach", "img": alfinach},
      {"title": "Monte Picayo", "img": monte_picayo},
      {"title": "Valencia", "img": valencia},
      {"title": "Other Urbanisations", "img": other_urbanisations}
    ]
  
    const carouselElements = locations.map((location, index) => (
        <div key={location.title} className="locations_element" style={{transform: translateValue}}>
  
          <div className="locations_element_img_container">
            <img className="locations_element_img_container_img" src={location.img} alt={location.title} />
          </div>
     
          <div className="locations_element_text_container">
            <div className="locations_element_text_container_h3_container">
              <h3 className="locations_element_text_container_text">{location.title}</h3>
            </div>
            <button className="locations_element_text_container_button" onClick={() => window.location.href = '/properties'}>SEE PROPERTIES</button>
          </div>
        </div>
  ));

  const left_arrow = currentImageIndex !== 0 
    ? <img className="locations_carousel_controller_arrow" src={controller_left} onClick={handlePrev} alt="left arrow" /> 
    : "";

  const right_arrow = currentImageIndex + 4 !== carouselElements.length 
    ? <img className="locations_carousel_controller_arrow" src={controller_right} onClick={handleNext} alt="right arrow" />
    : "";

  return (
    <div className="locations_carousel" id="carousel">
        
        <div className="locations_carousel_controller">
          {left_arrow}
        </div>

      <div className="locations_carousel_center">
        {carouselElements}
      </div>

        <div className="locations_carousel_controller">
          {right_arrow}
        </div>

    </div>
  )
};

export default LocationsCarousel;