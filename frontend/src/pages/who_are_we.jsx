import BackgroundHeader from '../components/background-header/background-header';
import ContactForm from '../components/contact-form/contact-form';
import Consultant from '../components/consultant/consultant';
import consultantsDict from '../data/consultantsDict';
import Navbar from '../components/navbar/navbar';
import './who-we-are.scss'

const WhoAreWe = () => {

    const consultantsArray = Object.values(consultantsDict);
    const consultants = consultantsArray.map(consultant => (
        <Consultant key={consultant.name} name={consultant.name} title={consultant.title} photo={consultant.image}/>
    ));

    return (
        <>
            <Navbar layout="home" scroll_threshold="100" />
            <BackgroundHeader section="who-we-are" h1_type="_2" h1="we're monserrate, valencia's premium independent estate agency"/>

            <div className="whoWeAre_text">
                <div className="whoWeAre_text_container">
                    <p className="whoWeAre_text_p">We love our city. We believe in it. We believe it is one of the best cities in the world to live in. And we are its best ambassadors.</p>
                    <p className="whoWeAre_text_p">We are an agency of people, personalised services and long-term relationships. Our main assets are our leading way to communicate, our valuation capacity, and our strategical vision. We are a team of experts providing a premium service through our passion and attention to every detail. Monserrate means safe, visionary and global real estate consultants in a privileged region: Valencia.</p>
                    <h2 className="whoWeAre_text_h2">OUR REAL ESTATE CONSULTANTS</h2>
                </div>
            </div>

            <div className="whoWeAre_consultants">
                
                <div className="whoWeAre_consultants_container">
                    {consultants}
                </div>
            </div>

            <div className="buildings_img_section">
                <div className="buildings_img_section_overlay"></div>
            </div>
            <ContactForm />
        </>
    )
}

export default WhoAreWe