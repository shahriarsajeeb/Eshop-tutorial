import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage