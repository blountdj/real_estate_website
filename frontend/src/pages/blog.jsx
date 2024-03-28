import BackgroundHeader from '../components/background-header/background-header'
import Navbar from '../components/navbar/navbar'
import './blog.scss'

const Blog = () => {

    return (
        <>
            <Navbar layout="home" scroll_threshold="200" />
            <BackgroundHeader section="blog" h1_type="_1" h1="Blog"/>
        </>
    )
}

export default Blog