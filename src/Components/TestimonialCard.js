import React from "react";
export default function TestimonialCard(props){
    return(
        <div className="testimonial-card">
            <h1>"</h1>
            <p>{props.description}</p>
            <h3><span className="testimonial-span">@ </span>{props.name} <span className={`fi fi-${props.flag}`}></span> </h3>
        </div>
    )
}