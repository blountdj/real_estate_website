import React from "react";
import useScrollVisibility from '../../utilities/useScrollVisibility';
import "./why_block.scss";


const WhyBlock = ({ page, index, title, image, text }) => {

  const isVisible = useScrollVisibility(`.${page}_whyBlock_${index}`);

  return (
    <div className={`${page}_whyBlock ${page}_whyBlock_${index} ${isVisible ? 'visible' : 'notVisible'}`} id="whyBlock">
        <img className={`${page}_whyBlock_img whyBlock_img`} src={image} alt="img" />
        <div className={`${page}_whyBlock_text whyBlock_text`}>
          <h3 className={`${page}_whyBlock_text_h3 whyBlock_text_h3`}>{title}</h3>
          <p className={`${page}_whyBlock_text_p whyBlock_text_p`}>{text}</p>
        </div>
    </div>
  )
};

export default WhyBlock;