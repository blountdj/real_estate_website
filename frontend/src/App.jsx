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

import { Home, Properties, Services, WhoAreWe, Expertise, Locations, Blog, Contact } from './pages'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Layout>
            <Home />
          </Layout>}/>

          <Route path="/properties" element={<Layout>
            <Properties />
          </Layout>}/>

          <Route path="/services" element={<Layout>
            <Services />
          </Layout>}/>

          <Route path="/who_are_We" element={<Layout>
            <WhoAreWe />
          </Layout>}/>

          <Route path="/expertise" element={<Layout>
            <Expertise />
          </Layout>}/>

          <Route path="/locations" element={<Layout>
            <Locations />
          </Layout>}/>

          <Route path="/blog" element={<Layout>
            <Blog />
          </Layout>}/>

          <Route path="/contact" element={<Layout>
            <Contact />
          </Layout>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
