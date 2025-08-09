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
          name="Oracle Cloud Infrastructure Foundations Associate"
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
