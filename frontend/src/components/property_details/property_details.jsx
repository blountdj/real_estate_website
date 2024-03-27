import './property_details.scss';
import propertyDict from '../../data/propertyDict';
import ContactConsultant from '../contact-consultant/contact-consultant';
import MapComponent from '../map/map';


const PropertyDetails = ({ id }) => {

    const desc = propertyDict[id]["description_full"]
    const descElem = desc.map((item) => {
        return <p className="property-details-p">{item}</p>
    })

    const amenities = propertyDict[id]["amenities"]
    const amenElem = amenities.map((item) => {
        return <p className="property-details-p-amenity">{item}</p>
    })

    const coordinates = propertyDict[id]["coordinates"]
    const consultant = propertyDict[id]["consultant"]

    return (
        <section className="property_details_section">
            <div className="property-details">
                <div className="property-details-container">
                    <h3 className="property-details-h3">Description</h3>
                    {descElem}
                </div>

                <div className="property-details-container">
                    <h3 className="property-details-h3">Amenities</h3>
                        <div className="property-details-container-amenities">
                            {amenElem}
                        </div>
                </div>

                <div className="property-details-container">
                    <h3 className="property-details-h3">Location</h3>
                    <MapComponent coordinates={coordinates} />
                </div>

            </div>
            <ContactConsultant name={consultant} />

        </section>
    );
};

export default PropertyDetails;
