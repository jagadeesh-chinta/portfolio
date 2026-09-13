import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';
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

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-sage">Academic</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((edu, i) => (
            <motion.div key={i} variants={itemVariants} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-icon-bg bg-sage">
                  <GraduationCap size={20} color="#fff" />
                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <span className="timeline-date">{edu.startDate} – {edu.endDate}</span>
                </div>
                <h4 className="timeline-subtitle">{edu.institution} • {edu.location}</h4>
                <div className="timeline-grade">
                  <span className="font-serif text-burgundy font-bold">{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
