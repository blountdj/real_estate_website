import React from "react";
import "./sell_property.css";



const SellProperty = () => {

  return (
    <div className="sell_property" id="sell_property">
      <div className="sell_property_container">
          <h2 className="sell_property_container_h3">DO YOU WANT TO SELL YOUR PROPERTY?</h2>
          <p className="sell_property_container_p">At Monserrate we are experts in the management of buying and selling properties in Valencia and surroundings. Our experience in the sector allows us to have the necessary tools and knowledge to guide our clients in their investments in real estate.</p>
          <p className="sell_property_container_p">If you are thinking of selling a property and have doubts about the right time to do it, call us! We will value your property for free, and we will advise you throughout the process.</p>
          <button className="sell_property_container_btn button">i want to sell my property</button>
        </div>
    </div>
  )
};

export default SellProperty;