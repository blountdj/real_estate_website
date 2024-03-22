import React from "react";
import "./locations.css";
import {   
  los_monasterios,
  alfinach,
  monte_picayo,
  valencia,
  other_urbanisations, 
  controller_left,
  controller_right
} from './imports';

const Locations = () => {

  const locations = [
    {"title": "Los Monasterios", "img": los_monasterios},
    {"title": "Alfinach", "img": alfinach},
    {"title": "Monte Picayo", "img": monte_picayo},
    {"title": "Valencia", "img": valencia},
    {"title": "Other Urbanisations", "img": other_urbanisations}
  ]

  const locationsElements = locations.map(location => (
      <div key={location.title} className="locations_img_container">
          <img className="location_img" src={location.img} alt={location.title} />
          <h3 className="location_img_text">{location.title}</h3>
    </div>
));

  return (
    <div className="locations flex-center flex-column" id="locations">
        <h2 className="locations_h2">locations</h2>
        <p className="locations_p">Exclusive properties in the best areas of Valencia and surroundings. We find the right place for you in the best locations.</p>
        <div className="locations_imgs_row flex-center">
          <div className="locations_controller-left">
          <img className="left_arrow" src={controller_left} alt="left arrow" />
          </div>
          <div className="location_elements ">
            {locationsElements}
            </div>
          <div className="locations_controller-right">
          <img className="right_arrow" src={controller_right} alt="right arrow" />
          </div>
        </div>
    </div>
  )
};

export default Locations;