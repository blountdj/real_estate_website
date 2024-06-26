import { location_icon, size_icon, bed_icon, shower_icon, tag_icon } from './imports';
import React, { useState, useEffect } from 'react';
import useScrollVisibility from '../../utilities/useScrollVisibility';
import './property_block.scss';

const PropertyBlock = ({ id, page, property }) => {

  const isVisible = useScrollVisibility(`.${page}_property_${id}`);

    const price = property.price ? <span className="property_price">{parseFloat(property?.price).toLocaleString()} €</span> : ""
    
    return (
        <a key={id} href={`/properties/${id}`} target="_blank" className={`${page}_property ${page}_property_${id} ${isVisible ? 'visible' : 'notVisible'}`} >
           <div index={id} key={property.id} className={`${page}_property ${page}_property_${id}`}>
            
              <div className={`${page}_img_container`}>
                  {price}
                  <img className="property_img" src={property.img} alt={property.title} />
              </div>

              <div className={`${page}_property_container`}>
                  <h3 className="property_title">{property.title}</h3>
                  <div className="middle_line"><img className="property_icon location_icon" src={location_icon} alt="location icon" /><span className="property-text space-big">{property.location}</span><img className="property_icon tag_icon" src={tag_icon} alt="tag icon" /><span className="property-text space-little">{property.id}</span></div>
                  <div className="bottom_line"><img className="property_icon size_icon" src={size_icon} alt="size icon" /><span className="property-text space-little">{property.description}</span><img className="property_icon bed_icon" src={bed_icon} alt="bed icon" /><span className="property-text space-little">{property?.bedrooms}</span><img className="property_icon shower_icon" src={shower_icon} alt="shower icon" /><span className="property-text">{property?.bathrooms}</span></div>
              </div>

          </div>
        </a>   
    )
};

export default PropertyBlock;