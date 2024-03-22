import { useState } from 'react'
import {
  Hero, FeaturedListings, Locations, SellProperty, Reviews, Why, Campolivar, Services, RealEstate, Footer
} from "./containers";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <FeaturedListings />
      <Locations />
      <SellProperty />
      <Reviews />
      <Why />
      <Campolivar />
      <Services />
      <RealEstate />
      <Footer />
    </div>
  )
}

export default App
