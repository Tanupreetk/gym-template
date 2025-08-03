import React from "react";
import Hero from "./hero-section";
import Programmes from "./programmes";
import Discover from "./discover";
import About from "./about-us";
import Trainers from "./trainers";
import Price from "./price";
import './home.css'
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Home=()=>{
    
  const location = useLocation();
  const offerRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "what-we-offer") {
      const targetPosition = offerRef.current.offsetTop;
      smoothScrollTo(targetPosition, 1200); 
    }
  }, [location]);

  const smoothScrollTo = (target, duration) => {
    const start = window.scrollY || window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, start + distance * percent);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };
    return(
        <div>
            <Hero />
            <div ref={offerRef}>
        <Programmes />
      </div>
            <Discover />
            <About />
            <Trainers />
            <Price />
        </div>
    )
}
export default Home;