import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Header =()=>{
    
  // const navigate = useNavigate();

  // const handleScrollToOffer = () => {
  //   navigate("/", { state: { scrollTo: "what-we-offer" } });
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
    return(
        
            <nav className="navbar">
                <img id="logo" src="/logo.svg" alt="logo" />
                <div className="hamburger" onClick={toggleMenu}>
                  <div className={isMenuOpen ? "bar open" : "bar"}></div>
                  <div className={isMenuOpen ? "bar open" : "bar"}></div>
                  <div className={isMenuOpen ? "bar open" : "bar"}></div>
                </div>
                <ul className={`nav-bar ${isMenuOpen ? "slide-in": ""}`}>
                    <li><a href = "/"> Home</a></li>
                     
    {/* <li onClick={handleScrollToOffer}>What We Offer</li> */}
                    <li><Link to = "/stories"> Stories</Link></li>
                    <li><Link to = "/Amenities"> Amenities</Link></li>
                    <li><Link to = "/Gallery">Gallery</Link></li>
                    <li><Link to = "/Contact">Contact Us</Link></li>
                    
                </ul>
            </nav>
       
    )
}
export default Header;