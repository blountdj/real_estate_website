
import "./navbarLinks.scss";

const NavbarLinks = ({type}) => {

  return (
    <div className={`${type}_navbarlinks navbarlinks`} id="links">
      <ul className={`${type}_navbarlinks_ul navbarlinks_ul`} id="links_ul">
          <li><a href="/properties">Buy</a></li>
          <li><a href="/properties">Rent</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/who_we_are">Who we are</a></li>
          <li><a href="/expertise">Expertise</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
} 

export default NavbarLinks;