import React from "react";
import "./carousel.css";
import { property01, property02, property03, property04, property05, location_icon, size_icon, bed_icon, shower_icon, tag_icon, controller_left, controller_right } from './imports';

const Carousel = () => {

    const properties = [
        {"title": "Gorgeous design house and landscape", "location": "Sagunto / Sagunt", "id": "A129", "description": "390 sqm House", "bedrooms": 4, "bathrooms": 4, "img": property01},
        {"title": "Outstanding villa at El Plantio, La Canada", "location": "Paterna", "id": "V772", "description": "690 sqm House", "bedrooms": 5, "bathrooms": 6, "img": property02, "price": 1900000},
        {"title": "Exclusive listing with beautiful views", "location": "Puzol / Pucol", "id": "VA122", "description": "610 sqm House", "bedrooms": 6, "bathrooms": 6, "img": property03, "price": 3600000},
        {"title": "Stunning chateau, in the Sierra Calderona", "location": "Naquera", "id": "F106", "description": "652 sqm House", "bedrooms": 6, "img": property04},
        {"title": "Duplex penthouse facing the City of Arts", "location": "Valencia", "id": "VA202", "description": "198 sqm House", "bedrooms": 4, "bathrooms": 3, "img": property05, "price": 990000},
    ]

    // Use the map method to generate an array of JSX elements
    const propertyElements = properties.map(property => (
        <div key={property.id} className="property">
            <div className="img_container">
                <span className="property_price">{property?.price}</span>
                <img className="property_img" src={property.img} alt={property.title} />
            </div>
            <div className="property_container">
                <h3 className="property_title">{property.title}</h3>
                <div className="middle_line"><img className="property_icon location_icon" src={location_icon} alt="location icon" /><span className="property-text space-big">{property.location}</span><img className="property_icon tag_icon" src={tag_icon} alt="tag icon" /><span className="property-text space-little">{property.id}</span></div>
                <div className="bottom_line"><img className="property_icon size_icon" src={size_icon} alt="size icon" /><span className="property-text space-little">{property.description}</span><img className="property_icon bed_icon" src={bed_icon} alt="bed icon" /><span className="property-text space-little">{property?.bedrooms}</span><img className="property_icon shower_icon" src={shower_icon} alt="shower icon" /><span className="property-text">{property?.bathrooms}</span></div>
            </div>
        </div>
    ));

  return (
    <div className="carousel" id="carousel">
        
        <div className="controller-left flex-center">
         <img className="left_arrow" src={controller_left} alt="left arrow" />
        </div>
        <div className="carousel-center">
            {propertyElements}
        </div>
        <div className="controller-left flex-center">
        <img className="right_arrow" src={controller_right} alt="right arrow" />
        
        </div>
    </div>
  )
};

export default Carousel;