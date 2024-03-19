import React from "react";
import "./locations.css";
import {   
  los_monasterios,
  alfinach,
  monte_picayo,
  valencia,
  other_urbanisations, } from './imports';

const Locations = () => {

  const locations = [
    {"title": "Los Monasterios", "img": los_monasterios},
    {"title": "Alfinach", "img": alfinach},
    {"title": "Monte Picayo", "img": monte_picayo},
    {"title": "Valencia", "img": valencia},
    {"title": "Other Urbanisations", "img": other_urbanisations}
  ]

  const locationsElements = locations.map(location => (
    <div key={location.title} className="location">
        <div className="locations_img_container">
            <img className="location_img" src={location.img} alt={location.title} />
            <h3 className="location_img_text">{location.title}</h3>
        </div>
    </div>
));

  return (
    <div className="locations" id="locations">
        <h2>locations</h2>
        <p>Exclusive properties in the best areas of Valencia and surroundings. We find the right place for you in the best locations.</p>
        <div className="locations_imgs_row">
          <div className="locations_controller-left">
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_325_5670)"><circle opacity="0.8" cx="31" cy="31" r="21" transform="rotate(-180 31 31)" fill="white"></circle><path d="M34.8184 40.5455L25.2729 31L34.8184 21.4546" stroke="#ED1744"></path></g><defs><filter id="filter0_d_325_5670" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_325_5670"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_325_5670" result="shape"></feBlend></filter></defs></svg>
          </div>
          <div className="location_elements">
            {locationsElements}
            </div>
          <div className="locations_controller-right">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_325_5667)"><circle opacity="0.8" cx="31" cy="31.0001" r="21" fill="white"></circle><path d="M27.1819 21.4546L36.7273 31L27.1819 40.5455" stroke="#ED1744"></path></g><defs><filter id="filter0_d_325_5667" x="0" y="6.10352e-05" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_325_5667"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_325_5667" result="shape"></feBlend></filter></defs></svg>
          </div>
        </div>
    </div>
  )
};

export default Locations;