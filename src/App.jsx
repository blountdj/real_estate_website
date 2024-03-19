import { useState } from 'react'
import {
  Hero, FeaturedListings, Locations
} from "./containers";
import {
  Carousel
} from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Hero />
      <FeaturedListings />
      <Carousel />
      <Locations />
      {/* <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer /> */}
    </div>
  )
}

export default App
