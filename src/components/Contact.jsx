import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon, CheckIcon, WhatsAppIcon, GmailIcon, CopyIcon } from './Icons';

export default function Contact({ onShowToast, showHeader = true }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${type} (${text}) to clipboard!`, 'success');
    }).catch(() => {
      onShowToast(`Could not auto-copy. Details: ${text}`, 'info');
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitError) setSubmitError(null);
  };

  const getGmailWebUrl = (customSubject, customBody) => {
    const sub = encodeURIComponent(customSubject || formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      customBody || (formData.name ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}` : 'Hi Prashant,\n\nI came across your portfolio and would like to connect.')
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${sub}&body=${body}`;
  };

  const getMailtoUrl = (customSubject, customBody) => {
    const sub = encodeURIComponent(customSubject || formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      customBody || (formData.name ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}` : 'Hi Prashant,\n\nI came across your portfolio and would like to connect.')
    );
    return `mailto:${personalInfo.email}?subject=${sub}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields (Name, Email, Message).', 'error');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      _replyto: formData.email.trim(),
      subject: formData.subject ? formData.subject.trim() : `New Inquiry from ${formData.name.trim()}`,
      _subject: `[Portfolio Direct Message] ${formData.subject ? formData.subject.trim() : 'From ' + formData.name.trim()}`,
      message: formData.message.trim(),
      _template: 'table',
      _captcha: 'false'
    };

    try {
      // Primary direct email dispatch via FormSubmit (delivers directly to personalInfo.email)
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setIsSubmitted(true);
        onShowToast(`Message sent successfully! It has been dispatched to Prashant's Gmail (${personalInfo.email}).`, 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Form delivery service returned an error.');
      }
    } catch (err) {
      console.warn('Direct delivery attempt:', err);
      // Try local/server proxy if available
      try {
        const localResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const localData = await localResponse.json();
        if (localResponse.ok && localData.success) {
          setIsSubmitted(true);
          onShowToast('Message delivered successfully to Prashant!', 'success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
          return;
        }
      } catch (localErr) {
        // Continue to fallback error state
      }

      setSubmitError('Unable to deliver directly via network. Please use 1-Click Gmail Web or Email Client below:');
      onShowToast('Direct dispatch could not complete. You can send instantly via Gmail Web!', 'info');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              {/* Email Card */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Direct Email (Gmail)</div>
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
                  <CopyIcon size={14} />
                  <span>Copy</span>
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
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
                  <CopyIcon size={14} />
                  <span>Copy</span>
                </button>
              </div>

              {/* Location Card */}
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

            {/* Direct Connect Quick Actions */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                QUICK DIRECT CHANNELS:
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a 
                  href={getGmailWebUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  title="Open Compose window in Gmail Web"
                >
                  <GmailIcon size={16} />
                  <span>Open Gmail Web</span>
                </a>
                
                <a 
                  href={`https://wa.me/91${personalInfo.phone}?text=${encodeURIComponent('Hi Prashant, I visited your portfolio and would like to connect with you!')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  title="Chat directly on WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>

                <a 
                  href={getMailtoUrl()} 
                  className="btn btn-outline"
                  title="Open in your default mail app"
                >
                  Email App
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                  LinkedIn Profile
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                  GitHub Profile
                </a>
                <a href="https://leetcode.com/u/prashantthorat100/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                  LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: 'rgba(29, 117, 128, 0.15)', 
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  border: '2px solid var(--accent-primary)'
                }}>
                  <CheckIcon size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px' }}>
                  Message Dispatched!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '440px', margin: '0 auto 24px auto' }}>
                  Thank you for reaching out! Your message has been sent directly to Prashant's Gmail inbox (<strong style={{ color: 'var(--text-primary)' }}>{personalInfo.email}</strong>). He will get back to you shortly.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleResetForm}
                  >
                    Send Another Message
                  </button>
                  <a 
                    href={getGmailWebUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    Open in Gmail Web
                  </a>
                </div>
              </div>
            ) : (
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>Send a Direct Message</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Delivered instantly to <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{personalInfo.email}</span>
                  </p>
                </div>

                {submitError && (
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    border: '1px solid rgba(239, 68, 68, 0.3)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '12px 16px', 
                    marginBottom: '20px',
                    fontSize: '0.88rem',
                    color: '#f87171'
                  }}>
                    <p style={{ marginBottom: '10px' }}>{submitError}</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a 
                        href={getGmailWebUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                        style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                      >
                        Send via Gmail Web
                      </a>
                      <a 
                        href={getMailtoUrl()} 
                        className="btn btn-outline"
                        style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                      >
                        Default Mail App
                      </a>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="formName" className="form-label">Your Name *</label>
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
                  <label htmlFor="formEmail" className="form-label">Email Address *</label>
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
                    placeholder="Internship / Project Collaboration / Tech Inquiry" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formMessage" className="form-label">Message *</label>
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

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} 
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending to Gmail...' : 'Send Message'}</span>
                  <SendIcon size={18} />
                </button>

                <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  🔒 Direct delivery to Prashant Thorat via secure SMTP / FormSubmit API
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
