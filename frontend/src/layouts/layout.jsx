import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar"

const Layout = ({logoProp, children}) => {

    return (
        <div>
            <Navbar logo={logoProp} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout