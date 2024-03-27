import { useParams } from 'react-router-dom'
import './propertyPage.scss'
import PhotoGallery from '../components/photo_gallery/photo_gallery'
import SearchBar from '../components/search_bar/search_bar'
import PropertyDetails from '../components/property_details/property_details'
import propertyDict from '../data/propertyDict';

const PropertyPage = () => {
    const { propertyId } = useParams()
    const img_ext = propertyDict[propertyId]["img_ext"]
    console.log('propertyId:', propertyId)

    return (
        <>
            <SearchBar />
            <PhotoGallery id={propertyId} img_ext={img_ext} />
            <PropertyDetails id={propertyId} />


            {/* carousel */}
        </>
    )
}

export default PropertyPage