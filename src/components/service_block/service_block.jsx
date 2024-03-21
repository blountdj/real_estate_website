import React from "react";
import "./service_block.css";


const ServiceBlock = ({ title, side, button, image, image_alt }) => {

  const color = side === "l" ? "button-white" : "button-black"
  const buttonElement = button === "true" ? <button className={`button ${color}`}>i'm interested</button> : ""

  return (
    <div className={`serviceBlock ${side}`} id="serviceBlock">

      <div className={`serviceBlock_text flex-column ${side}`}>
        <div className="serviceBlock_text_holder">
          <h3 className={`serviceBlock_text_h3 ${side}`}>{title}</h3>
        </div>
        <p className={`serviceBlock_text_p`}>We are experts in the sale and rental of premium properties. We also offer our clients the best options to monetize apartments, houses, land, and any other asset.</p>
        {buttonElement}
      </div>

      <div className="serviceBlock_image">
        <img className="serviceBlock_image_image"src={image} alt={image_alt} />
      </div>

    </div>
  )
};

export default ServiceBlock;