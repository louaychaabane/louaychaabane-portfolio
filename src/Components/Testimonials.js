import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <div className="testimonials component">
            <h1>Testimonials<span className="color-p">.</span></h1>
            <div className="testimonial-cards">
                <TestimonialCard
                    flag="us"
                    name="iconicshopping"
                    description="This seller really delivers above and beyond your expectations. His professionalism and skill are unmatched. I love working with him! He will change your thoughts to reality. HE CAN DO IT. Thank you for always working with me and treating my project as if it were your own!"
                />
                <TestimonialCard
                    flag="de"
                    name="cwsport"
                    description="netter Kontakt, sehr gute Arbeit"
                />
                <TestimonialCard
                    flag="gb"
                    name="foodstorymedia"
                    description="Absolutely brilliant work and fast service! We are excited to continue working with Louay on future products"
                />
                <TestimonialCard
                    flag="ca"
                    name="positivityisco"
                    description="Louay has been very diligent in providing what i asked for and as such has come up with original work. Very happy with his work and would definitely recommend him to anyone for different graphic design projects."
                />
            </div>
            <div className="footer">
                <p><small>&copy; Copyright 2023, Louay Chaabane</small> </p>
            </div>
        </div>
    )
}