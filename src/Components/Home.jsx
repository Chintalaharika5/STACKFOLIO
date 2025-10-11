import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
    <section>
      {/* 🏠 Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Hello, I'm</h2>
            <h1>Chintala Harika</h1>

            {/* Typing Animation */}
            <img
              src="https://readme-typing-svg.herokuapp.com?lines=Computer+Science+Engineer;Full+Stack+Java+Developer;AI+%26+ML+Explorer;Creative+Tech+Innovator&center=true&width=500&height=45"
              alt="Typing Animation"
            />

            <p>
              I’m a B.Tech Computer Science student passionate about Full Stack Development
              and Artificial Intelligence. With hands-on experience from multiple internships
              and innovative projects, I focus on creating intelligent, reliable, and
              user-centered solutions that bridge technology with real-world impact.
            </p>

            <div className="hero-buttons">
              <a href="/RESUME.pdf" className="btn">
                📄 Resume
              </a>
              <a href="#contact" className="btn secondary">
                🤝 Hire Me
              </a>
            </div>

            {/* 🌐 Social Links */}
            <div className="socials">
              <a href="https://github.com/Chintalaharika5">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/harika-chintala-23b37b272">
                <Linkedin />
              </a>
              <a href="mailto:chintalaharik5@gmail.com">
                <Mail />
              </a>
            </div>
          </motion.div>

          {/* 📊 Stats Section */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="stat-card">
              <h3>3+</h3>
              <p>Internships</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Skills</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Workshops</p>
            </div>
          </motion.div>
        </div>

        {/* 📩 Contact Section */}
        <Contact />
      </section>
    </section>
  );
}
