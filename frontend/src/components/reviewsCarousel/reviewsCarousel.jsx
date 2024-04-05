// import React, { useState, useEffect } from 'react';
// import reviewsData from '../../data/reviewsDict';
// import star_yellow from '../../assets/icons/star_yellow.svg';
// import star_grey from '../../assets/icons/star_grey.svg';
// import controller_left from '../../assets/icons/controller_left.svg';
// import controller_right from '../../assets/icons/controller_right.svg';
// import "./reviewsCarousel.scss";


// const ReviewsCarousel = ({page}) => {

//     const avatarColors = ['#ff5733', '#4997a8', '#5733ff', '##4488d1', '#7e57c2', '#cabe18']; // List of available colors

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const handleNext = () => {
//       setCurrentImageIndex((currentImageIndex + 1));
//     };
  
//     const handlePrev = () => {
//       setCurrentImageIndex((currentImageIndex - 1));
//     };

//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//     useEffect(() => {
//       const handleResize = () => {
//         setScreenWidth(window.innerWidth);
//       };
  
//       window.addEventListener('resize', handleResize);
  
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);

//     const dp = 0;

//     let carouselWidth;
//     let gap;
//     let elemWidth;
//     let rightArrowVar;
//     if (screenWidth <= 600 ) {
//       carouselWidth = +(screenWidth * 0.90).toFixed(dp);
//       elemWidth = +carouselWidth.toFixed(dp);
//       gap = +(carouselWidth * 0.02).toFixed(dp);
//       rightArrowVar = 1;
//     } else if (screenWidth <= 900) {
//       carouselWidth = +(screenWidth * 0.90).toFixed(dp);
//       elemWidth = +(carouselWidth * 0.49).toFixed(dp);
//       gap = +(carouselWidth * 0.02).toFixed(dp);
//       rightArrowVar = 2;
//     } else if (screenWidth <= 1200) {
//       carouselWidth = +((screenWidth * 0.90) * 0.85).toFixed(dp);
//       elemWidth = +(carouselWidth * 0.49).toFixed(dp);
//       gap = +(carouselWidth.toFixed(dp) * 0.02);
//       rightArrowVar = 2;
//     } else {
//       carouselWidth = +(+(screenWidth * 0.90).toFixed(dp) * 0.85).toFixed(dp);
//       elemWidth = +(carouselWidth * 0.32).toFixed(dp);
//       gap = +(carouselWidth * 0.02).toFixed(dp);
//       rightArrowVar = 3;
//     }

//     console.log('carouselWidth:', carouselWidth)
//     console.log('elemWidth:', elemWidth)
//     console.log('gap:', gap)
//     console.log('elemWidth + gap:', elemWidth + gap)
//     console.log('(elemWidth + gap).toFixed(dp):', (3.5555 + 50.99531).toFixed(2))

//     const translateValue = `translateX(calc(${-currentImageIndex} * ${(elemWidth + gap)}px))`;
    
//     console.log('translateValue:', translateValue)

//     const carouselElements = reviewsData.map((review, index) => {

//       let starsElem = [];
//       for (let i = 0; i < review.stars; i++) {
//         if (i < review.stars) {
//         starsElem.push(<img className="star_icon" src={star_yellow} alt="yellow star" />)
//         } else {
//           starsElem.push(<img className="star_icon" src={star_grey} alt="yellow grey" />)
//         }
//       }
  
//       const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
//       const avatarStyle = {
//         backgroundColor: randomColor, // Set background color
//       };
  
//       return (
//       <div key={review.name} className="reviews_review flex-column" style={{transform: translateValue}}>
  
//         <div className="reviews_review_top_row">
//           <div className="reviews_review_top_row_avatar flex-center" style={avatarStyle}>{review.name.slice(0,1)}</div>
//           <div>
//             <p className="reviews_review_top_row_p name">{review.name}</p>
//             <p className="reviews_review_top_row_p date">{review.date}</p>
//             </div>
//         </div>
  
//         <div className="reviews_review_stars">
//           {starsElem}
//         </div>
  
//         <div className="reviews_review_review">
//           {review.review}
//         </div>
  
//       </div>
//     )})
  
//   const left_arrow = currentImageIndex !== 0 
//     ? <img className="reviews_carousel_controller_arrow" src={controller_left} onClick={handlePrev} alt="left arrow" /> 
//     : "";

//   const right_arrow = currentImageIndex + rightArrowVar !== carouselElements.length 
//     ? <img className="reviews_carousel_controller_arrow" src={controller_right} onClick={handleNext} alt="right arrow" />
//     : "";

//   return (
//     <div className="reviews_carousel" id="carousel">
        
//         <div className="reviews_carousel_controller">
//           {left_arrow}
//         </div>

//       <div className="reviews_carousel_center">
//         {carouselElements}
//       </div>

//         <div className="reviews_carousel_controller">
//           {right_arrow}
//         </div>

//     </div>
//   )
// };

// export default ReviewsCarousel;