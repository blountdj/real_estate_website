import Layout from "./layouts/layout";
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
          
          <Route path="/" element={<Layout logoProp="white-grey">
            <Home />
          </Layout>}/>

          <Route path="/properties" element={<Layout logoProp="grey">
            <Properties />
          </Layout>}/>

          <Route path="/properties/:propertyId" element={<Layout logoProp="grey">
            <PropertyPage />
          </Layout>}/>

          <Route path="/services" element={<Layout logoProp="grey">
            <ServicesPage />
          </Layout>}/>

          <Route path="/who_are_We" element={<Layout logoProp="grey">
            <WhoAreWe />
          </Layout>}/>

          <Route path="/expertise" element={<Layout logoProp="grey">
            <Expertise />
          </Layout>}/>

          <Route path="/locations" element={<Layout logoProp="grey">
            <Locations />
          </Layout>}/>

          <Route path="/blog" element={<Layout logoProp="grey">
            <Blog />
          </Layout>}/>

          <Route path="/contact" element={<Layout logoProp="grey">
            <Contact />
          </Layout>}/>

          <Route path="/privacy_policy" element={<Layout logoProp="grey">
            <Privacy />
          </Layout>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
