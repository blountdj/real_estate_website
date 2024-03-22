import React from "react";
import "./footer_links.css";


const FooterLinks = ({ title, links }) => {

  const linksMapped = links.map(link => (
    <li key={link.text} className="footer_links_li"><a className="footer_links_li_a" href={link.href}>{link.text}</a></li>
  ))

  return (
    <div className="footer_links" id="footer_links">
      <h3 className="footer_links_h3">{title}</h3>
      <ul>
        {linksMapped}
      </ul>
    </div>
  )
};

export default FooterLinks;