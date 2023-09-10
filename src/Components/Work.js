import React from "react";
import WorkCard from "./WorkCard";

export default function () {
    return (
        <div className="work component" >
            <h1>Work Experience<span className="color-p">.</span></h1>
            <div className="work-cards">

                <WorkCard
                    logo="ca.png"
                    company="Club Africain FC"
                    title="Graphic Designer"
                    years="2017-2020"
                    description="Designed eye-catching social media graphics and products for the club store. Contributed to the club identity through impactful visual creations."
                />
                <WorkCard
                    logo="fiverr.png"
                    company="FIVERR"
                    title="Front-End Developer & Graphic Designer Freelancer"
                    years="2020-NOW"
                    description="I specialize in Front-End React.js development and creative Graphic Design. My expertise lies in crafting captivating front-end applications and designing logos, brands, and visual identities that leave a lasting impression."
                />
            </div>
        </div>
    )
}