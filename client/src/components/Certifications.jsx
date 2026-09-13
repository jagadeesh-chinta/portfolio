import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { Award } from 'lucide-react';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-mustard">Learning</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}
        >
          {certifications.map((cert, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="glass-card"
              style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}
            >
              <div className="cert-icon" style={{ background: 'var(--mustard-subtle)', padding: '12px', borderRadius: '50%', color: 'var(--mustard)' }}>
                <Award size={24} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title" style={{ fontSize: '1.1rem', color: 'var(--burgundy)', marginBottom: '4px' }}>
                  {cert.title}
                </h3>
                <p className="cert-issuer" style={{ color: 'var(--text-soft)', fontSize: '0.9rem', fontWeight: '600' }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
