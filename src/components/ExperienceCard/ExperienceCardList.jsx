import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceCard.css";

export default function ExperienceList({ data }) {
  return (
    <section className="xp-wrap" aria-label="Experience timeline">
      <div className="xp-container">
        {data.map((exp, i) => (
          <ExperienceCard
            key={i}
            experience={exp}
            isLast={i === data.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
