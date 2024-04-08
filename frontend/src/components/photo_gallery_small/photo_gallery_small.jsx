import React, { useState, useEffect } from 'react';
import close_icon from '../../assets/icons/close.svg';
import PropertyPhotoCarousel from '../property-photo-carousel/property-photo-carousel';
import './photo_gallery_small.scss';
// import awaitingImage from '../'
import Image from '../image/image';

const PhotoGallerySmall = ({ id, img_ext }) => {
    const upperCaseId = id.toUpperCase();
    const [images5, setImages5] = useState([]);
    const [imagesAll, setImagesAll] = useState([]);
    const [clickedImage, setClickedImage] = useState(0);
    const maxImages = 26;
    // const maxImages = 5;
    
    useEffect(() => {
        const fetchImages = async () => {
            console.log('fetchImages')
            // const detaultImage = await import(`../../assets/utilities/awaiting_image.jpg`);
            const detaultImage = await import(`../../assets/utilities/awaiting_image.jpg`);
            setImagesAll([]);
            const uniqueImages5 = new Set();
            const uniqueImagesAll = new Set();

            // const image1 = await import(`../../assets/properties/${upperCaseId}/image01.${img_ext}`);
            // const image2 = await import(`../../assets/properties/${upperCaseId}/image02.${img_ext}`);
            // const image3 = await import(`../../assets/properties/${upperCaseId}/image03.${img_ext}`);
            // const image4 = await import(`../../assets/properties/${upperCaseId}/image04.${img_ext}`);
            // const image5 = await import(`../../assets/properties/${upperCaseId}/image05.${img_ext}`);
            // setImages5([image1.default, image2.default, image3.default, image4.default, image5.default]);

            for (let i = 1; i <= maxImages; i++) {
                try {
                    const imagePath = `../../assets/properties/${upperCaseId}/image${String(i).padStart(2, '0')}.${img_ext}`;
                    const image = await import(imagePath);
                    if (image === undefined) {
                        throw new Error('Image not found');
                    }

                    console.log('image:', image, image.default);
                    uniqueImagesAll.add([image.default]);
                    if (i <= 5) {
                        uniqueImages5.add([image.default]);
                    }
                } catch (error) {
                    console.error(`Error loading image ${i}:`, error);
                    // Push a default image path or placeholder image if image not found
                    uniqueImagesAll.add([detaultImage.default]);

                    if (i <= 5) {
                        uniqueImages5.add([detaultImage.default]);
                    }
                }
            }
    
            // setImages5(images5);
            setImages5([...uniqueImages5]);
            setImagesAll([...uniqueImagesAll]);
            };
            
        fetchImages();
        }, [id]);


            // const image6 = await import(`../../assets/properties/${upperCaseId}/image06.${img_ext}`);
            // const image7 = await import(`../../assets/properties/${upperCaseId}/image07.${img_ext}`);
            // const image8 = await import(`../../assets/properties/${upperCaseId}/image08.${img_ext}`);
            // const image9 = await import(`../../assets/properties/${upperCaseId}/image09.${img_ext}`);
            // const image10 = await import(`../../assets/properties/${upperCaseId}/image10.${img_ext}`);
            // const image11 = await import(`../../assets/properties/${upperCaseId}/image11.${img_ext}`);
            // const image12 = await import(`../../assets/properties/${upperCaseId}/image12.${img_ext}`);
            // const image13 = await import(`../../assets/properties/${upperCaseId}/image13.${img_ext}`);
            // const image14 = await import(`../../assets/properties/${upperCaseId}/image14.${img_ext}`);
            // const image15 = await import(`../../assets/properties/${upperCaseId}/image15.${img_ext}`);
            // const image16 = await import(`../../assets/properties/${upperCaseId}/image16.${img_ext}`);
            // const image17 = await import(`../../assets/properties/${upperCaseId}/image17.${img_ext}`);
            // const image18 = await import(`../../assets/properties/${upperCaseId}/image18.${img_ext}`);
            // const image19 = await import(`../../assets/properties/${upperCaseId}/image19.${img_ext}`);
            // const image20 = await import(`../../assets/properties/${upperCaseId}/image20.${img_ext}`);
            // const image21 = await import(`../../assets/properties/${upperCaseId}/image21.${img_ext}`);
            // const image22 = await import(`../../assets/properties/${upperCaseId}/image22.${img_ext}`);
            // const image23 = await import(`../../assets/properties/${upperCaseId}/image23.${img_ext}`);
            // const image24 = await import(`../../assets/properties/${upperCaseId}/image24.${img_ext}`);
            // const image25 = await import(`../../assets/properties/${upperCaseId}/image25.${img_ext}`);
            // const image26 = await import(`../../assets/properties/${upperCaseId}/image26.${img_ext}`);

            // setImages5([image1.default, image2.default, image3.default, image4.default, image5.default]);

            // setImagesAll([
            //     image1.default, image2.default, image3.default, image4.default, image5.default,
            //     image6.default, image7.default, image8.default, image9.default, image10.default,
            //     image11.default, image12.default, image13.default, image14.default, image15.default,
            //     image16.default, image17.default, image18.default, image19.default, image20.default,
            //     image21.default, image22.default, image23.default, image24.default, image25.default,
            //     image26.default
            // ]);
        // };

    //     fetchImages();
    // }, [id]);

    //         for (let i = 1; i <= maxImages; i++) {
    //             try {
    //                 const imagePath = `../../assets/properties/${upperCaseId}/image${String(i).padStart(2, '0')}.${img_ext}`;
    //                 const image = await import(imagePath);
    //                 imagesAll.push(image.default);
    //                 if (i <= 5) {
    //                     images5.push(image.default);
    //                 }
    //             } catch (error) {
    //                 console.error(`Error loading image ${i}:`, error);
    //                 // Push a default image path or placeholder image if image not found
    //                 // imagesAll.push(defaultImagePath);
    //                 // images5.push(defaultImagePath);
    //             }
    //         }
    
    //         setImages5(images5);
    //         setImagesAll(imagesAll);
    //     };
    
    //     fetchImages();
    // }, [id]);

    //         const detaultImage = await import(`../../assets/utilities/awaiting_image.jpg`);

    //         for (let i = 1; i <= maxImages; i++) {
    //             // console.log('i:', String(i).padStart(2, '0'));
    //             try {
    //                 const imagePath = `../../assets/properties/${upperCaseId}/image${String(i).padStart(2, '0')}.${img_ext}`;
    //                 const image = await import(imagePath);
    //                 // imagesAll.push(image.default);
    //                 if (i <= 5) {
    //                     images5.push(image.default);
    //                 }
    //             } catch (error) {
    //                 console.error(`Error loading image ${i}:`, error);
    //                 // Push a default image path or placeholder image if image not found
    //                 imagesAll.push(detaultImage.default);
    //                 if (i <= 5) {
    //                     images5.push(detaultImage.default);
    //                 }
    //             }
    //         }
    
            // setImages5(images5);
    //         setImagesAll(imagesAll);
        // };
    // 
    //     fetchImages();
    // }, [id]);

    //         const image1 = await import(`../../assets/properties/${upperCaseId}/image01.${img_ext}`);
    //         const image2 = await import(`../../assets/properties/${upperCaseId}/image02.${img_ext}`);
    //         const image3 = await import(`../../assets/properties/${upperCaseId}/image03.${img_ext}`);
    //         const image4 = await import(`../../assets/properties/${upperCaseId}/image04.${img_ext}`);
    //         const image5 = await import(`../../assets/properties/${upperCaseId}/image05.${img_ext}`);

    //         const image6 = await import(`../../assets/properties/${upperCaseId}/image06.${img_ext}`);
    //         const image7 = await import(`../../assets/properties/${upperCaseId}/image07.${img_ext}`);
    //         const image8 = await import(`../../assets/properties/${upperCaseId}/image08.${img_ext}`);
    //         const image9 = await import(`../../assets/properties/${upperCaseId}/image09.${img_ext}`);
    //         const image10 = await import(`../../assets/properties/${upperCaseId}/image10.${img_ext}`);
    //         const image11 = await import(`../../assets/properties/${upperCaseId}/image11.${img_ext}`);
    //         const image12 = await import(`../../assets/properties/${upperCaseId}/image12.${img_ext}`);
    //         const image13 = await import(`../../assets/properties/${upperCaseId}/image13.${img_ext}`);
    //         const image14 = await import(`../../assets/properties/${upperCaseId}/image14.${img_ext}`);
    //         const image15 = await import(`../../assets/properties/${upperCaseId}/image15.${img_ext}`);
    //         const image16 = await import(`../../assets/properties/${upperCaseId}/image16.${img_ext}`);
    //         const image17 = await import(`../../assets/properties/${upperCaseId}/image17.${img_ext}`);
    //         const image18 = await import(`../../assets/properties/${upperCaseId}/image18.${img_ext}`);
    //         const image19 = await import(`../../assets/properties/${upperCaseId}/image19.${img_ext}`);
    //         const image20 = await import(`../../assets/properties/${upperCaseId}/image20.${img_ext}`);
    //         const image21 = await import(`../../assets/properties/${upperCaseId}/image21.${img_ext}`);
    //         const image22 = await import(`../../assets/properties/${upperCaseId}/image22.${img_ext}`);
    //         const image23 = await import(`../../assets/properties/${upperCaseId}/image23.${img_ext}`);
    //         const image24 = await import(`../../assets/properties/${upperCaseId}/image24.${img_ext}`);
    //         const image25 = await import(`../../assets/properties/${upperCaseId}/image25.${img_ext}`);
    //         const image26 = await import(`../../assets/properties/${upperCaseId}/image26.${img_ext}`);
    //         setImages5([image1.default, image2.default, image3.default, image4.default, image5.default]);
    //         setImagesAll([
    //             image1.default, image2.default, image3.default, image4.default, image5.default,
    //             image6.default, image7.default, image8.default, image9.default, image10.default,
    //             image11.default, image12.default, image13.default, image14.default, image15.default,
    //             image16.default, image17.default, image18.default, image19.default, image20.default,
    //             image21.default, image22.default, image23.default, image24.default, image25.default,
    //             image26.default
    //         ]);
    //     };

    //     fetchImages();
    // }, [id]);

    const [showFullPageOverlay, setShowFullPageOverlay] = useState(false);

    const handleFullPageOverlayButtonClickToggle = () => {
        setShowFullPageOverlay(!showFullPageOverlay);
    };

    const [showSliderOverlay, setShowSliderOverlay] = useState(false);

    const handleSliderOverlayButtonClickToggle = (imageNo) => {
        setShowSliderOverlay(!showSliderOverlay);
        setClickedImage(imageNo);
    };

    // console.log('images5:', images5)
    // console.log('imagesAll:', imagesAll)

    return (
        <div className="photo-gallery">
            {images5.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="photo-gallery-image"
                    onClick={() => handleSliderOverlayButtonClickToggle(index)}
                />
            ))}
            <button className='photo-gallery-button' onClick={handleFullPageOverlayButtonClickToggle}>sell all pictures</button>

            {showFullPageOverlay && (
                <div className="all_pictures_overlay">
                    <div className="all_pictures_overlay_container">
                        <button className='all_pictures_overlay-close' onClick={handleFullPageOverlayButtonClickToggle}><img src={close_icon} alt="close icon" /></button>
                    </div>
                    <div className="all_pictures_overlay-gallery">
                    {imagesAll.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`all_pictures_overlay-gallery-image ${index % 3 === 0 ? 'large' : 'small'}`}
                            onClick={() => handleSliderOverlayButtonClickToggle(index)}
                        />
                    ))}
                    </div>
                </div>
            )}

            {showSliderOverlay && (
                <PropertyPhotoCarousel images={imagesAll} currentImage={clickedImage} onClose={handleSliderOverlayButtonClickToggle} />
            )}
        </div>
    );
};

export default PhotoGallerySmall;
