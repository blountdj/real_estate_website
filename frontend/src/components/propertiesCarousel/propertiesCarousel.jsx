import React, { useState } from "react";
import PropertyBlock from "../property_block/property_block";
import "./propertiesCarousel.scss";
import { controller_left, controller_right } from './imports';
import propertyDict from "../../data/propertyDict";

const PropertiesCarousel = ({page}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
      setCurrentImageIndex((currentImageIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentImageIndex((currentImageIndex - 1));
    };

    const propertyArray = Object.entries(propertyDict);
    const carouselElements = propertyArray.map(([key, value], index) => {

        return (
                <PropertyBlock index={index} page={page} property={value} currentImageIndex={currentImageIndex}  />
            )
    })

  const left_arrow = currentImageIndex !== 0 
    ? <img className="properties_carousel_controller_arrow" src={controller_left} onClick={handlePrev} alt="left arrow" /> 
    : "";

  const right_arrow = currentImageIndex + 3 !== carouselElements.length 
    ? <img className="properties_carousel_controller_arrow" src={controller_right} onClick={handleNext} alt="right arrow" />
    : "";

  return (
    <div className="properties_carousel" id="carousel">
        
        <div className="properties_carousel_controller flex-center">
          {left_arrow}
        </div>

      <div className="properties_carousel_center">
        {carouselElements}
      </div>

        <div className="properties_carousel_controller flex-center">
          {right_arrow}
        </div>

    </div>
  )
};

export default PropertiesCarousel;