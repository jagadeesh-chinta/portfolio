import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Code2, LayoutTemplate, Server, Database, HeartHandshake } from 'lucide-react';
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

// Map categories to specific themes based on the reference design
const getCategoryTheme = (category) => {
  if (category.toLowerCase().includes('programming')) {
    return { color: 'mustard', icon: <Code2 size={24} color="white" />, desc: 'Core algorithmic and systems logic' };
  }
  if (category.toLowerCase().includes('frontend')) {
    return { color: 'rose', icon: <LayoutTemplate size={24} color="white" />, desc: 'Modern, responsive, semantic web interfaces' };
  }
  if (category.toLowerCase().includes('backend')) {
    return { color: 'coral', icon: <Server size={24} color="white" />, desc: 'Robust server-side architecture' };
  }
  if (category.toLowerCase().includes('database') || category.toLowerCase().includes('tool')) {
    return { color: 'sage', icon: <Database size={24} color="white" />, desc: 'Data structuring and developer workflows' };
  }
  return { color: 'burgundy', icon: <HeartHandshake size={24} color="white" />, desc: 'Interpersonal strengths and leadership' };
};



export default function Skills() {
  return (
    <section id="skills" className="section bg-alt" aria-label="Skills & Toolkit">
      <div className="container">
        
        {/* Header Section matching reference */}
        <motion.div 
          className="about-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill-centered" style={{ color: 'var(--mustard-dark)', borderColor: 'var(--mustard)', background: 'var(--mustard-subtle)' }}>
            TECHNICAL COMPETENCIES
          </span>
          
          <h2 className="about-main-heading">
            My <span className="highlight-text">Toolkit</span> &amp; Capabilities
          </h2>
          
          <p className="about-subtitle">
            An organized view of programming languages, frameworks, developer tools, and<br className="desktop-only"/>
            interpersonal strengths verified from my coursework and project builds.
          </p>
        </motion.div>

        {/* Skills Grid matching reference */}
        <motion.div 
          className="skills-masonry-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skillGroup, idx) => {
            const theme = getCategoryTheme(skillGroup.category);
            
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants} 
                className={`skill-ref-card bg-light-${theme.color}`}
              >
                <div className="skill-ref-header">
                  <div className={`skill-ref-icon bg-solid-${theme.color}`}>
                    {theme.icon}
                  </div>
                  <div className="skill-ref-title-container">
                    <h3 className="skill-ref-title">{skillGroup.category}</h3>
                    <p className="skill-ref-desc">{theme.desc}</p>
                  </div>
                </div>
                
                <div className="skill-ref-badges">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="skill-ref-badge">
                      <span className={`badge-dot dot-${theme.color}`}></span>
                      <span className="badge-text">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
