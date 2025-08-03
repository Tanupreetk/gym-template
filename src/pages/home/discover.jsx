import React from "react";
const amenities = [
    {
        img: "discover.png",
        heading: "Customized Diet Chart",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        img: "discover2.png",
        heading: "Customized Diet Chart",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        img: "discover3.png",
        heading: "Customized Diet Chart",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    { 
        img: "discover4.png",
        heading: "Customized Diet Chart",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    }

]
const Discover = () => {
    return (
        <div className="section">
            <p className="heading">
                Discover What Sets Us Apart
            </p>
            <p className="text">
                Welcome to our gym & fitness training centre. Sore today, strong Tomorrow.<br />
                Improve your fitness today.
            </p>
            <div className="main-container">
            {amenities.map(d => (
                
                <div className="discover">
                    <img src={d.img} alt="image" className="discover-img" />
                    <div className="discover-content ">
                        <p className="discover-heading content-bold">
                            {d.heading}
                        </p>
                        <p style={{ color: "#B5B5B5" }}>
                            {d.content}
                        </p>
                    </div>
                </div>
            ))}
            </div>
            <button className="view-btn">View Our Amenities</button>
        </div>
    )
}
export default Discover;