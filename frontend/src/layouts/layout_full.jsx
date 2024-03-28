import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar"
import './layout.scss'

const Layout = ({logoProp, children}) => {

    return (
        <div>
            <Navbar layout="home" logo={logoProp} />
            {children}

            <Footer />
        </div>
    )
}

export default Layout