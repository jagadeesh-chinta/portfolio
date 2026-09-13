import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Briefcase } from 'lucide-react';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section bg-alt" aria-label="Experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-coral">Career</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experience.map((exp, i) => (
            <motion.div key={i} variants={itemVariants} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-icon-bg bg-coral">
                  <Briefcase size={20} color="#fff" />
                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-date">{exp.startDate} – {exp.endDate}</span>
                </div>
                <h4 className="timeline-subtitle">{exp.company} • {exp.location} ({exp.mode})</h4>
                <p className="timeline-description text-muted">{exp.description}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="skill-badges-container mt-4">
                  {exp.technologies.map((tech, j) => (
                    <span key={j} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
