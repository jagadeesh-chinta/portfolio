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
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
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
                
                <div className="project-tech-badges">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-chip">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
              <div className="project-glow-layer" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
