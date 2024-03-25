import BackgroundHeader from '../components/background-header/background-header'
import ContactForm from '../components/contact-form/contact-form'
import ServiceBlock from '../components/service_block/service_block'
import alfinach from '../assets/locations/alfinach2.jpg'
import los_monasterios from '../assets/locations/los_monasterios2.jpg'
import monte_picayo from '../assets/locations/monte_picayo2.jpg'
import valencia from '../assets/locations/valencia2.jpg'
import './locations.scss'


const Locations = () => {

    return (
        <>
            <BackgroundHeader section="locations" h1_type="_1" h1="we focus on prime locations"/>
            <div className="locations_section">
                <ServiceBlock 
                        page="locations" 
                        title="valencia" 
                        text="Spain’s third largest city, offers an extraordinary quality of life. Also famous for its gastronomic culture, has one of the largest historic centers of Spain. The city’s economy is service-oriented, maintaining an important industrial base; being the home of Mercadona and Porcelanosa and one of the FORD biggest factories all around the world. A unique place to live and invest." 
                        side="l" 
                        button="true" 
                        button_text="valencia"
                        image={valencia} 
                        alt="valencia image"/>
                <ServiceBlock 
                        page="locations" 
                        title="LOS MONASTERIOS" 
                        text="Just 20 minutes from the centre of Valencia and wedged between the sea and the mountains, the smallest plots on this residential estate are 1000 m². The gardens and exclusive common areas are meticulously maintained. The Campo Country Club has the most extensive facilities in the province." 
                        side="r" 
                        button="true" 
                        button_text="LOS MONASTERIOS"
                        image={los_monasterios} 
                        alt="LOS MONASTERIOS image"/>
                    <ServiceBlock 
                        page="locations" 
                        title="ALFINACH" 
                        text="The purchase and sale of premium real estate, advice, free valuation of your property and return on investment proposal." 
                        side="l" 
                        button="true" 
                        button_text="ALFINACH"
                        image={alfinach} 
                        alt="ALFINACH image"/>
                    <ServiceBlock 
                        page="locations" 
                        title="MONTE PICAYO" 
                        text="This exclusive residential area, which for more than 30 years had its famous Casino as its main emblem, offers beautiful views of the Mediterranean Sea and proximity to Valencia city, and has become one of the best places to invest in housing in Valencia." 
                        side="r" 
                        button="true" 
                        button_text="MONTE PICAYO"
                        image={monte_picayo} 
                        alt="MONTE PICAYO image"/>
            </div>
            <div className="locations_page_properties">
                <button className="locations_page_properties_button">sell all properties</button>
            </div>
            <ContactForm />
        </>
    )
}

export default Locations