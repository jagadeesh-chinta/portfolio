import { useEffect, useRef, useCallback } from 'react';
import '../styles/modal.css';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab') {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus the close button on open
    setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      ref={modalRef}
    >
      <div className="modal-content">
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-subtitle">{project.subtitle}</p>

        {project.overview && (
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p>{project.overview}</p>
          </div>
        )}

        {project.problem && (
          <div className="modal-section">
            <h4 className="modal-section-title">Problem</h4>
            <p>{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="modal-section">
            <h4 className="modal-section-title">Solution</h4>
            <p>{project.solution}</p>
          </div>
        )}

        {project.features && (
          <div className="modal-section">
            <h4 className="modal-section-title">Features</h4>
            <ul className="modal-features">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div className="modal-section">
            <h4 className="modal-section-title">Tech Stack</h4>
            <div className="modal-tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {project.contribution && (
          <div className="modal-section">
            <h4 className="modal-section-title">My Contribution</h4>
            <p>{project.contribution}</p>
          </div>
        )}

        <div className="modal-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub ↗
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Live Demo ↗
            </a>
          )}
          {!project.github && !project.liveDemo && (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Links will be added when the project is deployed.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
