import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import '../styles/projects.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="section bg-alt" aria-label="Projects">
        <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-coral">Showcase</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Full-stack applications designed and built from scratch.
          </p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className={`project-card-premium color-scheme-${i % 2 === 0 ? 'rose' : 'mustard'}`}
              onClick={!project.disableModal ? () => setSelectedProject(project) : undefined}
              style={project.disableModal ? { cursor: 'default' } : undefined}
              role={!project.disableModal ? "button" : undefined}
              tabIndex={!project.disableModal ? 0 : undefined}
              whileHover="hover"
            >
              <div className="project-card-inner">
                <div className="project-card-header">
                  <div className="project-icon-wrapper">
                    <div className="project-icon-shape"></div>
                  </div>
                  <motion.div 
                    className="project-arrow-icon"
                    variants={{ hover: { x: 5, y: -5 } }}
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle text-muted">{project.subtitle}</h4>
                
                <p className="project-overview">{project.overview}</p>
                
                <div className="project-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap', gap: '16px' }}>
                  <div className="project-tech-badges" style={{ margin: 0 }}>
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-chip">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-chip">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  
                  {project.disableModal ? (
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-view-details"
                          style={{ textDecoration: 'none', border: '1px solid var(--rose-pink)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-view-details highlighted"
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Code
                      </a>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-view-details"
                          style={{ textDecoration: 'none', border: '1px solid var(--rose-pink)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                      <span className="btn-view-details highlighted">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-glow-layer" />
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
