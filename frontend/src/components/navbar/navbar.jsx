import React, { useState, useEffect } from 'react';
import logoWhite from '../../assets/logos/logo.svg'
import logoGrey from '../../assets/logos/logo_dark_grey.svg'
import burgerBlack from '../../assets/icons/burger_black.svg'
import burgerWhite from '../../assets/icons/burger_white.svg'
import closeIcon from '../../assets/icons/close.svg'
import NavbarLinks from '../navbarLinks/navbarLinks';
import { useSharedState } from '../../utilities/SharedStateContext';
import "./navbar.scss";

const Navbar = ({ layout, scroll_threshold }) => {

    const { isMenuOpen, setIsMenuOpen } = useSharedState();

    const [scrolled, setScrolled] = useState(false);
    let logoElem;
    let burgerElem;

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
  
    let navbarClass;

    if (layout === "home") {
      logoElem = scrolled 
      ? <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a> 
      : <a href="/"><img className="logo" src={logoWhite} alt="logo" /></a>

      burgerElem = scrolled 
      ? burgerBlack 
      : burgerWhite

      navbarClass = scrolled ? 'scrolled' : 'not_scrolled';
    } else if (layout === "contact") {
      logoElem = <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a> 
      burgerElem = burgerBlack 
      navbarClass = 'scrolled';
    }else {
      logoElem = scrolled 
      ? <a href="/"><img className="logo" src={logoWhite} alt="logo" /></a> 
      : <a href="/"><img className="logo" src={logoGrey} alt="logo" /></a>

      burgerElem = scrolled 
      ? burgerWhite
      : burgerBlack

      navbarClass = scrolled ? 'scrolled' : 'not_scrolled';
    }
 
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);

      const overlay = document.getElementById('nav_overlay');
      overlay.classList.toggle('overlay-visible');
  };
  

  return (
    <>
    <div className={`${layout}_navbar navbar ${navbarClass}`} id="navbar">
        {logoElem}
        <NavbarLinks type="main" />
        <div className="burger-menu" onClick={toggleMenu}>
          <img src={burgerElem} />
        </div>
        <div className="nav_overlay" id="nav_overlay">
            <div className="nav_overlay_top">
              <img className="logo" src={logoGrey} alt="logo" />
              <img className="close_icon" src={closeIcon} alt="close icon" onClick={toggleMenu} />
            </div>
            <NavbarLinks type="overlay" />
        </div>
    </div>
    </>
  )
};

export default Navbar;