import React from "react";
// import LocationsCarousel from "../../../components/locationsCarousel/locationsCarousel"; 
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import EmblemCarouselLocations from "../../../components/locationsCarousel/emblemCarouselLocations";
import "./locations.scss";


const Locations = () => {

  const isVisible = useScrollVisibility('.locations_top');

  return (
    <section className="locations" id="locations">

      <div className={`locations_top ${isVisible ? 'visible' : ''}`}>
        <h2 className="locations_top_h2">locations</h2>
        <p className="locations_top_p">Exclusive properties in the best areas of Valencia and surroundings. We find the right place for you in the best locations.</p>
      </div>

      {/* <LocationsCarousel page="home" /> */}
 
      <EmblemCarouselLocations />

    </section>
  )
};

export default Locations;