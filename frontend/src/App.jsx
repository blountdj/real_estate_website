import LayoutPadding from "./layouts/layout_padding";
import LayoutFull from "./layouts/layout_full";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import {
//   Hero, FeaturedListings, Locations, SellProperty, Reviews, Why, Campolivar, Services, RealEstate
// } from "./containers";

import { Home, Properties, ServicesPage, WhoAreWe, Expertise, Locations, Blog, Contact, Privacy, PropertyPage } from './pages'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<LayoutFull logoProp="white-grey">
            <Home />
          </LayoutFull>}/>

          <Route path="/properties" element={<LayoutFull logoProp="grey">
            <Properties />
          </LayoutFull>}/>

          <Route path="/properties/:propertyId" element={<LayoutPadding logoProp="grey">
            <PropertyPage />
          </LayoutPadding>}/>

          <Route path="/services" element={<LayoutFull logoProp="grey">
            <ServicesPage />
          </LayoutFull>}/>

          <Route path="/who_are_We" element={<LayoutFull logoProp="grey">
            <WhoAreWe />
          </LayoutFull>}/>

          <Route path="/expertise" element={<LayoutFull logoProp="grey">
            <Expertise />
          </LayoutFull>}/>

          <Route path="/locations" element={<LayoutFull logoProp="grey">
            <Locations />
          </LayoutFull>}/>

          <Route path="/blog" element={<LayoutPadding logoProp="grey">
            <Blog />
          </LayoutPadding>}/>

          <Route path="/contact" element={<LayoutPadding logoProp="grey">
            <Contact />
          </LayoutPadding>}/>

          <Route path="/privacy_policy" element={<LayoutPadding logoProp="grey">
            <Privacy />
          </LayoutPadding>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
