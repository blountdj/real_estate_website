import './properties.scss'
import Filter from '../components/filter/filter'
import Navbar from '../components/navbar/navbar'
import PropertyList from '../containers/properties/property_list'
import useScrollVisibility from '../utilities/useScrollVisibility';


const Properties = () => {

    const isVisible = useScrollVisibility(`.property_list_container`);

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <div className="filter_container">
                <Filter page="properties" more_filters="true" />
            </div>
            <div className={`property_list_container ${isVisible ? 'visible' : 'notVisible'}`}>
                <PropertyList />
            </div>
        </>
    )
}

export default Properties