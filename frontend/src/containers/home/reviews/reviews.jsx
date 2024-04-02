import React from "react";
import ReviewsCarousel from "../../../components/reviewsCarousel/reviewsCarousel";
import useScrollVisibility from '../../../utilities/useScrollVisibility';
import "./reviews.scss";

const Reviews = () => {

  const isVisible = useScrollVisibility('.reviews');

  return (
    <section className={`reviews ${isVisible ? 'visible' : ''}`} id="reviews">

        <h2 className="reviews_h2">reviews</h2>

        <div className="reviews_container">
          <p className="reviews_p">Are you thinking of selling, buying, or renting an apartment in Valencia? </p>
          <p className="reviews_p">Monserrate can be your best ally to cover your needs.</p>
          <p className="reviews_p">These are the opinions of our customers.</p>
        </div>
        
        <ReviewsCarousel page="home" />

    </section>
  )
};

export default Reviews;