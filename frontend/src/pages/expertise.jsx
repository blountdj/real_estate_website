import BackgroundHeader from '../components/background-header/background-header'
import Info from '../components/info/info'
import ContactForm from '../components/contact-form/contact-form'
import Navbar from "../components/navbar/navbar";
import './expertise.scss'

const Expertise = () => {

    return (
        <>
            <Navbar layout="home" scroll_threshold="120" />
            <BackgroundHeader section="expertise" h1_type="_1" h1="services for property owners"/>
            <Info 
                page="expertise"
                header="WE PROVIDE ADVICE ON SELLING, RENTING OUT AND INVESTING IN REAL ESTATE"
                textList={["We accept properties in our operating area and check that they meet our premium standards. Following our study, we offer you the most attractive sale or rental price.",
                           "Via our investment consultancy service, we can offer you the most profitable properties on the local market and in the major Spanish capitals. We provide the legal advice and can provide the premium investor with attractive financing conditions for their operations.",
                           "With our improvement plan, we assess your property and provide a range of options for getting a return on your asset and increasing its value."]}
                button="true"
                button_text="contact us"
                button_link="/contact"
            />
            <BackgroundHeader section="expertise2" h1_type="_1" h1="services for visitors"/>
            <Info 
                page="expertise"
                header="WE FIND THE PROPERTY THAT BEST SUITS YOUR NEEDS"
                textList={["We are ambassadors of Valencia and we know every corner of it. So we can tell you everything you need to know about each district. We take you to visit the property and, after you reserve it, we provide you with our welcome service.",
                        "If you have come to live in Valencia, we help you feel at home. We handle all the paperwork. We tell you what you need to do to get your identity documents and council registration certificate. We try to make life easier and take the stress out of your move. We also enrol your children in the best schools and find a personal cleaning service and any other services you may need."]}
                button="true"
                button_text="contact us"
                button_link="/contact"
            />
            <ContactForm />
        </>
    )
}

export default Expertise