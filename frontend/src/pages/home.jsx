import {
    Hero, FeaturedListings, Locations, SellProperty, Reviews, Why, Campolivar, Services, RealEstate
  } from "../containers/home";

const Home = () => {

    return (
        <>
            <Hero />
            <FeaturedListings />
            <Locations />
            <SellProperty />
            <Reviews />
            <Why />
            <Campolivar />
            <Services />
            <RealEstate />
        </>
    )
}

export default Home