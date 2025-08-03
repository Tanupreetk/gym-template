import React from "react";
import './footer.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Contact = [
    {
        graphic:"email.png",
        content : "Gym@email.com"
    },
    {
        graphic:"phone.png",
        content : "+91 9911027135"
    },
    {
        graphic:"location.png",
        content : "Lorem ipsum dolor sit amet, consectetur"
    }
]
const Footer=()=>{
    return(
        <div className="footer-section">
            
                <p id="gym-name">
                    Flux <br />Fitness
                </p>
                <ul id="quick-links">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/">Amenities</Link></li>
                    <li><Link to = "/">Contact Us</Link></li>
                    <li><Link to = "/">Stories</Link></li>
                    <li><Link to = "/">Gallery</Link></li>
                    <li><Link to = "/">Privacy Policy</Link></li>
                </ul>

           
            <div className="contact-us">
                <p className="content-bold" style={{color: "#A07F5D"}}>Contact Us</p>
                {Contact.map(c => (
                    <div className="contact">
                        <img src={c.graphic}  className="contact-icon"/>
                        <p className="c-content">{c.content}</p>
                    </div>
                ))}
                <div id="icons">
                    <img src="insta.png" alt="insta" className="icon" />
                    <img src="facebook.png" alt="facebook" className="icon" /><img src="youtube.png" alt="youtube" className="icon" id = "youtube" />
                </div>
            </div>
        </div>

    )
}
export default Footer;