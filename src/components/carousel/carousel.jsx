import React from "react";
import logo from '../../assets/logo.svg'
import "./carousel.css";
import { property01, property02, property03, property04, property05, location_icon, size_icon, bed_icon, shower_icon } from './imports';

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
            <div className="container">
                <h3 className="property_title">{property.title}</h3>
                <div className="middle_line"><img className="icon location_icon" src={location_icon} alt="location icon" /><span>{property.location}</span><img className="icon tag_icon" src={location_icon} alt="tag icon" /><span>{property.id}</span></div>
                <div className="bottom_line"><img className="icon size_icon" src={size_icon} alt="size icon" /><span>{property.description}</span><img className="icon bed_icon" src={bed_icon} alt="bed icon" /><span>{property?.bedrooms}</span><img className="icon shower_icon" src={shower_icon} alt="shower icon" /><span>{property?.bathrooms}</span></div>
            </div>
        </div>
    ));

  return (
    <div className="carousel" id="carousel">
        
        <div className="controller-left">
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_325_5670)"><circle opacity="0.8" cx="31" cy="31" r="21" transform="rotate(-180 31 31)" fill="white"></circle><path d="M34.8184 40.5455L25.2729 31L34.8184 21.4546" stroke="#ED1744"></path></g><defs><filter id="filter0_d_325_5670" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_325_5670"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_325_5670" result="shape"></feBlend></filter></defs></svg>
        </div>
        {propertyElements}
        <div className="controller-right">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_325_5667)"><circle opacity="0.8" cx="31" cy="31.0001" r="21" fill="white"></circle><path d="M27.1819 21.4546L36.7273 31L27.1819 40.5455" stroke="#ED1744"></path></g><defs><filter id="filter0_d_325_5667" x="0" y="6.10352e-05" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_325_5667"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_325_5667" result="shape"></feBlend></filter></defs></svg>
        </div>
    </div>
  )
};

export default Carousel;