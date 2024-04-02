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

import { Home, Properties, ServicesPage, WhoAreWe, Expertise, Locations, Blog, Contact, Privacy, PropertyPage, Cookies, Conditions, NotFound } from './pages'


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

          <Route path="/who_we_are" element={<LayoutFull>
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

          <Route path="/cookies_policy" element={<LayoutPadding>
            <Cookies />
          </LayoutPadding>}/>

          <Route path="/conditions" element={<LayoutPadding>
            <Conditions />
          </LayoutPadding>}/>

          <Route path="*" element={<LayoutPadding>
            <NotFound />
          </LayoutPadding>}/> {/* This route matches any path */}

        </Routes>
      </Router>
    </div>
  )
}

export default App
