import React from "react";
import useScrollVisibility from '../../utilities/useScrollVisibility';
import "./background-header.scss";

const BackgroundHeader = ({ page, section, h1_type, h1 }) => {

  const isVisible = useScrollVisibility(`.${page}_background_header_text_h1`);

  return (
    // DONT DO `${page}_background_header INSTEAD `background_header ${page}
    <section className={`${page}_background_header background_header ${section}`} id="background_header">
      <div className={`${page}_bg_container bg_container`}></div>
      <div className={`${page}_background_header_text background_header_text flex-center flex-center-column`}>
      <h1 className={`${page}_background_header_text_h1 background_header_text_h1 ${page}_background_header_text_h1 ${h1_type} ${isVisible ? 'visible' : 'notVisible'}`}>{h1}</h1>
      </div>
    </section>
  )
};

export default BackgroundHeader;