import BackgroundHeader from '../components/background-header/background-header'
import ServicesSection from '../containers/services/services'
import Info from '../components/info/info'
import ContactForm from '../components/contact-form/contact-form'
import Navbar from "../components/navbar/navbar";
import './services.scss'

const ServicesPage = () => {

    return (
        <>
            <Navbar layout="home" scroll_threshold="120" />
            <BackgroundHeader section="services" h1_type="_1" h1="our services"/>
            <ServicesSection />
            <Info
                page="services" 
                index="0"
                header="specialised in international clients" 
                textList={["We help you with your trip to Spain and make sure your stay is comfortable. Our legal team, experts in the Golden Visa, will ensure that your transactions comply with all legal requirements."]} 
                button="true"
                button_text="find out more"
                button_link="/who_we_are"
            />
            <ContactForm />
        </>
    )
}

export default ServicesPage