import React from "react";
import "./background-header.scss";

const BackgroundHeader = ({ section, h1_type, h1 }) => {

  return (
    <section className={`background_header ${section}`} id="background_header">
      <div className="bg_container"></div>
      <div className="background_header_text flex-center flex-center-column">
      <h1 className={`background_header_text_h1 ${h1_type}`}>{h1}</h1>
      </div>
    </section>
  )
};

export default BackgroundHeader;