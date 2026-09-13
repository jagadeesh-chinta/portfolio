import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { Award, ShieldCheck } from 'lucide-react';
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

// Map specific certifications to specific themes for the UI
const getCertTheme = (title) => {
  const t = title.toLowerCase();
  if (t.includes('python')) {
    return { color: 'mustard', label: 'CORE PROGRAMMING' };
  }
  if (t.includes('full stack') || t.includes('web')) {
    return { color: 'sage', label: 'FULL STACK & WEB TECHNOLOGIES' };
  }
  return { color: 'rose', label: 'SOFTWARE ENGINEERING' };
};

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        
        {/* Header Section matching reference */}
        <motion.div 
          className="about-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill-centered" style={{ color: 'var(--mustard-dark)', borderColor: 'var(--mustard)', background: 'var(--mustard-subtle)' }}>
            PROFESSIONAL VERIFICATION
          </span>
          
          <h2 className="about-main-heading">
            Recognized <span className="highlight-text">Certifications</span>
          </h2>
          
          <p className="about-subtitle">
            Formal technical certifications completed across programming languages, software<br className="desktop-only"/>
            engineering methodologies, and modern full-stack web technologies.
          </p>
        </motion.div>

        {/* Certifications Grid matching reference */}
        <motion.div 
          className="cert-masonry-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, idx) => {
            const theme = getCertTheme(cert.title);
            
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants} 
                className={`cert-ref-card bg-light-${theme.color}`}
              >
                <div className="cert-ref-top">
                  <div className={`cert-ref-icon bg-solid-${theme.color}`}>
                    <Award size={20} color="white" />
                  </div>
                  <span className={`cert-category-pill text-${theme.color} border-${theme.color}`}>
                    {theme.label}
                  </span>
                </div>
                
                <div className="cert-ref-content">
                  <h3 className="cert-ref-title">{cert.title}</h3>
                  
                  <div className="cert-ref-verified">
                    <ShieldCheck size={14} className={`icon-${theme.color}`} />
                    <span>Verified Curriculum Completion ({cert.issuer})</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
