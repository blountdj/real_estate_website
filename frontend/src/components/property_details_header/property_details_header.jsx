import propertyDict from '../../data/propertyDict';
import {  walletIcon,
    locationIcon,
    tagIcon,
    sizeIcon,
    bedIcon,
    showerIcon,
    facebook,
    twitter,
    linkedin } from './imports';
import './property_details_header.scss';

const PropertyDetailsHeader = ({ id }) => {

    const type = propertyDict[id]["type"]
    const price = typeof propertyDict[id]["price"] === 'number' ? `${propertyDict[id]["price"].toLocaleString()} €` : propertyDict[id]["price"]

    const title = propertyDict[id]["title"]

    const location = id ? 
        <div className="property_details_header_bottom_left_container">
            <img src={locationIcon} alt="" />{propertyDict[id]["location"]}
        </div> : ""
    const tag = id ? 
        <div className="property_details_header_bottom_left_container">
            <img src={tagIcon} alt="" />{id}
        </div> : ""
    const bedrooms = propertyDict[id]["bedrooms"] ? 
        <div className="property_details_header_bottom_left_container">
            <img src={bedIcon} alt="" />{propertyDict[id]["bedrooms"]}
        </div> : ""
    const bathrooms = propertyDict[id]["bathrooms"] ? 
        <div className="property_details_header_bottom_left_container">
            <img src={showerIcon} alt="" />{propertyDict[id]["bathrooms"]}
        </div> : ""

    const description = propertyDict[id]["description"] ? 
        <div className="property_details_header_bottom_left_container">
            <img src={sizeIcon} alt="" />{propertyDict[id]["description"]}
        </div> : ""
        

    return (
        <div className="property_details_header">
            <div className="property_details_header_top">
                <h1 className="property_details_header_top_h1">{title}</h1>
            </div>
            <div className="property_details_header_bottom">
                <div className="property_details_header_bottom_left">
                    <div className="property_details_header_bottom_left_container">
                        <img src={walletIcon} alt="" />{type} <span className='price_format'>{price}</span>
                    </div>

                    {location}
                    {tag}
                    {description}
                    {bedrooms}
                    {bathrooms}

                </div>
                <div className="property_details_header_bottom_right">
                    Share : 
                    <a href="#"><img className="property_details_header_bottom_right_social" src={facebook} alt="facebook icon" /></a>
                    <a href="#"><img className="property_details_header_bottom_right_social" src={twitter} alt="twitter icon" /></a>
                    <a href="#"><img className="property_details_header_bottom_right_social" src={linkedin} alt="linkedin icon" /></a>
                </div>
            </div>
        </div>
    )

}

export default PropertyDetailsHeader