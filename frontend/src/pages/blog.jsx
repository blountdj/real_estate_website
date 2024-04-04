import BackgroundHeader from '../components/background-header/background-header'
import Navbar from '../components/navbar/navbar'

import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'

import './blog.scss'


const Blog = () => {

    const OPTIONS = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <Navbar layout="home" scroll_threshold="200" />
            <BackgroundHeader section="blog" h1_type="_1" h1="Blog"/>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </>
    )
}

export default Blog