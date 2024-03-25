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
        <ServiceBlock 
          page="home" 
          title="real estate" 
          text="We are experts in the sale and rental of premium properties. We also offer our clients the best options to monetize apartments, houses, land, and any other asset." 
          side="l" 
          button="false"
          button_text=""
          image={service_real_estate} 
          alt="real estate image"/>
        <ServiceBlock 
          page="home" 
          title="international client" 
          text="At Monserrate we have a wide portfolio of international clients interested in renting or buying and selling luxury houses and apartments. Our bilingual team is prepared to process international operations following all administrative and fiscal channels. We have extensive experience in Golden Visa" 
          side="r" 
          button="true" 
          button_text="i'm interested"
          image={service_international_client} 
          alt="international client image"/>
        <ServiceBlock 
          page="home" 
          title="long term rental" 
          text="We manage medium and long-term rentals for luxury apartments and villas in Valencia. We offer comprehensive services for tenants and landlords and carry out an exhaustive study of each property and profile." 
          side="l" 
          button="true" 
          button_text="i'm interested"
          image={service_long_term_rental} 
          alt="long term rental image"/>
        <ServiceBlock 
          page="home" 
          title="investment" 
          text="From Monserrate we advise our clients so that they obtain the best economic performance of their properties, as well as how to create their portfolio. Our consulting service is aimed at achieving the maximum return on your real estate investments in residential assets." 
          side="r" 
          button="false" 
          button_text=""
          image={service_investment} 
          alt="investment image"/>
        <ServiceBlock 
          page="home" 
          title="real estate marketing" 
          text="We position your property in the national and international market to reach the best buyers and tenants. Our more than 10 years of experience guarantee us." 
          side="l" 
          button="false" 
          button_text=""
          image={service_marketing} 
          alt="marketing image"/>
        <ServiceBlock 
          page="home" 
          title="new construction or complete reform" 
          text="If you want a completely personalized luxury home in Valencia, in Monserrate, we offer you magnificent plots or properties to reform. We also have partner architects and builders to help you get the house of your dreams." 
          side="r" 
          button="false" 
          button_text=""
          image={service_construction} 
          alt="construction image"/>
        <ServiceBlock 
          page="home" 
          title="home staging" 
          text="Before putting your house up for sale or for rent, Monserrate’s experts will visit the property to find out its possibilities. Our knowledge of Home Staging will help you get the most out of it and make the appropriate set-up to make the property more attractive." 
          side="l" 
          button="true" 
          button_text="i'm interested"
          image={service_staging} 
          alt="staging image"/>
        <ServiceBlock 
          page="home" 
          title="welcome plan" 
          text="If you wish, from our office in Valencia, we welcome you to your neighborhood and manage your most important needs, such as the processing of registration certificates or the enrollment of your children in schools in the area." 
          side="r" 
          button="false" 
          button_text=""
          image={service_welcome} 
          alt="welcome image"/>
    </section>
  )
};

export default Services;