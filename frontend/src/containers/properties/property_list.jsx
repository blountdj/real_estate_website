import PropertyBlock from '../../components/property_block/property_block'
import propertyDict from '../../data/propertyDict'
// import useScrollVisibility from '../../utilities/useScrollVisibility'
import './property_list.scss'

const PropertyList = () => {

    // const isVisible = useScrollVisibility(`.property_a`);

    const propertyArray = Object.entries(propertyDict);
    // const properties = propertyArray.map(([key, value]) => {
    const properties = propertyArray.map((entry, index) => {
        const [key, value] = entry;
        console.log('index:', index, 'key:', key, 'value:', value)
        // console.log('properties:', properties)
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