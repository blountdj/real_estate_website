import BackgroundHeader from '../components/background-header/background-header'
import ServicesSection from '../containers/services/services/services'
import Info from '../components/info/info'
import ContactForm from '../components/contact-form/contact-form'
import './services.scss'

const ServicesPage = () => {

    return (
        <>
            <BackgroundHeader section="services" h1_type="_1" h1="our services"/>
            <ServicesSection />
            <Info
                page="services" 
                header="specialised in international clients" 
                textList={["We help you with your trip to Spain and make sure your stay is comfortable. Our legal team, experts in the Golden Visa, will ensure that your transactions comply with all legal requirements."]} 
                button="true"
                button_text="find out more"
            />
            <ContactForm />
        </>
    )
}

export default ServicesPage