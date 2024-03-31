import React, { useState } from 'react';
// import arrowLeft from '../../assets/icons/arrowLeft.svg'
// import arrowRight from '../../assets/icons/arrowRight.svg';
import close_icon from '../../assets/icons/close.svg'
import './property-photo-carousel.scss';

const PropertyPhotoCarousel = ({ images, currentImage, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentImage);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  return (
    <div className="property-photo-carousel">
        <div className="property-photo-carousel-controls">
            {`${currentImageIndex}/${images.length}`}
            <button className='all_pictures_overlay-close' onClick={onClose}><img src={close_icon} alt="close icon" /></button>

        </div>
        <div className="property-photo-carousel-main">
            <button className="property-photo-carousel-main-arrow prev" onClick={handlePrev}>{'<'}</button>
            <img
                className="property-photo-carousel-main-image"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
            />
            <button className="property-photo-carousel-main-arrow next" onClick={handleNext}>{'>'}</button>
        </div>
    </div>
  );
};

export default PropertyPhotoCarousel;
