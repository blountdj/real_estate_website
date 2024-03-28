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
          
          <Route path="/" element={<LayoutFull>
            <Home />
          </LayoutFull>}/>

          <Route path="/properties" element={<LayoutFull>
            <Properties />
          </LayoutFull>}/>

          <Route path="/properties/:propertyId" element={<LayoutPadding>
            <PropertyPage />
          </LayoutPadding>}/>

          <Route path="/services" element={<LayoutFull>
            <ServicesPage />
          </LayoutFull>}/>

          <Route path="/who_are_We" element={<LayoutFull>
            <WhoAreWe />
          </LayoutFull>}/>

          <Route path="/expertise" element={<LayoutFull>
            <Expertise />
          </LayoutFull>}/>

          <Route path="/locations" element={<LayoutFull>
            <Locations />
          </LayoutFull>}/>

          <Route path="/blog" element={<LayoutFull>
            <Blog />
          </LayoutFull>}/>

          <Route path="/contact" element={<LayoutFull>
            <Contact />
          </LayoutFull>}/>

          <Route path="/privacy_policy" element={<LayoutPadding>
            <Privacy />
          </LayoutPadding>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
