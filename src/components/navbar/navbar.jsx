import React from "react";
import logo from '../../assets/logos/logo.svg'
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
            <ul className="links_ul">
                <li><a href="#">Buy</a></li>
                <li><a href="#">Rent</a></li>
                <li><a href="#">Serivces</a></li>
                <li><a href="#">Who we are</a></li>
                <li><a href="#">Expertise</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
};

export default Navbar;