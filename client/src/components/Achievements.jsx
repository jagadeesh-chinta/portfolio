import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import { Trophy, Star, Calendar, MapPin, Award } from 'lucide-react';
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

const getAchieveTheme = (idx) => {
  const themes = ['rose', 'mustard'];
  return themes[idx % 2];
};

const getAchieveIcon = (idx) => {
  const icons = [
    <Trophy size={20} color="white" />,
    <Star size={20} color="white" />,
  ];
  return icons[idx % 2];
};

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-alt" aria-label="Achievements">
      <div className="container">

        {/* Header */}
        <motion.div
          className="about-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-pill-centered pill-pink">
            MILESTONES
          </span>

          <h2 className="about-main-heading">
            Achievements
          </h2>

          <p className="about-subtitle">
            Recognized milestones and competitive wins that define my academic and technical journey.
          </p>
        </motion.div>

        {/* Achievement Cards Grid — same as Education */}
        <motion.div
          className="edu-masonry-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievements.map((achievement, idx) => {
            const theme = getAchieveTheme(idx);

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`edu-ref-card bg-light-${theme}`}
              >
                {/* Top Row: icon + badge */}
                <div className="edu-ref-top">
                  <div className={`edu-ref-icon bg-solid-${theme}`}>
                    {getAchieveIcon(idx)}
                  </div>

                  <div className={`edu-grade-pill bg-solid-${theme}`}>
                    <Award size={14} color="white" />
                    <span>{achievement.subtitle}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="edu-ref-main">
                  <h3 className="edu-ref-title">{achievement.title}</h3>

                  <div className="edu-ref-details" style={{ marginTop: 0 }}>
                    <div className="edu-detail-row">
                      <Trophy size={14} className={`text-${theme}`} />
                      <span className={`text-${theme} font-medium`}>Recognition</span>
                    </div>
                  </div>
                </div>

                <div className={`edu-ref-divider divider-${theme}`}></div>

                <p className="edu-ref-desc">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
