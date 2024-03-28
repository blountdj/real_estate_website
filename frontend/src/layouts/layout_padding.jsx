import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar"
import './layout.scss'

const Layout = ({children}) => {

    return (
        <div>
            <div className="layout_main">
                <Navbar layout="main" />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout