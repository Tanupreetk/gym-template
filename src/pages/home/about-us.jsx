import React from "react";
const About = () => {
    return (
        <div>
            <div className="content-bold" id="timings">
                <p className="available">We are availabe:</p>
                <div className="timings">
                    <img class="img" src="days.png" alt="days" />
                        <p class="timings-content ">Sunday-Monday</p>
                </div>
                <div class="timings">
                    <img class="img" src="time.png" alt="time" />
                        <p class="timings-content">7AM - 11 PM</p>
                </div>

            </div>
            <div class="about-us">
        <div id="aboutus-content">
            <p class="heading" id="about-heading">About Us</p>
            <p style={{color: "#EEE"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
        <img id="about-img" src="aboutus.png" alt="about us" />
    </div>

        </div>
    )
}
export default About;