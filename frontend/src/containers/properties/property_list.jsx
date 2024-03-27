import PropertyBlock from '../../components/property_block/property_block'
import propertyDict from '../../data/propertyDict'
import './property_list.scss'

const PropertyList = () => {

    const propertyArray = Object.entries(propertyDict);
    const properties = propertyArray.map(([key, value]) => {
        return (
                <a href={`/properties/${key}`} target="_blank">
                    <PropertyBlock page="property_list" property={value} />
                </a>    
            )
    })

    return (
        <div className="properties_list">
            {properties}
            property list
        </div>
    )
}

export default PropertyList