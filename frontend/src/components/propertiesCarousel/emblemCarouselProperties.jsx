import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import PropertyBlock from "../property_block/property_block";
import propertyDict from "../../data/propertyDict";
import './emblemCarouselProperties.scss';

const EmblemCarouselProperties = () => {
//   const { elements } = props

  const propertyArray = Object.entries(propertyDict);
  const carouselElements = propertyArray.map(([key, value]) =>  (
        <PropertyBlock id={key} page={'home'} property={value}  />
    )
  )

  const OPTIONS = {'align': 'start'}

  return (
    <EmblaCarousel page="properties" options={OPTIONS} elements={carouselElements} />
  )
}

export default EmblemCarouselProperties
