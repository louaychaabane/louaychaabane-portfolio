import React from "react";

export default function CertificationCard({ logo, name, date, verificationLink }) {
  return (
    <div className="cert-card">
      <img src={require(`../images/${logo}`)} alt={name} />
      <h4>{name}</h4>
      <small>{date}</small>
      {verificationLink && (
        <p>
          <a href={verificationLink} target="_blank" rel="noopener noreferrer">
            Verify Certificate
          </a>
        </p>
      )}
    </div>
  );
}
