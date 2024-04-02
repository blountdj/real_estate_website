import React from "react";
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./real_estate.scss";


const RealEstate = () => {

  const isVisibleContainer = useScrollVisibility(`.realEstate_container`);
  const isVisibleButton = useScrollVisibility(`.realEstate_button`);

  return (
    <section className="realEstate" id="realEstate">
      <div className={`realEstate_container ${isVisibleContainer ? 'visible' : 'notVisible'}`}>
        <h2 className="realEstate_h2">REAL ESTATE IN VALENCIA</h2>
        <p className="realEstate_p">We are your premium home agents in Valencia. We offer our clients the management of their properties, as well as the search for premium homes in the best neighborhoods, developments, and residential areas.</p>
        <p className="realEstate_p">We know well the local market, and we have a large team of professionals for global and comprehensive advice on all your operations and investments in the sector.</p>
      </div>
        <button className={`realEstate_button ${isVisibleButton ? 'visible' : 'notVisible'}`} onClick={() => window.location.href = '/who_we_are'}>learn more about us</button>
    </section>
  )
};

export default RealEstate;