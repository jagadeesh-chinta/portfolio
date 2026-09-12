import { personalInfo, socialLinks } from '../data/portfolio';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-text">
          © {currentYear} <span>{personalInfo.name}</span>. Built with React & Express.
        </p>

        <div className="footer-links">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`} aria-label="Send email">
            Email
          </a>
        </div>

        <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
