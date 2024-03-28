import {   
    moving,
    long_term,
    staging,
    new_home,
    marketing,
    investment,
    specialised,
    real_estate } from './services_page_imports';

const servicesPageDict = [
    {"title": "real estate", "text":"The purchase and sale of premium real estate, advice, free valuation of your property and return on investment proposal.", "button": "false", "image": real_estate},
    {"title": "SPECIALISED IN INTERNATIONAL CLIENTS",  "text":"We help you with your trip to Spain and make sure your stay is comfortable. We take care of all the paperwork required for you to set yourself up in Spain. We have extensive experience in Golden Visa", "button": "true", "image": specialised},
    {"title": "long term rental",  "text":"Medium and long-term renting of premium properties. All-inclusive management and marketing", "button": "true", "image": long_term},
    {"title": "investment",  "text":"If you want to invest in real estate, we offer advice for maximising your return on investment.", "button": "false", "image": investment},
    {"title": "real estate marketing",  "text":"Web positioning, photographic spreads, shots and follow-up.", "button": "false", "image": marketing},
    {"title": "NEW HOME",  "text":"If the home you want doesn’t exist, we can create it together. We find the best location and the perfect plot of land for building your property, providing you with a firm quote.", "button": "false", "image": new_home},
    {"title": "home staging",  "text":"We determine what needs to be done to your property to obtain the highest return.", "button": "true", "image": staging},
    {"title": "MOVING TO SPAIN",  "text":"We’ll handle all the paperwork you need to set up yourself up in Spain. Our legal team of Golden Visa experts will ensure that all your transactions are viable. We’ll arrange your stay in Valencia and show you the city so you’ll be sure of not missing a thing. If you’d like to invest in Valencia, Madrid or Barcelona, we’ll identify the properties that best suit your needs, and we’ll improve them so they increase in value.", "button": "false", "image": moving},
]

export default servicesPageDict