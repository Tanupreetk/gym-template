import React from "react";
const trainer=[
    {
        img: "trainer1.png",
        name: "Priyanka Kapoor"
    },
    {
 img: "trainer2.png",
        name: "Priyanka Kapoor"
    },
    {
         img: "trainer1.png",
        name: "Priyanka Kapoor"
    },
    {
         img: "trainer2.png",
        name: "Priyanka Kapoor"
    },
    {
         img: "trainer1.png",
        name: "Priyanka Kapoor"
    },
    {
         img: "trainer2.png",
        name: "Priyanka Kapoor"
    }
]
const Trainers =()=>{
    return(
        <div>
            <p className="heading" id="trainers-heading">Our Trainers</p>
            <p className="text">Meet the best Trainers in the city and boost your workout</p>
            <div className="trainers">
                {trainer.map(t=>(

                <div className="trainer">
                <img className="trainer-img" src={t.img} alt="trainer" />
                <p>Priyanka Kapoor</p>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Trainers;