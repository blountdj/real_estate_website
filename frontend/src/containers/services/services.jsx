import './services.scss'
import ServiceBlock from '../../components/service_block/service_block';
import servicesPageDict from '../../data/servicesPageDict';


const ServicesSection = () => {

    const services = servicesPageDict.map((item, index) => {
        return (
            <ServiceBlock 
                page="services" 
                index={index}
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
                {services}
            </div>
        </>
    )
}

export default ServicesSection