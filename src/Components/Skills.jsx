import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>SKILLS</h2>

      <div className="skills-category">
        <h3>PROGRAMMING LANGUAGES</h3>
        <div className="skills-container">
          <div className="skill-card">Java</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>WEB & FULL-STACK DEVELOPMENT</h3>
        <div className="skills-container">
          <div className="skill-card">Java Full-Stack</div>
          <div className="skill-card">Spring Boot</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">React.js</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>DATA STRUCTURES & ALGORITHMS</h3>
        <div className="skills-container">
          <div className="skill-card">Arrays</div>
          <div className="skill-card">Linked Lists</div>
          <div className="skill-card">Stack</div>
          <div className="skill-card">Queue</div>
          <div className="skill-card">Binary Trees</div>
          <div className="skill-card">Linear Search</div>
          <div className="skill-card">Binary Search</div>
          <div className="skill-card">Bubble Sort</div>
          <div className="skill-card">Quick Sort</div>
          <div className="skill-card">Prim's Algorithm</div>
          <div className="skill-card">Kruskal's Algorithm</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>DATABASE</h3>
        <div className="skills-container">
          <div className="skill-card">MySQL</div>
          <div className="skill-card">MongoDB</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>CORE IT</h3>
        <div className="skills-container">
          <div className="skill-card">Operating Systems</div>
          <div className="skill-card">Computer Org. & Architecture</div>
          <div className="skill-card">Computer Networks</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>AI & ML</h3>
        <div className="skills-container">
          <div className="skill-card">CNN</div>
          <div className="skill-card">RFA</div>
          <div className="skill-card">SVM</div>
          <div className="skill-card">Predictive Analytics</div>
          <div className="skill-card">Time Series Analysis</div>
        </div>
      </div>
    </section>
  );
}
