import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import {   
  los_monasterios,
  alfinach,
  monte_picayo,
  valencia,
  other_urbanisations,
  controller_left,
  controller_right } from './imports';
  import './emblemCarouselLocations.scss';

const EmblemCarouselLocations = () => {


const locations = [
  {"title": "Los Monasterios", "img": los_monasterios},
  {"title": "Alfinach", "img": alfinach},
  {"title": "Monte Picayo", "img": monte_picayo},
  {"title": "Valencia", "img": valencia},
  {"title": "Other Urbanisations", "img": other_urbanisations}
]

  const carouselElements = locations.map((location, index) => (
    <div key={location.title} className="locations_element">

        <div className="locations_element_img_container">
          <img className="locations_element_img_container_img" src={location.img} alt={location.title} />
        </div>
   
        <div className="locations_element_text_container">
          <div className="locations_element_text_container_h3_container">
            <h3 className="locations_element_text_container_text">{location.title}</h3>
          </div>
          <button className="locations_element_text_container_button" onClick={() => window.location.href = '/properties'}>SEE PROPERTIES</button>
        </div>
      </div>
));

  const OPTIONS = {'align': 'start'}

  return (
    <EmblaCarousel page="locations" options={OPTIONS} elements={carouselElements} />
  )
}

export default EmblemCarouselLocations
