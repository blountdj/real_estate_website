import React, { useState, useEffect } from 'react';
import './photo_gallery.scss';

const PhotoGallery = ({ id, img_ext }) => {
    const upperCaseId = id.toUpperCase();
    const [images, setImages] = useState([]);

    console.log('img_ext:', img_ext)

    useEffect(() => {
        const fetchImages = async () => {
            const image1 = await import(`../../assets/properties/${upperCaseId}/image01.${img_ext}`);
            const image2 = await import(`../../assets/properties/${upperCaseId}/image02.${img_ext}`);
            const image3 = await import(`../../assets/properties/${upperCaseId}/image03.${img_ext}`);
            const image4 = await import(`../../assets/properties/${upperCaseId}/image04.${img_ext}`);
            const image5 = await import(`../../assets/properties/${upperCaseId}/image05.${img_ext}`);

            setImages([image1.default, image2.default, image3.default, image4.default, image5.default]);
        };

        fetchImages();
    }, [id]);

    return (
        <div className="photo-gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="photo-gallery-image"
                />
            ))}

            <button className='photo-gallery-button'>sell all pictures</button>
        </div>
    );
};

export default PhotoGallery;
