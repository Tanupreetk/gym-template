import React from "react";
import Hero from "./hero-section";
import Programmes from "./programmes";
import Discover from "./discover";
import About from "./about-us";
import Trainers from "./trainers";
import Price from "./price";
import './home.css'
const Home=()=>{
    return(
        <div>
            <Hero />
            <Programmes />
            <Discover />
            <About />
            <Trainers />
            <Price />
        </div>
    )
}
export default Home;