import React from "react";
import logo from '../../assets/logos/logo.svg'
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
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