import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from './Icons';

export default function Contact({ onShowToast, showHeader = true }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${type} (${text}) to clipboard!`, 'success');
    }).catch(() => {
      onShowToast(`Could not auto-copy. Details: ${text}`, 'info');
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields (Name, Email, Message).', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onShowToast(data.message || 'Message sent successfully! Prashant will reply soon.', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        onShowToast(data.error || 'Failed to send message. Please reach out via direct email.', 'error');
      }
    } catch (err) {
      console.warn('API submission note:', err);
      // Friendly fallback if Express server is temporarily offline
      onShowToast(`Thank you, ${formData.name}! (Offline mode) Opening email client...`, 'success');
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <div className="section-eyebrow">GET IN TOUCH</div>
            <h2 className="section-title">Let's Build <span className="text-gradient">Something Together</span></h2>
            <p className="section-description">
              I'm always interested in connecting with developers, recruiters, builders, and people working on interesting technology projects.
            </p>
          </div>
        )}

        <div className="contact-grid">
          {/* Left: Direct Details & Instant Copy */}
          <div className="contact-info-panel">
            <p className="contact-lead-text">
              Whether you are looking for an ambitious software engineering intern, exploring an AI collaboration, or simply wish to connect, feel free to reach out directly.
            </p>

            <div className="contact-cards">
              {/* Phone */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone / WhatsApp</div>
                    <div className="contact-item-val" id="contactPhoneText">{personalInfo.displayPhone}</div>
                  </div>
                </div>
                <button 
                  type="button"
                  className="copy-btn" 
                  id="copyPhoneBtn" 
                  title="Copy phone number"
                  onClick={() => handleCopy(personalInfo.phone, 'phone number')}
                >
                  Copy
                </button>
              </div>

              {/* Email */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Direct Email</div>
                    <div className="contact-item-val" id="contactEmailText">{personalInfo.email}</div>
                  </div>
                </div>
                <button 
                  type="button"
                  className="copy-btn" 
                  id="copyEmailBtn" 
                  title="Copy email address"
                  onClick={() => handleCopy(personalInfo.email, 'email address')}
                >
                  Copy
                </button>
              </div>

              {/* Location */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Current Base</div>
                    <div className="contact-item-val">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ flex: '1 1 auto', minWidth: '120px' }}>
                Email Me
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href="https://leetcode.com/u/prashantthorat100/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LeetCode
              </a>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="contact-form-card">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="formName" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="formName" 
                  name="name" 
                  className="form-input" 
                  placeholder="e.g. Alex Johnson" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="formEmail" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="formEmail" 
                  name="email" 
                  className="form-input" 
                  placeholder="alex@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="formSubject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="formSubject" 
                  name="subject" 
                  className="form-input" 
                  placeholder="Project Opportunity / Internship / Tech Collaboration" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="formMessage" className="form-label">Message</label>
                <textarea 
                  id="formMessage" 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Hi Prashant, I'd like to discuss an opportunity regarding..." 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
