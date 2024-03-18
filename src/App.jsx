import { useState } from 'react'
import {
  Hero, FeaturedListings, Properties
} from "./containers";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Hero />
      <FeaturedListings />
      <Properties />
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
