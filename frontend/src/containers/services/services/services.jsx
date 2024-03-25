import './services.scss'
import {
investment,
long_term,
marketing,
moving,
new_home,
real_estate,
specialised,
staging } from './imports'
import ServiceBlock
 from '../../../components/service_block/service_block';

const ServicesSection = () => {

    return (
        <div className="services_section">
            <ServiceBlock 
                page="services" 
                title="real estate" 
                text="The purchase and sale of premium real estate, advice, free valuation of your property and return on investment proposal." 
                side="l" 
                button="false" 
                button_text=""
                image={real_estate} 
                alt="real estate image"/>
            <ServiceBlock 
                page="services" 
                title="SPECIALISED IN INTERNATIONAL CLIENTS" 
                text="We help you with your trip to Spain and make sure your stay is comfortable. We take care of all the paperwork required for you to set yourself up in Spain. We have extensive experience in Golden Visa" 
                side="r" 
                button="true" 
                button_text="i'm interested"
                image={specialised} 
                alt="international client image"/>
            <ServiceBlock 
                page="services" 
                title="REAL ESTATE MARKETING" 
                text="Web positioning, photographic spreads, shots and follow-up." 
                side="l" 
                button="false" 
                button_text=""
                image={real_estate} 
                alt="real estate image"/>
            <ServiceBlock 
                page="services" 
                title="INVESTMENT" 
                text="If you want to invest in real estate, we offer advice for maximising your return on investment." 
                side="r" 
                button="false" 
                button_text=""
                image={real_estate} 
                alt="investment image"/>
            <ServiceBlock 
                page="services" 
                title="NEW HOME" 
                text="If the home you want doesn’t exist, we can create it together. We find the best location and the perfect plot of land for building your property, providing you with a firm quote." 
                side="l" 
                button="false" 
                button_text=""
                image={new_home} 
                alt="new home image"/>
            <ServiceBlock 
                page="services" 
                title="LONG-TERM RENTALS" 
                text="Medium and long-term renting of premium properties. All-inclusive management and marketing" 
                side="r" 
                button="true" 
                button_text="i'm interested"
                image={long_term} 
                alt="long term rentals image"/>
            <ServiceBlock 
                page="services" 
                title="HOME STAGING" 
                text="We determine what needs to be done to your property to obtain the highest return." 
                side="l" 
                button="true" 
                button_text="i'm interested"
                image={staging} 
                alt="home staging image"/>
            <ServiceBlock 
                page="services" 
                title="MOVING TO SPAIN" 
                text="We’ll handle all the paperwork you need to set up yourself up in Spain. Our legal team of Golden Visa experts will ensure that all your transactions are viable. We’ll arrange your stay in Valencia and show you the city so you’ll be sure of not missing a thing. If you’d like to invest in Valencia, Madrid or Barcelona, we’ll identify the properties that best suit your needs, and we’ll improve them so they increase in value." 
                side="r" 
                button="false" 
                button_text=""
                image={moving} 
                alt="moving image"/>
        </div>
    )
}

export default ServicesSection