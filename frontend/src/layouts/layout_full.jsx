import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar"
import './layout.scss'

const Layout = ({children}) => {

    return (
        <div>
            {/* <Navbar layout="home" logo={logoProp} /> */}
            {children}

            <Footer />
        </div>
    )
}

export default Layout