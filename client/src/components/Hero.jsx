import { personalInfo, heroBadges } from '../data/portfolio';
import '../styles/hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content hero-stagger">
          <span className="hero-badge animate-fadeInUp" style={{ animationDelay: '0s' }}>
            {personalInfo.badge}
          </span>

          <h1 className="hero-heading animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="accent">{personalInfo.name}</span>.
          </h1>

          <p className="hero-subheading animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {personalInfo.title}
          </p>

          <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {personalInfo.description}
          </p>

          <div className="hero-ctas animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <a
              href={personalInfo.resumePdf}
              download="Jagadeesh_Chinta_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <button
            className="hero-connect animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
            onClick={scrollToContact}
          >
            Let's Connect →
          </button>
        </div>

        {/* Right visual */}
        <div className="hero-visual animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" aria-hidden="true"></div>
            <div className="hero-image-container">
              <img
                src={personalInfo.profileImage}
                alt="Jagadeesh Chinta – Software Engineer and Full Stack Developer"
                width="340"
                height="340"
                loading="eager"
              />
            </div>
            {/* Floating tech badges */}
            <div className="hero-badges" aria-hidden="true">
              {heroBadges.map((badge) => (
                <span key={badge} className="hero-tech-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
