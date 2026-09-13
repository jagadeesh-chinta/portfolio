import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, MessageSquare, Link, Code, ArrowUpRight } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Validation failed. Please check your inputs.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to connect to the server.');
    }
  };

  return (
    <section id="contact" className="section bg-alt" aria-label="Contact">
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Contact Header */}
        <motion.div 
          className="contact-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-pill-centered pill-pink">GET IN TOUCH</span>
          <h2 className="contact-main-heading">
            Let's <span className="highlight-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Have an opportunity, idea, or project in mind? Let's talk.
          </p>
        </motion.div>

        <div className="contact-layout">
          
          {/* Left Column: Info Cards */}
          <motion.div 
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href={`mailto:${personalInfo.email}`} className="contact-info-card card-bg-rose">
              <div className="contact-info-icon bg-rose">
                <Mail size={20} color="white" />
              </div>
              <div className="contact-info-text">
                <span className="info-label">EMAIL ADDRESS</span>
                <span className="info-value">{personalInfo.email}</span>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow arrow-rose" />
            </a>

            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-info-card card-bg-coral">
              <div className="contact-info-icon bg-coral">
                <Phone size={20} color="white" />
              </div>
              <div className="contact-info-text">
                <span className="info-label">PHONE NUMBER</span>
                <span className="info-value">{personalInfo.phone}</span>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow arrow-coral" />
            </a>

            <div className="contact-info-card card-bg-mustard">
              <div className="contact-info-icon bg-mustard">
                <MapPin size={20} color="white" />
              </div>
              <div className="contact-info-text">
                <span className="info-label">CURRENT LOCATION</span>
                <span className="info-value">Rajam, India</span>
              </div>
            </div>

            <div className="social-profiles-card">
              <span className="info-label" style={{ marginBottom: '16px', display: 'block' }}>VERIFIED SOCIAL PROFILES</span>
              <div className="social-pills-row">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <Link size={18} className="social-pill-icon icon-rose" /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <Code size={18} className="social-pill-icon icon-coral" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="contact-form-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-card">
              <div className="form-card-header">
                <div className="form-header-icon bg-rose">
                  <MessageSquare size={20} color="white" />
                </div>
                <h3 className="form-header-title">Send a Direct Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="message-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Collaboration / Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    required
                    rows={4}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-send-message"
                  disabled={status === 'loading'}
                >
                  <Send size={18} /> {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="form-alert success mt-4">
                    Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-alert error mt-4">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
