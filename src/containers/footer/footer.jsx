import React from "react";
import "./footer.scss";
import logo from '../../assets/logos/logo_grey.svg'
import facebook from '../../assets/social_media/social_media_facebook.svg'
import instagram from '../../assets/social_media/social_media_instagram.svg'
import linkedin from '../../assets/social_media/social_media_linkedin.svg'
import youtube from '../../assets/social_media/social_media_youtube.svg'
import FooterLinks from "../../components/footer_links/footer_links";

const Footer = () => {

  const company_links = [
    {"text": "about us", "href": "#"},
    {"text": "terms of use", "href": "#"},
    {"text": "privacy", "href": "#"},
    {"text": "cookies", "href": "#"},
  ]
  const services_links = [
    {"text": "our services", "href": "#"},
    {"text": "owners and tenants", "href": "#"},
  ]
  const other_properties_links = [
    {"text": "plots", "href": "#"},
    {"text": "offices", "href": "#"},
    {"text": "locals", "href": "#"},
    {"text": "investments", "href": "#"},
  ]
  const locations_links = [
    {"text": "luxery homes in valencia", "href": "#"},
    {"text": "terms of puzol", "href": "#"},
    {"text": "villas in los monasterios", "href": "#"},
    {"text": "alfinach", "href": "#"},
    {"text": "monte picayo", "href": "#"},
    {"text": "santa barbara", "href": "#"}
  ]


  return (
    <section className="footer" id="footer">
        <div className="footer_top flex-center flex-center-column">
          <div className="footer_top_main">
            <div className="footer_top_main_1">
              <FooterLinks title="company" links={company_links}/>
              <FooterLinks title="services" links={services_links}/>
            </div>
            <div className="footer_top_main_2">
            <FooterLinks title="other properties"links={other_properties_links}/>
            </div>
            <div className="footer_top_main_3">
            <FooterLinks title="locations"links={locations_links}/>
            </div>
            <div className="footer_top_main_3">
              <h3 className="footer_top_main_3_h3">contact</h3>
              <div className="footer_top_main_3_group">
                <p className="footer_top_main_3_contact">(+34) 96 368 77 11</p>
                <p className="footer_top_main_3_contact">C/ de Roger de Llòria, 10, 1º, 1, 46002<br />Valencia</p>
              </div>
              <div className="footer_top_main_3_group">
                <p className="footer_top_main_3_contact">(+34) 96 142 3000</p>
                <p className="footer_top_main_3_contact">46530 Puzol, Valencia</p>
              </div>
              <p className="footer_top_main_3_contact">contacto@monserrateinmobiliaria.com</p>
              <div className="footer_top_main_3_contact_socials">
                <div className="svg-container flex-center">
                  <img href="#" className="social_media_logo facebook" src={facebook} alt="facebook logo" />
                </div>
                <div className="svg-container flex-center">
                  <img href="#" className="social_media_logo" src={linkedin} alt="linkedin logo" />
                </div>
                <div className="svg-container flex-center">
                  <img href="#" className="social_media_logo" src={instagram} alt="instagram logo" />
                </div>
                <div className="svg-container flex-center">
                  <img href="#" className="social_media_logo" src={youtube} alt="youtube logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_top_copyright">Copyright © 2014 - 2024 Monserrate</div>
          <div className="footer_top_policies">
            <ul className="footer_top_policies_ui">
              <li>General Conditions of Use</li>
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom flex-center flex-center-column">
          <img className="logo" src={logo} alt="logo" />
        </div>
    </section>
  )
};

export default Footer;