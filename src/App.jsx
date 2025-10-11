import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Internships from "./Components/Internships.jsx";



export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">
            <span className="red">C</span>HINTALA{" "}
            <span className="red">H</span>ARIKA
          </h1>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/internships">Internships</Link>
            
            <button onClick={toggleTheme} className="theme-btn">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} /> 
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>© 2025 Chintala Harika | Built with ❤️ and React</p>
          <button onClick={toggleTheme} className="theme-btn-footer">
            { darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </footer>
      </div>
    </Router>
  );
}
