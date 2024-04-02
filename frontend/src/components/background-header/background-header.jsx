import React from "react";
import useScrollVisibility from '../../utilities/useScrollVisibility';
import "./background-header.scss";

const BackgroundHeader = ({ page, section, h1_type, h1 }) => {

  const isVisible = useScrollVisibility(`.${page}_background_header_text_h1`);

  return (
    <section className={`background_header ${section}`} id="background_header">
      <div className="bg_container"></div>
      <div className="background_header_text flex-center flex-center-column">
      <h1 className={`background_header_text_h1 ${page}_background_header_text_h1 ${h1_type} ${isVisible ? 'visible' : 'notVisible'}`}>{h1}</h1>
      </div>
    </section>
  )
};

export default BackgroundHeader;