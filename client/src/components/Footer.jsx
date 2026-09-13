import { personalInfo } from '../data/portfolio';
import { Link, Code, Mail, ArrowUp } from 'lucide-react';
import '../styles/sections.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="footer-premium">
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div className="footer-grid">
          
          {/* Left Column: Brand & Bio */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-circle">
                {personalInfo.name.charAt(0)}
              </div>
              <h2 className="footer-name">
                {personalInfo.name}
              </h2>
            </div>
            
            <p className="footer-bio">
              Software Engineer & Full Stack Developer based in Rajam, India. 
              Passionate about machine learning, structured data engineering, and modern web applications.
            </p>
            
            <div className="footer-socials">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                <Link size={18} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                <Code size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="footer-social-btn">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column: Links */}
          <div className="footer-links-col">
            <h3 className="footer-heading text-coral">EXPLORE</h3>
            <div className="footer-nav-grid">
              <div className="nav-col">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="nav-col">
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <a href="#achievements">Achievements</a>
                <a href="#certifications">Certifications</a>
              </div>
            </div>
          </div>

          {/* Right Column: Location & Top */}
          <div className="footer-location-col">
            <h3 className="footer-heading text-mustard">LOCATION</h3>
            <p className="footer-location-text">
              Rajam, Andhra Pradesh, India
            </p>
            
            <button onClick={scrollToTop} className="btn-back-to-top">
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </div>
          {/* Omitted "Designed & Developed with..." as requested */}
        </div>
      </div>
    </footer>
  );
}
