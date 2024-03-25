import React from "react";
import "./why_block.scss";


const WhyBlock = ({ title, image, text }) => {
  return (
    <div className="whyBlock" id="whyBlock">
        <img className="whyBlock_img" src={image} alt="img" />
        <div className="whyBlock_text flex-column">
          <h3 className="whyBlock_text_h3">{title}</h3>
          <p className="whyBlock_text_p">{text}</p>
        </div>
    </div>
  )
};

export default WhyBlock;