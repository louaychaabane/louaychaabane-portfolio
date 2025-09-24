import React from "react";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <div className="certifications component">
      <h1>
        Certifications<span className="color-p">.</span>
      </h1>
      <div className="cert-cards">
        <CertificationCard
          logo="oracle.png"
          name="Oracle Cloud Infrastructure 2025 Multicloud Architect Professional"
          date="2025"
          verificationLink="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CF3CFF6D34A6FA6CABD1AC56261364D409A18C6ADE5F91F42A17B2BD8DD8737A"
        />
        <CertificationCard
          logo="oracle.png"
          name="Oracle Cloud Infrastructure 2025 Certified DevOps Professional"
          date="2025"
          verificationLink="https://catalog-education.oracle.com/ords/certview/sharebadge?id=0A2D345FEDDA555516ACE2A93F9EF55527B51F2D86FDC204DE86FE690C275D3E"
        />
        <CertificationCard
          logo="oracle.png"
          name="Oracle Cloud Infrastructure 2025 Certified Foundations Associate"
          date="2025"
          verificationLink="https://catalog-education.oracle.com/ords/certview/sharebadge?id=E44ACDA3C95BB41AF96723FFEBC062EA8CE89BC358B003AD4BF507A4D112C81E"
        />
        <CertificationCard
          logo="coursera.png"
          name="Supervised Machine Learning: Regression and Classification"
          date="2023"
          verificationLink="https://coursera.org/verify/NXQ7PYJEZ6SD"
        />
        <CertificationCard
          logo="cisco.png"
          name="Oracle Cloud Infrastructure Foundations Associate"
          date="2022"
          verificationLink="https://www.credly.com/badges/3e96fa20-a66f-423c-af2e-365616a55c7d"
        />
      </div>
    </div>
  );
}
