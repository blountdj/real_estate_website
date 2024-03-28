import {
    Hero, FeaturedListings, Locations, SellProperty, Reviews, Why, Campolivar, Services, RealEstate
  } from "../containers/home";
  import Navbar from "../components/navbar/navbar";

const Home = () => {

    return (
        <>
            <Navbar layout="home" scroll_threshold="200" />
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