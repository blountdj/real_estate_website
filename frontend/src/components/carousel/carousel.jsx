import React from "react";
import PropertyBlock from "../property_block/property_block";
import "./carousel.scss";
import { controller_left, controller_right } from './imports';
import propertyDict from "../../data/propertyDict";

const Carousel = () => {

    const propertyArray = Object.entries(propertyDict);
    const propertyElements = propertyArray.map(([key, value]) => {

        return (
                <PropertyBlock page="home" property={value} />
            )
    })
    

  return (
    <div className="carousel" id="carousel">
        
        <div className="carousel_controller flex-center">
          <img className="carousel_controller_arrow left" src={controller_left} alt="left arrow" />
        </div>

        <div className="carousel_center">
            {propertyElements}
        </div>

        <div className="carousel_controller flex-center">
          <img className="carousel_controller_arrow right" src={controller_right} alt="right arrow" />
        </div>

    </div>
  )
};

export default Carousel;