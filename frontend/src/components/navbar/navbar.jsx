import React, { useState, useEffect } from 'react';
import logoWhite from '../../assets/logos/logo.svg'
import logoGrey from '../../assets/logos/logo_dark_grey.svg'
import "./navbar.scss";

const Navbar = ({ layout, scroll_threshold }) => {

    const [scrolled, setScrolled] = useState(false);
    let logoElem;

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        const threshold = parseInt(scroll_threshold);
  
        // Update state based on scroll position
        if (offset > threshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Only run the effect once on mount
  
    // Define the navbar classes based on the scroll state
    // const navbarClass = scrolled ? 'scrolled' : 'not_scrolled';
    let navbarClass;

    if (layout === "home") {
      logoElem = scrolled 
      ? <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a> 
      : <a href="/"><img className="logo" src={logoWhite} alt="logo" /></a>
      navbarClass = scrolled ? 'scrolled' : 'not_scrolled';
    } else if (layout === "contact") {
      logoElem = <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a> 
      navbarClass = 'scrolled';
    }else {
      logoElem = scrolled 
      ? <a href="/"><img className="logo" src={logoWhite} alt="logo" /></a> 
      : <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a>
      navbarClass = scrolled ? 'scrolled' : 'not_scrolled';
    }
 


  return (
    <div className={`${layout}_navbar navbar ${navbarClass}`} id="navbar">
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