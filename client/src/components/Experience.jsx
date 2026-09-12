import { experience } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Work experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Experience</span>
            <h2 className="section-title">Where I've Worked</h2>
            <p className="section-subtitle">
              Professional experience and internships.
            </p>
          </div>
        </ScrollReveal>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <ScrollReveal key={index}>
              <div className="experience-item">
                <div className="experience-dot" aria-hidden="true"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <span>📅 {exp.startDate} – {exp.endDate}</span>
                    <span>📍 {exp.location}</span>
                    <span>🏢 {exp.mode}</span>
                    <span>📋 {exp.type}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  {exp.highlights && (
                    <ul className="experience-highlights">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="experience-techs">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="experience-tech-tag">{tech}</span>
                    ))}
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
