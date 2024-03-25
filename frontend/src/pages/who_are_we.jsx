import BackgroundHeader from '../components/background-header/background-header';
import ContactForm from '../components/contact-form/contact-form';
import Consultant from '../components/consultant/consultant';
import camilo_img from '../assets/pages/who_we_are/camilo.jpg';
import marta_img from '../assets/pages/who_we_are/marta.jpg';
import carla_img from '../assets/pages/who_we_are/carla.jpg';
import nerea_img from '../assets/pages/who_we_are/nerea.jpg';
import maria_img from '../assets/pages/who_we_are/maria.jpg';
import regis_img from '../assets/pages/who_we_are/regis.jpg';
import cristina_img from '../assets/pages/who_we_are/cristina.jpg';
import maria2_img from '../assets/pages/who_we_are/maria2.png';
import maria3_img from '../assets/pages/who_we_are/maria3.jpg';
import './who-we-are.scss'

const WhoAreWe = () => {

    const consultantsDict = [
        {"name": "CAMILO SANABRIA", "title": "Real Estate Consultant & CEO", "photo": camilo_img},
        {"name": "MARTA MARÍN CLÉRIGUES", "title": "Real Estate Consultant", "photo": marta_img},
        {"name": "CARLA CADENAS CAÑAMÁS", "title": "Real Estate Consultant", "photo": carla_img},
        {"name": "NEREA VIAN BALDAJOS", "title": "Rental Consultant", "photo": nerea_img},
        {"name": "MARIA MARTÍ MORENO", "title": "Real Estate Consultant", "photo": maria_img},
        {"name": "REGIS LOPEZ LANG", "title": "Real Estate Consultant", "photo": regis_img},
        {"name": "CRISTINA CARO UNSAIN", "title": "Real Estate Consultant", "photo": cristina_img},
        {"name": "MARÍA PANDUROVA", "title": "Office Manager", "photo": maria2_img},
        {"name": "MARIA SANABRIA LUQUE", "title": "Team Assistant", "photo": maria3_img},
    ]

    const consultants = consultantsDict.map(consultant => (
        <Consultant key={consultant.name} name={consultant.name} title={consultant.title} photo={consultant.photo}/>
    ))


    return (
        <>
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