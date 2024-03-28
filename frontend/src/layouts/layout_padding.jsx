import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar"
import './layout.scss'

const Layout = ({logoProp, children}) => {

    return (
        <div>
            <div className="layout_main">
                <Navbar layout="main" logo={logoProp} />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout