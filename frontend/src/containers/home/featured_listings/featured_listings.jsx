import React from "react";
import PropertiesCarousel from '../../../components/propertiesCarousel/propertiesCarousel.jsx';
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./featured_listings.scss";

import propertyDict from "../../../data/propertyDict.jsx";
import PropertyBlock from "../../../components/property_block/property_block.jsx";
import EmblaCarousel from "../../../components/EmblaCarousel/EmblaCarousel.jsx";

const featuredListings = () => {
  
  const isVisible = useScrollVisibility('.featured_listings_container');


  const propertyArray = Object.entries(propertyDict);
  const carouselElements = propertyArray.map(([key, value], index) =>  (
              <PropertyBlock index={index} page={'home'} property={value} currentImageIndex={index}  />
  )
  )

  const OPTIONS = {'align': 'start'}

  return (
    <section className="featured_listings flex-center flex-center-column" id="featured_listings">
      <div className={`featured_listings_container ${isVisible ? 'visible' : ''}`}>
        <h2 className="featured_listings_h2">featured listings</h2>
        <p className="featured_listings_p">Our houses are synonymous of well-being, comfort, and quality of life. In our portfolio you
will find luxury properties for sale and for rent in Valencia, with excellent locations, and with
designs and services that make them truly unique and special.</p>
        <div className="btns_container flex-center">
          <button className="featured_listings_button black">Sell all</button>
          <button className="featured_listings_button white">Buy</button>
          <button className="featured_listings_button white">Rent</button>
        </div>
      </div>
      <PropertiesCarousel page="home" />
      <button className="featured_listings_button white" onClick={() => window.location.href = '/properties'}>SEE ALL PROPERTIES</button>
      Embla Carousel:
      <EmblaCarousel options={OPTIONS} elements={carouselElements} />

    </section>
  )
};

export default featuredListings;