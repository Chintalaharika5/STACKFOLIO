import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: `Developed a professional, responsive personal portfolio using React, showcasing technical skills, projects, internships, and certifications. Implemented interactive features including a contact form, dynamic theme toggling, and responsive design for seamless UX across devices. Demonstrates full-stack development expertise and web application best practices.`,
    },
    {
      title: "SkillWise (Ongoing Project)",
      desc: `Developing an AI-driven career recommendation system using Java (Spring Boot) for backend, React for frontend, and MySQL, with a Python AI microservice to analyze user skills and recommend optimal tech career paths. Focused on building a full-stack, scalable, and real-world solution that integrates AI with web technologies. Demonstrates full-stack Java expertise, AI integration, and practical problem-solving.`,
    },
    {
      title: "Breast Cancer Prediction Using Histopathological Images",
      desc: `Designed and compared CNN, RFA, and SVM models using VGG16 for feature extraction, achieving high-accuracy diagnosis from histopathological images. Built a robust ML pipeline for automated medical image analysis. Demonstrates AI/ML model implementation, data preprocessing, and predictive analytics skills.`,
    },
    {
      title: "Energy Consumption Forecasting Model",
      desc: `Developed a predictive analytics system using time series ML techniques to forecast energy usage, optimize resource allocation, and support sustainable grid management. Integrated backend logic with database storage for real-time predictions. Highlights skills in machine learning, predictive analytics, and practical software deployment.`,
    },
    {
      title: "Plant Disease Classification Using CNN",
      desc: `Built a CNN-based model to classify plant leaf diseases using the PlantVillage dataset, achieving high accuracy with data augmentation and robust evaluation metrics. Automated agricultural disease detection for timely interventions. Demonstrates deep learning, computer vision, and applied ML expertise.`,
    },
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
