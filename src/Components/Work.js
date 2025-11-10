import React from "react";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="work component">
      <h1>
        Work Experience<span className="color-p">.</span>
      </h1>
      <div className="work-cards">
        <WorkCard
          logo="ca.png"
          company="Club Africain FC"
          title="Graphic Designer"
          years="2017-2020"
          description="Designed visually striking social media graphics and merchandise for the club store, helping boost engagement and sales. Played a key role in shaping and strengthening the club’s brand identity through impactful, consistent, and memorable visual content."
        />
        <WorkCard
          logo="gct.png"
          company="GCT"
          title="Full-Stack Developer Intern"
          years="06/2023-08/2023"
          description="Developed a web application using React.js and Laravel that optimized employee service workflows and increased user satisfaction by 30%. Integrated APIs and databases to improve data access and reduce processing time by 20%, while enhancing the UI/UX and overall system responsiveness to further boost user engagement and satisfaction."
        />
        <WorkCard
          logo="nxci.png"
          company="NxC International"
          title="Software Engineer Intern"
          years="02/2024-07/2024"
          description="Applied advanced software engineering concepts to optimize system performance, achieving a 40% increase in efficiency. Implemented Agile and Kanban methodologies to streamline development workflows, ensuring faster and more organized delivery. Collaborated with cross-functional teams to develop and deliver high-quality backend features using Python, and contributed to the successful deployment of internal tools that are now used across multiple departments."
        />
        <WorkCard
          current={true}
          logo="nxci.png"
          company="NxC International"
          title="Software Engineer"
          years="08/2024-08/2025"
          description="Applied advanced software engineering concepts to optimize system performance, achieving a 40% increase in efficiency. Implemented Agile and Kanban methodologies to streamline development workflows, ensuring faster and more organized delivery. Collaborated with cross-functional teams to develop and deliver high-quality backend features using Python, and contributed to the successful deployment of internal tools that are now used across multiple departments."
        />
      </div>
    </div>
  );
}
