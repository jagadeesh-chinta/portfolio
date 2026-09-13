import { motion } from 'framer-motion';
import { personalInfo, quickFacts } from '../data/portfolio';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } },
};

export default function About() {
  return (
    <section id="about" className="section bg-alt" aria-label="About Me">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill pill-coral">Discover</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-card p-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              I'm a Computer Science undergraduate at GMR Institute of Technology, specializing in <strong className="text-burgundy">Artificial Intelligence and Machine Learning</strong>. My core strengths lie in full-stack web development — building production-grade applications with React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-lg leading-relaxed text-muted mt-4">
              I won the <strong className="text-rose">Smart India Hackathon 2024</strong>, developing a gamified constitutional learning platform in a competitive national-level setting. I am driven by building software that solves real problems and I am always pushing to sharpen my engineering skills through hands-on projects, continuous learning, and exploring cloud infrastructures like AWS.
            </p>
          </motion.div>

          <motion.div 
            className="quick-facts-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {quickFacts.map((fact, i) => (
              <motion.div key={i} variants={itemVariants} className="fact-card glass-card">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
