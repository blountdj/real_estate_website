import React from "react";
import LocationsCarousel from "../../../components/locationsCarousel/locationsCarousel"; 
import "./locations.scss";
// import {   
  // los_monasterios,
  // alfinach,
  // monte_picayo,
  // valencia,
  // other_urbanisations, 
  // controller_left,
  // controller_right
// } from './imports';

const Locations = () => {

  return (
    <section className="locations flex-center flex-center-column" id="locations">
        <div className="locations_top">
          <h2 className="locations_top_h2">locations</h2>
          <p className="locations_top_p">Exclusive properties in the best areas of Valencia and surroundings. We find the right place for you in the best locations.</p>
        </div>

          {/* <div className="locations_elements "> */}
            <LocationsCarousel page="home" />
            {/* </div> */}
  
    </section>
  )
};

export default Locations;