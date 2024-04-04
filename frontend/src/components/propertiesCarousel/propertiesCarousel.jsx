import React, { useState, useEffect } from "react";
import PropertyBlock from "../property_block/property_block";
import "./propertiesCarousel.scss";
import { controller_left, controller_right } from './imports';
import propertyDict from "../../data/propertyDict";

const PropertiesCarousel = ({page}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    
    console.log('screenWidth:', screenWidth, typeof screenWidth) 

    let rightArrowVar;
    if (parseInt(screenWidth) >= 700 ) {
      rightArrowVar = 2;
      console.log('>= 800') 
    } else if (parseInt(screenWidth) >= 1000) {
      rightArrowVar = 3;
      console.log('>= 1000') 
    } else {
      rightArrowVar = 1;
      console.log('else')
    }
    console.log('rightArrowVar:', rightArrowVar) 

    console.log(`carouselElements.length: ${carouselElements.length} - rightArrowVar: ${rightArrowVar} - currentImageIndex: ${currentImageIndex}`)
  const left_arrow = currentImageIndex !== 0 
    ? <img className="properties_carousel_controller_arrow" src={controller_left} onClick={handlePrev} alt="left arrow" /> 
    : "";

  const right_arrow = currentImageIndex + rightArrowVar !== carouselElements.length 
    ? <img className="properties_carousel_controller_arrow" src={controller_right} onClick={handleNext} alt="right arrow" />
    : "";

    console.log(right_arrow)

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