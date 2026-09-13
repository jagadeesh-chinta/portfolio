import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Award, MapPin } from 'lucide-react';
import '../styles/sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } },
};

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container" style={{ maxWidth: '1100px' }}>

        {/* Header Section */}
        <motion.div
          className="about-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill-centered">ABOUT ME</span>

          <h2 className="about-main-heading">
            Passionate About Turning <span className="highlight-text">Logic <br className="mobile-only-br" /> &amp; Code</span> Into Solutions
          </h2>

          <p className="about-subtitle">
            A passionate Software Engineer and Full Stack Developer combining machine learning <br className="desktop-only" />
            concepts with modern web architecture.
          </p>
        </motion.div>

        {/* Cards Layout */}
        <motion.div
          className="about-cards-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Large Card */}
          <motion.div variants={itemVariants} className="about-main-card">
            <h3 className="about-card-heading">Engineering Mindset, Technical Precision</h3>

            <p className="about-card-text">
              I am currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at GMR Institute of Technology.
            </p>

            <p className="about-card-text">
              Throughout my academic journey, I have developed a strong interest in Java, web development, data structures, and database management systems. I have actively participated in projects and hackathons, and I am proud to have been part of the team that won the Smart India Hackathon 2024. This experience enhanced my technical knowledge, problem-solving ability, and teamwork.
            </p>

            <p className="about-card-text">
              Additionally, I completed an internship in AWS Cloud, where I gained hands-on experience with services such as EC2, S3, and IAM.
            </p>

            <div className="about-checkmarks">
              <span className="checkmark-item">
                <CheckCircle2 size={16} className="check-icon" /> Continuous Learner
              </span>
              <span className="checkmark-item">
                <CheckCircle2 size={16} className="check-icon" /> Problem Solver
              </span>
              <span className="checkmark-item">
                <CheckCircle2 size={16} className="check-icon" /> SIH 2024 Winner
              </span>
            </div>
          </motion.div>

          {/* Right Stacked Cards */}
          <div className="about-side-cards">

            <motion.div variants={itemVariants} className="side-card card-border-rose">
              <div className="side-card-icon icon-rose">
                <GraduationCap size={20} color="white" />
              </div>
              <div className="side-card-content">
                <span className="side-card-label">EDUCATION</span>
                <h4 className="side-card-title">B.Tech (2023–2027)</h4>
                <p className="side-card-desc">GMR Institute of Technology · <strong>8.87 CGPA</strong></p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="side-card card-border-mustard">
              <div className="side-card-icon icon-mustard">
                <Award size={20} color="white" />
              </div>
              <div className="side-card-content">
                <span className="side-card-label">HACKATHON RECOGNITION</span>
                <h4 className="side-card-title">Smart India Hackathon</h4>
                <p className="side-card-desc">Winner. Developed a gamified platform for civic education.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="side-card card-border-sage">
              <div className="side-card-icon icon-sage">
                <MapPin size={20} color="white" />
              </div>
              <div className="side-card-content">
                <span className="side-card-label">LOCATION</span>
                <h4 className="side-card-title">Rajam, India</h4>
                <p className="side-card-desc">Available for internships, full-time engineering roles, and innovative projects.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
