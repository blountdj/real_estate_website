import LayoutPadding from "./layouts/layout_padding";
import LayoutFull from "./layouts/layout_full";
import { SharedStateProvider } from "./utilities/SharedStateContext";
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
      <SharedStateProvider>
        <Router>
          <Routes>
            
            <Route path="/" element={<LayoutFull>
              <Home />
            </LayoutFull>}/>

            <Route path="/properties" element={<LayoutFull>
              <Properties />
            </LayoutFull>}/>

            <Route path="/properties/:propertyId" element={<LayoutFull>
              <PropertyPage />
            </LayoutFull>}/>

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

            <Route path="/privacy_policy" element={<LayoutFull>
              <Privacy />
            </LayoutFull>}/>

            <Route path="/cookies_policy" element={<LayoutFull>
              <Cookies />
            </LayoutFull>}/>

            <Route path="/conditions" element={<LayoutFull>
              <Conditions />
            </LayoutFull>}/>

            <Route path="*" element={<LayoutFull>
              <NotFound />
            </LayoutFull>}/> {/* This route matches any path */}

          </Routes>
        </Router>
      </SharedStateProvider>
    </div>
  )
}

export default App
