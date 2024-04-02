import React from "react";
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./campolivar.scss";

const Campolivar = () => {

  const isVisibleContainer = useScrollVisibility('.campolivar_container');
  const isVisibleButton = useScrollVisibility('.campolivar_button');

  return (
    <section className="campolivar" id="campolivar">
        <div className="compolivar_overlay overlay"></div>
        <div className={`campolivar_container ${isVisibleContainer ? 'visible' : ''}`}>
          <h2 className="campolivar_h2">CAMPOLIVAR 3953N: WHERE DESIGN MEETS COMFORT</h2>
          <p className="campolivar_p">Discover our luxury villas in Campolívar, designed by the renowned architect Fran Silvestre. These homes are not just a place to live; they are a statement of style and comfort. With stunning architecture and high-quality finishes, each villa is a unique space where you can enjoy life with all the comforts.</p>
        </div>
        <button className={`campolivar_button ${isVisibleButton ? 'visible' : ''}`}>campoliar 3953n</button>
    </section>
  )
};

export default Campolivar;