import React from "react";
import ServiceBlock from '../../../components/service_block/service_block';
import {   
  service_welcome,
  service_staging,
  service_construction,
  service_marketing,
  service_investment,
  service_long_term_rental,
  service_international_client,
  service_real_estate } from './imports';
import "./services.scss";


const Services = () => {
  return (
    <section className="services flex-center flex-column" id="services">
        <h2 className="services_h2">monserrate's services</h2>
        <ServiceBlock title="real estate" side="l" button="false" image={service_real_estate} alt="real estate image"/>
        <ServiceBlock title="international client" side="r" button="true"  image={service_international_client} alt="international client image"/>
        <ServiceBlock title="long term rental" side="l" button="true"  image={service_long_term_rental} alt="long term rental image"/>
        <ServiceBlock title="investment" side="r" button="false"  image={service_investment} alt="investment image"/>
        <ServiceBlock title="real estate marketing" side="l" button="false"  image={service_marketing} alt="marketing image"/>
        <ServiceBlock title="new construction or complete reform" side="r" button="false"  image={service_construction} alt="construction image"/>
        <ServiceBlock title="home staging" side="l" button="true"  image={service_staging} alt="staging image"/>
        <ServiceBlock title="welcome plan" side="r" button="false"  image={service_welcome} alt="welcome image"/>
    </section>
  )
};

export default Services;