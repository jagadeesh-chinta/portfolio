import { certifications } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Professional Development</h2>
            <p className="section-subtitle">
              Courses and certifications I've completed.
            </p>
          </div>
        </ScrollReveal>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index}>
              <div className="certification-card">
                <div className="certification-icon" aria-hidden="true">
                  📜
                </div>
                <div>
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
