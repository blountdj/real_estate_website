import React from "react";
import Carousel from '../../components/carousel/carousel.jsx';
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
          <button className="button button-white-black">Sell all</button>
          <button className="button button-black-white">Buy</button>
          <button className="button button-black-white">Rent</button>
        </div>
      </div>
      <Carousel />
      <button className="button button-black-white light-grey">SEE ALL PROPERTIES</button>

    </section>
  )
};

export default featuredListings;