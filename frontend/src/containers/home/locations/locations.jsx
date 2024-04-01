import React from "react";
import "./locations.scss";
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
          <img className="locations_img" src={location.img} alt={location.title} />
          <h3 className="locations_img_text">{location.title}</h3>
    </div>
));

  return (
    <section className="locations flex-center flex-center-column" id="locations">
        <div className="locations_top">
          <h2 className="locations_top_h2">locations</h2>
          <p className="locations_top_p">Exclusive properties in the best areas of Valencia and surroundings. We find the right place for you in the best locations.</p>
        </div>
        <div className="locations_imgs_row flex-center">
          <div className="locations_controllers">
          <img className="left_arrow" src={controller_left} alt="left arrow" />
          </div>
          <div className="locations_elements ">
            {locationsElements}
            </div>
          <div className="locations_controllers">
          <img className="right_arrow" src={controller_right} alt="right arrow" />
          </div>
        </div>
    </section>
  )
};

export default Locations;