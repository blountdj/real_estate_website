import BackgroundHeader from '../components/background-header/background-header'
import ContactForm from '../components/contact-form/contact-form'
import ServiceBlock from '../components/service_block/service_block'
// import alfinach from '../assets/locations/alfinach2.jpg'
// import los_monasterios from '../assets/locations/los_monasterios2.jpg'
// import monte_picayo from '../assets/locations/monte_picayo2.jpg'
// import valencia from '../assets/locations/valencia2.jpg'
import Navbar from '../components/navbar/navbar'
import locationsDict from '../data/locationsDict'
import './locations.scss'


const Locations = () => {

const locationsElem = locationsDict.map((location, index) => {
    return <ServiceBlock 
            key={location.title} 
            page="locations" 
            title={location.title} 
            text={location.text} 
            side={index % 2 === 0 ? "l" : "r"} 
            button={location.button}  
            button_text={location.title}
            image={location.image} 
            alt={location.title}/>
})


    return (
        <>
            <Navbar layout="home" scroll_threshold="120" />
            <BackgroundHeader section="locations" h1_type="_1" h1="we focus on prime locations"/>
            <div className="locations_section">
                {locationsElem}
            </div>
            <div className="locations_page_properties">
                <button className="locations_page_properties_button">sell all properties</button>
            </div>
            <ContactForm />
        </>
    )
}

export default Locations