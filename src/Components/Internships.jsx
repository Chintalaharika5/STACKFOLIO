import React from "react";
import "../styles/internships.css";

export default function Experience() {
  const experiences = [
    {
      company: "Infosys Springboard | AI Intern",
      date: "Mar 2024 – Jun 2024",
      desc: [
        "Developed an 'Energy Consumption Forecasting System' as part of an Internship 4.0 project.",
        "Enhanced practical skills in software development lifecycle and backend logic implementation.",
      ],
    },
    {
      company: "Google | AICTE | AI ML Internship",
      date: "Jul 2024 – Sep 2024",
      desc: [
        "Gained exposure to cloud-based application development, including database integration and API usage with tools like TensorFlow.",
      ],
    },
    {
      company: "Microsoft | AICTE | AI Azure Internship",
      date: "Jun 2025 – Jul 2025",
      desc: [
        "Learned cloud deployment and AI/ML integration with backend technologies.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span>{exp.date}</span>
            </div>
            <ul>
              {exp.desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
