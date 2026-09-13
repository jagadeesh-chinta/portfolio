import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-alt" aria-label="Achievements">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-coral">Milestones</span>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}
        >
          {achievements.map((ach, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`glass-card ${ach.primary ? 'achievement-primary' : 'achievement-secondary'}`}
              style={{
                padding: '32px',
                border: ach.primary ? '2px solid var(--rose-pink)' : '1px solid var(--rose-pink-border)',
                background: ach.primary ? 'var(--bg-card-rose)' : 'var(--bg-glass)',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start'
              }}
            >
              <div className="achievement-icon" style={{ fontSize: '2.5rem' }}>{ach.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title" style={{ fontSize: '1.5rem', color: 'var(--burgundy)', marginBottom: '8px' }}>
                  {ach.title}
                </h3>
                <h4 className="achievement-subtitle" style={{ color: 'var(--rose-pink)', fontWeight: '700', marginBottom: '12px' }}>
                  {ach.subtitle}
                </h4>
                <p className="text-muted">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
