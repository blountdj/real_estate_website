import { useParams } from 'react-router-dom'
import './propertyDetails.scss'

const PropertyDetails = () => {
    const { propertyId } = useParams()
    console.log('propertyId:', propertyId)
    return (
        <>
            PropertyDetails = {propertyId}
        </>
    )
}

export default PropertyDetails