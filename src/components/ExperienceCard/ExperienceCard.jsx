import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience, isLast = false }) {
  const {
    logo, role, company, company_url,
    duration, location, description
  } = experience;

  return (
    <article className={`xp-item ${isLast ? "xp-item--last" : ""}`}>
      {/* Logo */}
      <div className="xp-logo">
        <img
          src={require(`../../images/${logo}`)}
          alt={`${company} logo`}
        />
      </div>

      {/* Timeline rail + dot (drawn via CSS pseudo-elements) */}
      <div className="xp-rail" aria-hidden="true" />

      {/* Card */}
      <div className="xp-card">
        <header className="xp-card-head">
          <div className="xp-head-left">
            <h3 className="xp-role">{role}</h3>
            <a className="xp-company" href={company_url} target="_blank" rel="noreferrer">
              {company}
            </a>
          </div>
          <div className="xp-head-right">
            <div className="xp-duration">{duration}</div>
            <div className="xp-location">{location}</div>
          </div>
        </header>

        <p className="xp-desc">{description}</p>
      </div>
    </article>
  );
}
