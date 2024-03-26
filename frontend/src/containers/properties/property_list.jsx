import PropertyBlock from '../../components/property_block/property_block'
import propertyDict from '../../data/propertyDict'
import './property_list.scss'

const PropertyList = () => {

    const properties = propertyDict.map(property => {
        return (
                <a href={`/properties/${property.id}`} target="_blank">
                    <PropertyBlock page="property_list" property={property} />
                </a>    
            )
    })

    return (
        <div className="properties_list">
            {properties}
        </div>
    )
}

export default PropertyList