import Navbar from "../components/navbar/navbar"
import './notFound.scss'

const NotFound = () => { 

    return (
        <>
            <Navbar layout="contact" scroll_threshold="0" />
            <h1 className="notFound_h1">404 - Page not found</h1>
            <p  className="notFound_p">Use the menu above to see our available pages.</p>
        </>
    )
}

export default NotFound