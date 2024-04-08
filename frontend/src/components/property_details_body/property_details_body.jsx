import './property_details_body.scss';
import propertyDict from '../../data/propertyDict';
import ContactConsultant from '../contact-consultant/contact-consultant';
import MapComponent from '../map/map';


const PropertyDetailsBody = ({ id }) => {

    const desc = propertyDict[id]["description_full"]
    const descElem = desc.map((item) => {
        return <p className="property-details-body-p">{item}</p>
    })

    const amenities = propertyDict[id]["amenities"]
    const amenElem = amenities.map((item) => {
        return <p className="property-details-body-p-amenity">{item}</p>
    })

    const coordinates = propertyDict[id]["coordinates"]
    const consultant = propertyDict[id]["consultant"]


    const other_details = propertyDict[id]["other_data"] ? (
        <div className="property-details-body-container">
            <h3 className="property-details-body-h3">Other data</h3>
            {Object.entries(propertyDict[id]["other_data"]).map(([key, value]) => (
                <p className="property-details-body-p"><span className='property-details-body-p-span'>{key}:</span>{value}</p>
            ))}
        </div>
    ) : "";

    return (
        <section className="property_details_section">
            <div className="property-details-body">
                <div className="property-details-body-container">
                    <h3 className="property-details-body-h3">Description</h3>
                    {descElem}
                </div>

                <div className="property-details-body-container">
                    <h3 className="property-details-body-h3">Amenities</h3>
                        <div className="property-details-body-container-amenities">
                            {amenElem}
                        </div>
                </div>
                
                {other_details}

                <div className="property-details-body-container">
                    <h3 className="property-details-body-h3">Location</h3>
                    <MapComponent coordinates={coordinates} />
                </div>

            </div>
            <ContactConsultant page="property-details-body" name={consultant} />

        </section>
    );
};

export default PropertyDetailsBody;
