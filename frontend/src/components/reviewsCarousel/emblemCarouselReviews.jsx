import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import reviewsData from '../../data/reviewsDict';
import star_yellow from '../../assets/icons/star_yellow.svg';
import star_grey from '../../assets/icons/star_grey.svg';
import './emblemCarouselReviews.scss';


const EmblemCarouselReviews = () => {

  const avatarColors = ['#ff5733', '#4997a8', '#5733ff', '##4488d1', '#7e57c2', '#cabe18']; // List of available colors

  const carouselElements = reviewsData.map((review, index) => {

    let starsElem = [];
    for (let i = 0; i < review.stars; i++) {
      if (i < review.stars) {
      starsElem.push(<img key={i} className="star_icon" src={star_yellow} alt="yellow star" />)
      } else {
        starsElem.push(<img key={i} className="star_icon" src={star_grey} alt="yellow grey" />)
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

  const OPTIONS = {'align': 'start'}

  return (
    <EmblaCarousel page="reviews" options={OPTIONS} elements={carouselElements} />
  )
}

export default EmblemCarouselReviews
