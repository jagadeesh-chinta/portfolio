import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills & Toolkit">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-mustard">Capabilities</span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">The technologies and tools I use to build scalable applications.</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div key={idx} variants={cardVariants} className="skill-category-card glass-card">
              <h3 className="skill-category-title">{skillGroup.category}</h3>
              <div className="skill-badges-container">
                {skillGroup.items.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="skill-badge"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
