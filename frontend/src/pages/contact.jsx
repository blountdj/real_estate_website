import ContactForm from '../components/contact-form/contact-form'
import Navbar from '../components/navbar/navbar'
import './contact.scss'


const Contact = () => {

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <div className="contact_spacer"></div>
            <ContactForm />
        </>
    )
}

export default Contact