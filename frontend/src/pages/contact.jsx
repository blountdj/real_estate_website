import ContactForm from '../components/contact-form/contact-form'
import Navbar from '../components/navbar/navbar'
import './expertise.scss'


const Contact = () => {

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <ContactForm />
        </>
    )
}

export default Contact