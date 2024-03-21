import React from "react";
import "./why_block.css";


const WhyBlock = ({ title, image, text }) => {
  return (
    <div className="whyBlock" id="whyBlock">
        <img className="why_img" src={image} alt="img" />
        <div className="why_text flex-column">
          <h3 className="why_text_h3">{title}</h3>
          <p className="why_text_p">{text}</p>
        </div>
    </div>
  )
};

export default WhyBlock;