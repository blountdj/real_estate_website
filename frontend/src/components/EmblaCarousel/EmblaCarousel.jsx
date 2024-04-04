import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import './base.scss'
import './embla.scss'


const EmblaCarousel = (props) => {
  const { options, elements } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  
  return (
    <section className="embla">
        <div className="embla__main_container">
     <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {elements.map((index) => (
            <div className="embla__slide" key={index}>{index}</div>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>


        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
    </section>
  )
}

export default EmblaCarousel
