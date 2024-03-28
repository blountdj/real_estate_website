import React, { useState, useEffect } from 'react';
import close_icon from '../../assets/icons/close.svg';
import './photo_gallery_small.scss';

const PhotoGallerySmall = ({ id, img_ext }) => {
    const upperCaseId = id.toUpperCase();
    const [images5, setImages5] = useState([]);
    const [imagesAll, setImagesAll] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const image1 = await import(`../../assets/properties/${upperCaseId}/image01.${img_ext}`);
            const image2 = await import(`../../assets/properties/${upperCaseId}/image02.${img_ext}`);
            const image3 = await import(`../../assets/properties/${upperCaseId}/image03.${img_ext}`);
            const image4 = await import(`../../assets/properties/${upperCaseId}/image04.${img_ext}`);
            const image5 = await import(`../../assets/properties/${upperCaseId}/image05.${img_ext}`);

            const image6 = await import(`../../assets/properties/${upperCaseId}/image06.${img_ext}`);
            const image7 = await import(`../../assets/properties/${upperCaseId}/image07.${img_ext}`);
            const image8 = await import(`../../assets/properties/${upperCaseId}/image08.${img_ext}`);
            const image9 = await import(`../../assets/properties/${upperCaseId}/image09.${img_ext}`);
            const image10 = await import(`../../assets/properties/${upperCaseId}/image10.${img_ext}`);
            const image11 = await import(`../../assets/properties/${upperCaseId}/image11.${img_ext}`);
            const image12 = await import(`../../assets/properties/${upperCaseId}/image12.${img_ext}`);
            const image13 = await import(`../../assets/properties/${upperCaseId}/image13.${img_ext}`);
            const image14 = await import(`../../assets/properties/${upperCaseId}/image14.${img_ext}`);
            const image15 = await import(`../../assets/properties/${upperCaseId}/image15.${img_ext}`);
            const image16 = await import(`../../assets/properties/${upperCaseId}/image16.${img_ext}`);
            const image17 = await import(`../../assets/properties/${upperCaseId}/image17.${img_ext}`);
            const image18 = await import(`../../assets/properties/${upperCaseId}/image18.${img_ext}`);
            const image19 = await import(`../../assets/properties/${upperCaseId}/image19.${img_ext}`);
            const image20 = await import(`../../assets/properties/${upperCaseId}/image20.${img_ext}`);
            const image21 = await import(`../../assets/properties/${upperCaseId}/image21.${img_ext}`);
            const image22 = await import(`../../assets/properties/${upperCaseId}/image22.${img_ext}`);
            const image23 = await import(`../../assets/properties/${upperCaseId}/image23.${img_ext}`);
            const image24 = await import(`../../assets/properties/${upperCaseId}/image24.${img_ext}`);
            const image25 = await import(`../../assets/properties/${upperCaseId}/image25.${img_ext}`);
            const image26 = await import(`../../assets/properties/${upperCaseId}/image26.${img_ext}`);
            setImages5([image1.default, image2.default, image3.default, image4.default, image5.default]);

            setImagesAll([
                image1.default, image2.default, image3.default, image4.default, image5.default,
                image6.default, image7.default, image8.default, image9.default, image10.default,
                image11.default, image12.default, image13.default, image14.default, image15.default,
                image16.default, image17.default, image18.default, image19.default, image20.default,
                image21.default, image22.default, image23.default, image24.default, image25.default,
                image26.default
            ]);
        };

        fetchImages();
    }, [id]);



    const [showOverlay, setShowOverlay] = useState(false);

    const handleButtonClickOpen = () => {
        setShowOverlay(true);
    };

    const handleButtonClickClose = () => {
        setShowOverlay(false);
    };

    return (
        <div className="photo-gallery">
            {images5.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="photo-gallery-image"
                />
            ))}

            <button className='photo-gallery-button' onClick={handleButtonClickOpen}>sell all pictures</button>


            {showOverlay && (
                <div className="all_pictures_overlay">
                    <button className='all_pictures_overlay-close' onClick={handleButtonClickClose}><img src={close_icon} alt="close icon" /></button>
                    {/* Overlay content */}
                    
                    <div className="all_pictures_overlay-gallery">
                    {imagesAll.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`all_pictures_overlay-gallery-image ${index % 3 === 0 ? 'large' : 'small'}`}
                        />
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallerySmall;
