import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="projects component">
            <h1>Projects<span className="color-p">.</span></h1>
            {/* <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p> */}
            <div className="work-cards">
                <ProjectCard
                    image1="gct1.png"
                    image2="gct2.png"
                    image3="gct3.png"
                    title="Recruitment.AI"
                    description="Transforming the hiring process, the Recruitment AI platform streamlines candidate screening, resume analysis, and interview scheduling. Leveraging AI-driven insights, it quickly identifies top talent, reducing manual workload and improving decision-making. HR teams gain powerful tools for filtering applicants, tracking progress, and enhancing collaboration, fostering a more efficient and data-driven recruitment workflow."
                    tag1="React"
                    tag2="MongoDB"
                    tag3="Flask"
                />
                <ProjectCard
                    image1="wc1.png"
                    image2="wc2.png"
                    image3="wc3.png"
                    title="WorldCup - Tunisia"
                    description="During the 2022 World Cup, a dedicated web platform is tailored to Tunisian supporters, offering them comprehensive access to live scores, goal scorers, match summaries, and insights on the team and staff. The platform also enables convenient online ticket bookings, ensuring an immersive and user-friendly experience for all football enthusiasts."
                    tag1="php"
                    tag2="mySql"
                    tag3="css"
                />
                <ProjectCard
                    image1="d@h.png"
                    image2="d@h2.png"
                    image3="d@h3.png"
                    title="Diabetes @ Home"
                    description="A multifaceted web platform for diabetes care and management. Patients can predict risks, track health metrics, and engage with a chatbot. Doctors access records, communicate with patients, and offer guidance, fostering collaborative and predictive healthcare. Transforming diabetes care through seamless interaction and predictive insights."
                    tag1="Laravel"
                    tag2="mySql"
                    tag3="OpenAi"
                />
                

            </div>
        </div>
    )
}