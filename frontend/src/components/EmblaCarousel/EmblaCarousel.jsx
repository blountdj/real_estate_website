import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import './embla_base.scss'
import './embla_main.scss'


const EmblaCarousel = (props) => {
  const { page, options, elements } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, page)

  
  return (
    <section className={`${page}_embla embla`}>
        <div className={`${page}_embla__main_container embla__main_container`}>
     <PrevButton page={page} onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className={`${page}_embla__viewport embla__viewport`} ref={emblaRef}>
        <div className={`${page}_embla__container embla__container`}>
          {elements.map((index) => (
            <div className={`${page}_embla__slide embla__slide`} key={index}>{index}</div>
          ))}
        </div>
      </div>
      <NextButton page={page} onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
