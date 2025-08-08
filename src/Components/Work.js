import React from "react";
import WorkCard from "./WorkCard";

export default function () {
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
          years="02/2024-09/2024"
          description="Applied advanced software engineering concepts to optimize system performance, achieving a 40% increase in efficiency. Implemented Agile and Kanban methodologies to streamline development workflows, ensuring faster and more organized delivery. Collaborated with cross-functional teams to develop and deliver high-quality backend features using Python, and contributed to the successful deployment of internal tools that are now used across multiple departments."
        />
        <WorkCard
          current={true}
          logo="fiverr.png"
          company="FIVERR"
          title="Full-Stack Developer & Graphic Designer Freelancer"
          years="2020-NOW"
          description="As a Full Stack Developer and freelancer, I have worked with over 300 clients worldwide, delivering web applications that combine strong functionality with clean, user-friendly design. With expertise in modern frontend technologies like React.js and backend frameworks such as Laravel, Node.js, and Python, I create scalable, efficient solutions while applying over seven years of professional graphic design experience to craft visually engaging and intuitive interfaces."
        />
      </div>
    </div>
  );
}
