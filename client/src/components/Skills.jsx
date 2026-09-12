import { skills } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Skills</span>
            <h2 className="section-title">What I Work With</h2>
            <p className="section-subtitle">
              Technologies and concepts I use to build applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {skills.map((category) => (
            <ScrollReveal key={category.category}>
              <div className="skill-category">
                <h3 className="skill-category-title">{category.category}</h3>
                <div className="skill-items">
                  {category.items.map((skill) => (
                    <span key={skill.name} className="skill-chip">
                      <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
