import React from "react";
import PropertyBlock from "../property_block/property_block";
import "./carousel.scss";
import { property01, property02, property03, property04, property05, controller_left, controller_right } from './imports';
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
        
        <div className="controller flex-center">
         <img className="left_arrow" src={controller_left} alt="left arrow" />
        </div>
        <div className="carousel-center">
            {propertyElements}
        </div>
        <div className="controller flex-center">
        <img className="right_arrow" src={controller_right} alt="right arrow" />
        
        </div>
    </div>
  )
};

export default Carousel;