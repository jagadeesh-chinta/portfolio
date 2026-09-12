import { achievements } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-label="Achievements">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Achievements</span>
            <h2 className="section-title">Recognition</h2>
            <p className="section-subtitle">
              Awards and accomplishments that reflect my dedication.
            </p>
          </div>
        </ScrollReveal>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index}>
              <div className={`achievement-card ${achievement.primary ? 'primary' : ''}`}>
                <span className="achievement-icon" aria-hidden="true">
                  {achievement.icon}
                </span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-subtitle">{achievement.subtitle}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
