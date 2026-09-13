import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { ArrowRight, Download, Terminal, Database, Cloud } from 'lucide-react';
import '../styles/hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      {/* Decorative Data Nodes & Blobs */}
      <div className="hero-background-layer" aria-hidden="true">
        <div className="blob-1" />
        <div className="blob-2" />
        <svg className="abstract-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(224, 90, 136, 0.04)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Left Column: Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge-dot animate-pulse"></span>
            {personalInfo.badge}
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-heading">
            Hi, I'm <br/>
            <span className="hero-name-gradient">{personalInfo.name}.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-subheading">
            Software Engineer <br/>
            <span className="text-muted" style={{ fontWeight: 500 }}>Full Stack Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-description">
            {personalInfo.description}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Explore My Work
              <ArrowRight size={18} />
            </button>
            <a href={personalInfo.resumePdf} download="Jagadeesh_Chinta_Resume.pdf" className="btn btn-secondary">
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-footer-cta">
            <button className="text-btn" onClick={scrollToContact}>
              Let's Connect <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual / Image */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-backdrop-glow" />
            
            {/* Tech decorative floaters */}
            <motion.div 
              className="tech-floater floater-1 glass-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Terminal size={24} color="var(--rose-pink)" />
            </motion.div>
            <motion.div 
              className="tech-floater floater-2 glass-card"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <Database size={24} color="var(--mustard)" />
            </motion.div>
            <motion.div 
              className="tech-floater floater-3 glass-card"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <Cloud size={24} color="var(--coral)" />
            </motion.div>

            <img 
              src={personalInfo.profileImage} 
              alt="Jagadeesh Chinta" 
              className="profile-image" 
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
