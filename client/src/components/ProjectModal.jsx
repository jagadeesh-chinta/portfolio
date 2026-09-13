import { motion } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';
import '../styles/projects.css';

export default function ProjectModal({ project, onClose }) {
  // Add specific visual flow for the BB84 chat app
  const renderFlow = () => {
    if (project.id === 'bb84-chat') {
      return (
        <div className="project-architecture-flow">
          <div className="flow-node">USER</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node">AUTHENTICATION</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node">REAL-TIME CHAT</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node highlight-node">SECURE KEY SIMULATION (BB84)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node">MESSAGE EXCHANGE</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="modal-content glass-card"
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
              
              {renderFlow()}

              <div className="modal-section">
                <h4 className="modal-section-title">My Contribution</h4>
                <p className="modal-text">{project.contribution}</p>
              </div>
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
                <div className="skill-badges-container">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {(project.github || project.liveDemo) && (
                <div className="modal-actions">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                      <ExternalLink size={18} /> View Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
                      <Code size={18} /> View Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
