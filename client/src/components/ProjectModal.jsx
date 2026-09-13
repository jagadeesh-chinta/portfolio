import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';
import '../styles/projects.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Disable body scroll and hide navbar when modal is open
    document.body.classList.add('modal-open');
    return () => {
      // Re-enable body scroll and show navbar when modal is closed
      document.body.classList.remove('modal-open');
    };
  }, []);
  // Flow removed per user request

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-header">
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-grid">
            <div className="modal-left">
              <div className="modal-section">
                <h4 className="modal-section-title">Overview</h4>
                <p className="modal-text">{project.overview}</p>
              </div>
              <div className="modal-section">
                <h4 className="modal-section-title">The Problem</h4>
                <p className="modal-text">{project.problem}</p>
              </div>
              <div className="modal-section">
                <h4 className="modal-section-title">The Solution</h4>
                <p className="modal-text">{project.solution}</p>
              </div>
              
              {/* Contribution moved to bottom full-width section */}
            </div>

            <div className="modal-right">
              <div className="modal-section">
                <h4 className="modal-section-title">Key Features</h4>
                <ul className="modal-list">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="skill-badges-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', fontWeight: '600' }}>
                      <span style={{ color: 'var(--coral)', fontSize: '1.2rem', lineHeight: '1' }}>•</span> {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.liveDemo) && (
                <div className="modal-actions" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem', boxShadow: '0 8px 25px rgba(224, 90, 136, 0.4)' }}>
                      <ExternalLink size={20} /> View Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem' }}>
                      <Code size={20} /> View Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="modal-section" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <h4 className="modal-section-title">My Contribution</h4>
            <p className="modal-text" style={{ maxWidth: '100%' }}>{project.contribution}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
