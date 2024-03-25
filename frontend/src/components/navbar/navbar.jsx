import React from "react";
import logoWhite from '../../assets/logos/logo.svg'
import logoGrey from '../../assets/logos/logo_dark_grey.svg'
import "./navbar.scss";

const Navbar = ({ logo }) => {

  const logoElem = logo === "grey" 
    ? <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a> 
    : <a href="/"><img className="logo" src={logoWhite} alt="logo" /></a> 

  return (
    <div className="navbar" id="navbar">
        {logoElem}
        <div className="links">
            <ul className="links_ul">
                <li><a href="/properties">Buy</a></li>
                <li><a href="/properties">Rent</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/who_are_we">Who we are</a></li>
                <li><a href="/expertise">Expertise</a></li>
                <li><a href="/locations">Locations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
};

export default Navbar;