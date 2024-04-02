import React from "react";
import PropertiesCarousel from '../../../components/propertiesCarousel/propertiesCarousel.jsx';
import "./featured_listings.scss";

const featuredListings = () => {
  

  return (
    <section className="featured_listings flex-center flex-center-column" id="featured_listings">
      <div className="featured_listings_container flex-center flex-center-column">
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

    </section>
  )
};

export default featuredListings;