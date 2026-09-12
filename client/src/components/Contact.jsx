import { useState, useCallback } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import '../styles/contact.css';

const rawApiUrl = import.meta.env.VITE_API_URL || '';
const API_BASE = rawApiUrl.replace(/\/+$/, '');

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters)';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  }, [form]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = personalInfo.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a question or want to work together? Let's talk.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left: info */}
          <ScrollReveal>
            <div className="contact-info">
              <h3 className="contact-cta">
                Let's build something meaningful.
              </h3>
              <p className="contact-description">
                I'm always open to discussing software engineering opportunities,
                collaborative projects, or interesting technical challenges. Feel free
                to reach out.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">📧</div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">
                      <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">📱</div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value">
                      <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">📍</div>
                  <div>
                    <div className="contact-detail-label">Location</div>
                    <div className="contact-detail-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                  Email Me
                </a>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="btn btn-secondary">
                  Call Me
                </a>
                <button
                  className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? '✓ Copied!' : '📋 Copy Email'}
                </button>
              </div>

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ width: 'fit-content' }}
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
                {errors.name && <span className="error-text" role="alert">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                />
                {errors.email && <span className="error-text" role="alert">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                />
                {errors.message && <span className="error-text" role="alert">{errors.message}</span>}
              </div>

              {status && (
                <div className={`form-status ${status.type}`} role="alert">
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
