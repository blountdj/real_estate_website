import PropertyBlock from '../../components/property_block/property_block'
import propertyDict from '../../data/propertyDict'
import './property_list.scss'

const PropertyList = () => {

    const propertyArray = Object.entries(propertyDict);
    const properties = propertyArray.map(([key, value]) => {

        return (
                <PropertyBlock id={key} page="property_list" property={value} />
            )
    })

    return (
        <div className="properties_list">
            {properties}
        </div>
    )
}

export default PropertyList