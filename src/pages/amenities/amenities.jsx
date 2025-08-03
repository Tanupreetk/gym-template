import React from "react";
import "./amenities.css"
const container = [
    {
        img : "service1.svg",
        content : "AC Gym"
    },
    {
        img : "service2.svg",
        content : "Locker Room"
    },
    {
        img : "service3.svg",
        content : "Free Parking"
    },
    {
        img : "service1.svg",
        content : "AC Gym"
    },
    {
        img : "service2.svg",
        content : "Locker Room"
    },
    {
        img : "service3.svg",
        content : "Free Parking"
    }
]
const Amenities =()=>{
    return(
        <div style={{marginBottom:"60px"}}>
           <p className="heading">Offered At GymVita Connect</p> 
           <p className="text">Elevate Your Workout Experience With Our Facilities !</p>
           <div className="parent">

            {container.map(c=>(
         
            <div className="container"> <img src={c.img} alt="image" className="amenities-image" /> <p className="img-content">{c.content}</p>  </div>
        ))}
           </div>
           
       
        </div>
    )
}
export default Amenities;