import React from "react";
import "./service_block.scss";


const ServiceBlock = ({ page, title, text, side, button, button_text, image }) => {

  const buttonElement = button === "true" ? <button className={`${page}_serviceBlock_button ${side}`}>{button_text}</button> : ""

  return (
    <div className={`${page}_serviceBlock ${side}`} id="serviceBlock">

      <div className={`${page}_serviceBlock_text flex-column ${side}`}>
        <div className={`${page}_serviceBlock_text_holder`}>
          <h3 className={`${page}_serviceBlock_text_h3 ${side}`}>{title}</h3>
        </div>
        <p className={`${page}_serviceBlock_text_p`}>{text}</p>
        {buttonElement}
      </div>

      <div className={`${page}_serviceBlock_image`}>
        <img className={`${page}_serviceBlock_image_image`} src={image} alt={`${title} image`} />
      </div>

    </div>
  )
};

export default ServiceBlock;