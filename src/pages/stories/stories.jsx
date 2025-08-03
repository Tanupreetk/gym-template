import React from "react";
import "./stories.css";
const stories = [
    {
        title: "Strength Success",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",
        thumbnail: "https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote: "Lost 10kg in 3 months with consistent training!"

    },
    {
        title: "Boxing Champion",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",

        thumbnail: "https://images.unsplash.com/photo-1640888652225-529c8cd4be50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote:"My stamina improved drastically."
    },
    {
        title: "Strength Success",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",
        thumbnail: "https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote: "Lost 10kg in 3 months with consistent training!"

    },
    {
        title: "Boxing Champion",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",

        thumbnail: "https://images.unsplash.com/photo-1640888652225-529c8cd4be50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote:"My stamina improved drastically."
    },
    {
        title: "Strength Success",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",
        thumbnail: "https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote: "Lost 10kg in 3 months with consistent training!"

    },
    {
        title: "Boxing Champion",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",

        thumbnail: "https://images.unsplash.com/photo-1640888652225-529c8cd4be50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote:"My stamina improved drastically."
    },
    {
        title: "Strength Success",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",
        thumbnail: "https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote: "Lost 10kg in 3 months with consistent training!"

    },
    {
        title: "Boxing Champion",
        videoUrl: "https://youtu.be/2BDMenJJS0A?si=MmrRxtKk9_nwBWeu",

        thumbnail: "https://images.unsplash.com/photo-1640888652225-529c8cd4be50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote:"My stamina improved drastically."
    }
]
const Stories = () => {
    return (
        <div className="stories-section">
            <p className="heading">Success Stories</p>
            <p id="stories-subtitle">Celebrate the achievements of our members and be inspired by their fitness success.</p>
            <div className="stories-grid">
        {stories.map((s,index)=>(
            <div className="story-card" key={index}>
                <div className="video-thumb"><img src={s.thumbnail} alt="Story" />
                <a href={s.videoUrl} target="_blank" className="play-button">▶ </a></div>
                <h3>{s.title}</h3>
                <p className="quote">"{s.quote}"</p>
            </div>
        ))}
            </div>
        </div>
    )
}
export default Stories;
