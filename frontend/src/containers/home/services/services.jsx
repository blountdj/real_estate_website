import React from "react";
import ServiceBlock from '../../../components/service_block/service_block';
import servicesDict from "../../../data/servicesDict";
import "./services.scss";


const Services = () => {

  const servicesElements = servicesDict.map((service, index) => {
    return (
      <ServiceBlock 
        key={service.title} 
        page="home" 
        title={service.title} 
        text={service.text} 
        button={service.button} 
        button_text="i'm interested" 
        image={service.image} 
        side={index % 2 === 0 ? 'l' : 'r'}
      />
    )
  })

  return (
    <section className="services flex-center flex-column" id="services">
        <h2 className="services_h2">monserrate's services</h2>
        {servicesElements}
    </section>
  )
};

export default Services;