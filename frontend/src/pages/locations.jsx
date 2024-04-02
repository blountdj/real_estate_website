import BackgroundHeader from '../components/background-header/background-header'
import ContactForm from '../components/contact-form/contact-form'
import ServiceBlock from '../components/service_block/service_block'
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
            <Navbar layout="home" scroll_threshold="50" />
            <BackgroundHeader section="locations" h1_type="_1" h1="we focus on prime locations"/>
            <div className="locations_section">
                {locationsElem}
            </div>
            <div className="locations_page_properties">
                <button className="locations_page_properties_button" onClick={() => window.location.href = '/properties'}>sell all properties</button>
            </div>
            <ContactForm />
        </>
    )
}

export default Locations