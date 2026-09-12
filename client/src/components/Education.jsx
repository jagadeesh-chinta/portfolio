import { education } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/education.css';

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Education</span>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-subtitle">
              My educational journey in computer science and engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <ScrollReveal key={index}>
              <div className="education-item">
                <div className="education-dot" aria-hidden="true"></div>
                <div className="education-card">
                  <h3 className="education-institution">{edu.institution}</h3>
                  <p className="education-degree">{edu.degree}</p>
                  <div className="education-meta">
                    <span>📅 {edu.startDate} – {edu.endDate}</span>
                    <span>📍 {edu.location}</span>
                    <span className="education-grade">🎓 {edu.grade}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
