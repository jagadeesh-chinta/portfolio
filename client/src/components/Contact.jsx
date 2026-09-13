import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
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
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Validation failed. Please check your inputs.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section bg-alt" aria-label="Contact">
      <div className="container">
        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Contact Info CTA */}
          <div className="contact-info">
            <span className="section-pill pill-coral">Get In Touch</span>
            <h2 className="contact-heading">
              Let's Build Something <span className="highlight">Meaningful.</span>
            </h2>
            <p className="contact-subheading">
              Have an opportunity, idea, or project in mind? Let's connect.
            </p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-detail-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-detail-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>{personalInfo.phone}</span>
              </a>
              <div className="contact-detail-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  minLength={2}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                  required
                  minLength={10}
                  rows={5}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <div className="form-alert success">
                  Your message has been sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert error">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
