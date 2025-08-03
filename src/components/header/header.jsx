import React from "react";
import './header.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Header =()=>{
    return(
        
            <nav className="navbar">
                <img id="logo" src="/logo.svg" alt="logo" />
                <ul className="nav-bar">
                    <li><Link to = "/"> Home</Link></li>
                    <li><Link to = "/"> What We Offer</Link></li>
                    <li><Link to = "/stories"> Stories</Link></li>
                    <li><Link to = "/Amenities"> Amenities</Link></li>
                    <li><Link to = "/Gallery">Gallery</Link></li>
                    <li><Link to = "/Contact">Contact Us</Link></li>
                    
                </ul>
            </nav>
       
    )
}
export default Header;