import React from "react";
import PropertyBlock from "../property_block/property_block";
import "./carousel.scss";
import { property01, property02, property03, property04, property05, controller_left, controller_right } from './imports';

const Carousel = () => {

    const properties = [
        {"title": "Gorgeous design house and landscape", "location": "Sagunto / Sagunt", "id": "A129", "description": "390 sqm House", "bedrooms": 4, "bathrooms": 4, "img": property01},
        {"title": "Outstanding villa at El Plantio, La Canada", "location": "Paterna", "id": "V772", "description": "690 sqm House", "bedrooms": 5, "bathrooms": 6, "img": property02, "price": 1900000},
        {"title": "Exclusive listing with beautiful views", "location": "Puzol / Pucol", "id": "VA122", "description": "610 sqm House", "bedrooms": 6, "bathrooms": 6, "img": property03, "price": 3600000},
        {"title": "Stunning chateau, in the Sierra Calderona", "location": "Naquera", "id": "F106", "description": "652 sqm House", "bedrooms": 6, "img": property04},
        {"title": "Duplex penthouse facing the City of Arts", "location": "Valencia", "id": "VA202", "description": "198 sqm House", "bedrooms": 4, "bathrooms": 3, "img": property05, "price": 990000},
    ]


    // Use the map method to generate an array of JSX elements
    const propertyElements = properties.map(property => {

        return (
                    <PropertyBlock page="home" property={property} />
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