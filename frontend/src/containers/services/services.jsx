import './services.scss'
import ServiceBlock from '../../components/service_block/service_block';
import servicesPageDict from '../../data/servicesPageDict';


const ServicesSection = () => {


    const services = servicesPageDict.map((item, index) => {
        return (
            <ServiceBlock 
                page="services" 
                title={item.title} 
                text={item.text} 
                side={index % 2 === 0? "l" : "r"}  
                button={item.button} 
                button_text="i'm interested"
                image={item.image} 
            />
        )
    })


    return (
        <>
            <div className="services_section">
                {/* <ServiceBlock 
                    page="services" 
                    title="real estate" 
                    text="The purchase and sale of premium real estate, advice, free valuation of your property and return on investment proposal." 
                    side="l" 
                    button="false" 
                    button_text="i'm interested"
                    image={real_estate} 
                    alt="real estate image"/> */}

                {services}

            </div>
        </>
    )
}

export default ServicesSection