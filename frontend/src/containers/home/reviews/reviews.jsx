import React from "react";
import star_yellow from '../../../assets/icons/star_yellow.svg';
import star_grey from '../../../assets/icons/star_grey.svg';
import reviewsData from "../../../data/reviewsDict";
import "./reviews.scss";


const Reviews = () => {

  const avatarColors = ['#ff5733', '#4997a8', '#5733ff', '##4488d1', '#7e57c2', '#cabe18']; // List of available colors
  
  const reviewItems = reviewsData.map(review => {

    let starsElem = [];
    for (let i = 0; i < review.stars; i++) {
      if (i < review.stars) {
      starsElem.push(<img className="star_icon" src={star_yellow} alt="yellow star" />)
      } else {
        starsElem.push(<img className="star_icon" src={star_grey} alt="yellow grey" />)
      }
    }

    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
    const avatarStyle = {
      backgroundColor: randomColor, // Set background color
    };

    return (
    <div key={review.name} className="reviews_review flex-column">

      <div className="reviews_review_top_row">
        <div className="reviews_review_top_row_avatar flex-center" style={avatarStyle}>{review.name.slice(0,1)}</div>
        <div>
          <p className="reviews_review_top_row_p name">{review.name}</p>
          <p className="reviews_review_top_row_p date">{review.date}</p>
          </div>
      </div>

      <div className="reviews_review_stars">
        {starsElem}
      </div>

      <div className="reviews_review_review">
        {review.review}
      </div>

    </div>
  )})

  return (
    <section className="reviews flex-center flex-column" id="reviews">
        <h2 className="reviews_h2">reviews</h2>
        <div className="container flex-center">
          <p className="reviews_p">Are you thinking of selling, buying, or renting an apartment in Valencia? </p>
          <p className="reviews_p">Monserrate can be your best ally to cover your needs.</p>
          <p className="reviews_p">These are the opinions of our customers.</p>
        </div>
        <div className="reviews_carousel flex-center">
          <div className="reviews_carousel_arrow flex-center">{"<"}</div>
          <div className="reviews_carousel_items">
            {reviewItems}
          </div>
          <div className="reviews_carousel_arrow flex-center">{">"}</div>
        </div>
    </section>
  )
};

export default Reviews;