import React, { useState } from "react";
import "./gallery.css";
const imagesUrl = [
    {
        url: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1593476123561-9516f2097158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1593476123561-9516f2097158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    },{
        url: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
]
const Gallery = ()=>{
    const [isOpen, setIsOpen]=  useState(false);
    const[currentIndex, setCurrentIndex]=useState(0);
    const openModal = (index)=>{
        setCurrentIndex(index);
        setIsOpen(true);

    };
    const closeModal = ()=> setIsOpen(false);
    const prevImage=()=> {
        setCurrentIndex((prev)=>(prev - 1+imagesUrl.length)%imagesUrl.length);
    };
    const nextImage=()=>{
        setCurrentIndex((prev)=>(prev + 1)%imagesUrl.length);
    };
    return(
        <div className="gallery">
            <p className="heading" id="g-heading" >Gallery</p>
            <div className="collage">
        {imagesUrl.map((i,index)=>(
                <img src={i.url} key={index} className="image"
                onClick={()=>openModal(index)}/>
            ))}
            </div>
            {isOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img src={imagesUrl[currentIndex].url}className="modal-image" alt="" />
                    <span className="prev" onClick={prevImage}>&#10094;</span>
                    <span className="next" onClick={nextImage}>&#10095;</span>
                </div>
            )}
        </div>
    )
}
export default Gallery;