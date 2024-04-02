import React from "react";
import WhyBlock from '../../../components/why_block/why_block';
import { why01, why02, why03, why04 } from "./imports";
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./why.scss";

const Why = () => {

  const isVisibleText = useScrollVisibility('.why_text');
  const isVisibleComponent = useScrollVisibility('.why_components');
  const isVisibleButton = useScrollVisibility('.why_button');

  return (
    <section className="why" id="why">
        <div className={`why_text ${isVisibleText ? 'visible' : ''}`}>
          <h2 className="why_h2">WHY MONSERRATE?</h2>
          <p className="why_p">Working with expert in Valencia, such as Monserrate’s premium home agents, has many advantages. Some of them are:</p>
        </div>
        <div className={`why_components ${isVisibleComponent ? 'visible' : ''}`}>
          <WhyBlock title="qualified advisors and consultants" image={why01} text="Buying, selling, or renting a house with Monserrate is easy: our consultants are qualified professionals who understand luxury and the needs of our clients." />
          <WhyBlock title="a new type of real estate" image={why02} text="We offer an innovative vision of our sector, in which flexibility and 360º management stand out. We differentiate ourselves from the competition and reinvent ourselves as premium home agents."/>
          <WhyBlock title="we are local experts" image={why03} text="We know both the sector and the market in which we operate. We know first-hand the characteristics and prices of the locations of our properties." />
          <WhyBlock title="hosts of valencia" image={why04} text="Choosing Valencia is choosing quality of life. We introduce you and connect you with the best schools and with as many services as you need." />
        </div>
        <button className={`why_button white ${isVisibleButton ? 'visible' : ''}`}>find out more</button>
    </section>
  )
};

export default Why;