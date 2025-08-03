import React from "react";
import { Element } from 'react-scroll';

const Programme = [
    {
        graphic: "graphic.png",
        no: "01",
        title: "Muscle Gain",
        content: "This section tells us about muscle gain. This is first section."
    },
    {
        graphic: "graphic.png",
        no: "02",
        title: "Fitness Classes",
        content: "This section tells us about fitness classes. This is second section."
    },
    {
        graphic: "graphic.png",
        no: "03",
        title: "Health Care",
        content: "This section tells us about health care. This is third section."
    },
    {
        graphic: "graphic.png",
        no: "04",
        title: "Weight Loss",
        content: "This section tells us about weight loss. This is fourth section."
    },
    {
        graphic: "graphic.png",
        no: "05",
        title: "Aerobics and Zumba",
        content: "This section tells us about Aerobics and zumba. This is fifth section."
    },
    {
        graphic: "graphic.png",
        no: "06",
        title: "Diet Programme",
        content: "This section tells us about diet programme. This is sixth section."
    },
    {
        graphic: "graphic.png",
        no: "07",
        title: "Body Tone- Up",
        content: "This section tells us about body tone up. This is seventh section."
    },
    {
        graphic: "graphic.png",
        no: "08",
        title: "Personal Training",
        content: "This section tells us about personal training. This is eighth section."
    }
]
const Programmes = () => {
    return (
        <Element name="what-we-offer">
            <p className="heading">
                What We Offer
            </p>
            <p className="text">Welcome to our gym & fitness training centre. Sore today, strong Tomorrow<br /> Improve your
                fitness today.</p>
            <div className="parent-container">

                <div className="programmes">
                    {Programme.map(p => (
                        <div className="boxes">
                            <div className="first">
                                <img src={p.graphic} class="graphic" alt="graphic" />
                                <p className="box-no">{p.no}</p>
                            </div>
                            <p className="box-heading content-bold">{p.title}</p>
                            <p className="box-content">{p.content}</p>
                        </div>
                    ))}
                </div>
            </div>

        </Element>
    )
}
export default Programmes;