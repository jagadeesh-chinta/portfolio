import { personalInfo, quickFacts } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle">
              A software engineer who builds things that work.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal>
            <p className="about-text">
              {personalInfo.aboutDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-facts reveal-stagger">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="about-fact-card reveal">
                  <div className="about-fact-label">{fact.label}</div>
                  <div className="about-fact-value">{fact.value}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
