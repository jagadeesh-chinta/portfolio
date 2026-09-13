import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { ArrowRight, Download, Code2, GraduationCap, Code, Link, Mail, FileText, Eye } from 'lucide-react';
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

const TypewriterText = ({ greeting, name, loopTime = 7000 }) => {
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    let i = 0;
    let j = 0;
    setDisplayedGreeting('');
    setDisplayedName('');
    
    const typingInterval = setInterval(() => {
      if (i < greeting.length) {
        setDisplayedGreeting(greeting.slice(0, i + 1));
        i++;
      } else if (j < name.length) {
        setDisplayedName(name.slice(0, j + 1));
        j++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const loopInterval = setInterval(() => {
      setKey(prev => prev + 1);
    }, loopTime);

    return () => {
      clearInterval(typingInterval);
      clearInterval(loopInterval);
    };
  }, [greeting, name, loopTime, key]);

  return (
    <>
      <div className="hero-greeting">
        {displayedGreeting}
        {displayedGreeting.length < greeting.length && <span className="cursor-blink">|</span>}
      </div>
      <h1 className="hero-heading">
        {displayedName}
        {displayedGreeting.length === greeting.length && <span className="cursor-blink">|</span>}
      </h1>
    </>
  );
};

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      <div className="container hero-container">

        {/* Left Column: Text Content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <TypewriterText greeting="Hi, I'm" name={personalInfo.name} />
          </motion.div>

          <motion.div variants={itemVariants} className="hero-tags">
            <div className="tag-primary">
              <Code2 size={16} />
              <span>Full Stack Developer</span>
            </div>
            <div className="tag-secondary">
              <GraduationCap size={16} />
              <span>B.Tech AI & ML</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            {personalInfo.description}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <button className="btn-explore" onClick={scrollToProjects}>
              Explore My Work
              <ArrowRight size={18} />
            </button>
            <div className="resume-btn-group">
              <button className="btn-resume">
                <FileText size={18} className="text-rose" />
                <span>Resume</span>
              </button>
              <div className="resume-options">
                <a href={personalInfo.resumePdf} download="Jagadeesh_Chinta_Resume.pdf" className="resume-option-btn">
                  <Download size={14} /> Download
                </a>
                <a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer" className="resume-option-btn">
                  <Eye size={14} /> View
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <span className="social-label">FOLLOW ME:</span>
            <div className="social-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Link size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Code size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-btn">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <div className="arch-image-container">
            <img
              src={personalInfo.profileImage}
              alt="Jagadeesh Chinta"
              className="arch-image"
              loading="eager"
            />
            <div className="arch-outline"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
