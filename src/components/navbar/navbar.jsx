import React from "react";
import logo from '../../assets/logo.svg'
// import Article from '../../components/article/Article';
// import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
            <ul className="links_ul">
                <li>Buy</li>
                <li>Rent</li>
                <li>Serivces</li>
                <li>Who we are</li>
                <li>Expertise</li>
                <li>Locations</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="darkmode">darkmode</div>
        <div className="language">
            <span>ENG</span>/<span>ESP</span>/<span>FRA</span>
        </div>
    </div>
  )
};

export default Navbar;