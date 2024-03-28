import {   
    welcome,
    staging,
    construction,
    marketing,
    investment,
    long_term_rental,
    international_client,
    real_estate } from './services_imports';

const servicesDict = [
    {"title": "real estate", "text":"We are experts in the sale and rental of premium properties. We also offer our clients the best options to monetize apartments, houses, land, and any other asset.", "button": "false", "image": real_estate},
    {"title": "international clients",  "text":"At Monserrate we have a wide portfolio of international clients interested in renting or buying and selling luxury houses and apartments. Our bilingual team is prepared to process international operations following all administrative and fiscal channels. We have extensive experience in Golden Visa.", "button": "true", "image": international_client},
    {"title": "long term rental",  "text":"We manage medium and long-term rentals for luxury apartments and villas in Valencia. We offer comprehensive services for tenants and landlords and carry out an exhaustive study of each property and profile.", "button": "true", "image": long_term_rental},
    {"title": "investment",  "text":"From Monserrate we advise our clients so that they obtain the best economic performance of their properties, as well as how to create their portfolio. Our consulting service is aimed at achieving the maximum return on your real estate investments in residential assets.", "button": "false", "image": investment},
    {"title": "real estate marketing",  "text":"We position your property in the national and international market to reach the best buyers and tenants. Our more than 10 years of experience guarantee us.", "button": "false", "image": marketing},
    {"title": "new construction or complete reform",  "text":"If you want a completely personalized luxury home in Valencia, in Monserrate, we offer you magnificent plots or properties to reform. We also have partner architects and builders to help you get the house of your dreams.", "button": "false", "image": construction},
    {"title": "home staging",  "text":"Before putting your house up for sale or for rent, Monserrate’s experts will visit the property to find out its possibilities. Our knowledge of Home Staging will help you get the most out of it and make the appropriate set-up to make the property more attractive.", "button": "true", "image": staging},
    {"title": "welcome image",  "text":"If you wish, from our office in Valencia, we welcome you to your neighborhood and manage your most important needs, such as the processing of registration certificates or the enrollment of your children in schools in the area.", "button": "false", "image": welcome},
]

export default servicesDict