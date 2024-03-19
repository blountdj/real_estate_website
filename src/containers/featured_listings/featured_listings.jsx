import React from "react";
// import Article from '../../components/article/Article';
// import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import "./featured_listings.css";

const featuredListings = () => {
  return (
    <div className="featured_listings" id="featured_listings">
        <h2>featured listings</h2>
        <p>Our houses are synonymous of well-being, comfort, and quality of life. In our portfolio you
will find luxury properties for sale and for rent in Valencia, with excellent locations, and with
designs and services that make them truly unique and special.</p>
      <div className="btns_container">
        <button className="btn black">Sell all</button>
        <button className="btn white">Buy</button>
        <button className="btn white">Rent</button>
      </div>
      <button className="btn white light-grey">SEE ALL PROPERTIES</button>
    </div>
  )
};

export default featuredListings;