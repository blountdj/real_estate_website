import { useParams } from 'react-router-dom'
import './propertyPage.scss'
import PhotoGallerySmall from '../components/photo_gallery_small/photo_gallery_small'
import SearchBar from '../components/search_bar/search_bar'
import PropertyDetailsBody from '../components/property_details_body/property_details_body'
import PropertyDetailsHeader from '../components/property_details_header/property_details_header'
import propertyDict from '../data/propertyDict';
import Navbar from '../components/navbar/navbar'


const PropertyPage = () => {
    const { propertyId } = useParams()
    const img_ext = propertyDict[propertyId]["img_ext"]
    console.log('propertyId:', propertyId)

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <SearchBar />
            <PropertyDetailsHeader id={propertyId} />
            <PhotoGallerySmall id={propertyId} img_ext={img_ext} />
            <PropertyDetailsBody id={propertyId} />

            {/* carousel */}
        </>
    )
}

export default PropertyPage