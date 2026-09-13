import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap, BookOpen, Building, Calendar, MapPin, Award } from 'lucide-react';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } },
};

const getEduTheme = (idx) => {
  const themes = ['rose', 'coral', 'mustard'];
  return themes[idx % 3];
};

const getEduIcon = (idx) => {
  const icons = [
    <GraduationCap size={20} color="white" />,
    <BookOpen size={20} color="white" />,
    <Building size={20} color="white" />
  ];
  return icons[idx % 3];
};

export default function Education() {
  return (
    <section id="education" className="section bg-alt" aria-label="Education">
      <div className="container">
        
        {/* Header Section matching reference */}
        <motion.div 
          className="about-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill-centered" style={{ color: 'var(--sage)', borderColor: 'var(--sage)', background: 'var(--sage-subtle)' }}>
            ACADEMIC BACKGROUND
          </span>
          
          <h2 className="about-main-heading">
            My <span className="highlight-text">Education</span>
          </h2>
          
          <p className="about-subtitle">
            A consistent record of academic discipline, technical rigor, and competitive performance.
          </p>
        </motion.div>

        {/* Education Grid matching reference */}
        <motion.div 
          className="edu-masonry-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((edu, idx) => {
            const theme = getEduTheme(idx);
            
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants} 
                className={`edu-ref-card bg-light-${theme}`}
              >
                <div className="edu-ref-top">
                  <div className={`edu-ref-icon bg-solid-${theme}`}>
                    {getEduIcon(idx)}
                  </div>
                  
                  <div className={`edu-grade-pill bg-solid-${theme}`}>
                    <Award size={14} color="white" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
                
                <div className="edu-ref-main">
                  <h3 className="edu-ref-title">{edu.degree}</h3>
                  <span className={`edu-ref-college text-${theme}`}>
                    {edu.institution}
                  </span>
                  
                  <div className="edu-ref-details">
                    <div className="edu-detail-row">
                      <Calendar size={14} className={`text-${theme}`} />
                      <span>{edu.startDate} – {edu.endDate}</span>
                      <span className="detail-dot">•</span>
                      <span className={`text-${theme} font-medium`}>{edu.status}</span>
                    </div>
                    
                    <div className="edu-detail-row">
                      <MapPin size={14} className={`text-${theme}`} />
                      <span className="text-muted">{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className={`edu-ref-divider divider-${theme}`}></div>
                
                <p className="edu-ref-desc">
                  {edu.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
