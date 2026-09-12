import { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';
import '../styles/projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Projects</span>
            <h2 className="section-title">What I've Built</h2>
            <p className="section-subtitle">
              Full-stack applications designed and built from scratch.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <div
                className="project-card"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-card-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>

                <p className="project-overview">{project.overview}</p>

                <div className="project-techs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>

                <span className="project-click-hint">
                  Click to view details →
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
