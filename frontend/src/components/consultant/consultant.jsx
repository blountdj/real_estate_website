import React from "react";

import "./consultant.scss";

const Consultant = ({ name, title, photo }) => {


  return (
    <div className="consultant" id="consultant">
      <img className="consultant_img" src={photo} />
      <h3 className="consultant_name">{name}</h3>
      <p className="consultant_title">{title}</p>
    </div>
  )
};

export default Consultant;