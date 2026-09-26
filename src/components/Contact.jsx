import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, GmailIcon, CopyIcon, ArrowRightIcon } from './Icons';

export default function Contact({ onShowToast, showHeader = true }) {
  const [selectedTopic, setSelectedTopic] = useState('Internship Opportunity');
  const [customSubject, setCustomSubject] = useState('');
  const [quickNote, setQuickNote] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${type} (${text}) to clipboard!`, 'success');
    }).catch(() => {
      onShowToast(`Email address: ${text}`, 'info');
    });
  };

  const emailTemplates = [
    {
      id: 'internship',
      label: '💼 Internship Opportunity',
      subject: 'Internship Opportunity | Prashant Thorat - VIT Pune',
      body: `Hi Prashant,\n\nI reviewed your portfolio and would like to discuss a Software Engineering / Full-Stack internship opportunity at our organization.\n\nLooking forward to speaking with you!`
    },
    {
      id: 'collaboration',
      label: '🚀 Project Collaboration',
      subject: 'Project Collaboration / AI Development Inquiry',
      body: `Hi Prashant,\n\nI was impressed by your projects and would like to collaborate with you on a tech / AI project.\n\nLet's connect!`
    },
    {
      id: 'general',
      label: '💬 General Tech Connect',
      subject: 'Connecting from Portfolio | Tech Inquiry',
      body: `Hi Prashant,\n\nI came across your portfolio and wanted to connect with you regarding your work in Computer Science and Artificial Intelligence.`
    }
  ];

  const getActiveSubject = () => {
    if (customSubject.trim()) return customSubject.trim();
    const template = emailTemplates.find(t => t.label === selectedTopic);
    return template ? template.subject : 'Portfolio Inquiry | Prashant Thorat';
  };

  const getActiveBody = () => {
    if (quickNote.trim()) return quickNote.trim();
    const template = emailTemplates.find(t => t.label === selectedTopic);
    return template ? template.body : `Hi Prashant,\n\nI came across your portfolio and would like to get in touch with you.`;
  };

  const getGmailComposeUrl = () => {
    const sub = encodeURIComponent(getActiveSubject());
    const body = encodeURIComponent(getActiveBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${sub}&body=${body}`;
  };

  const handleLaunchGmail = () => {
    const url = getGmailComposeUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    if (onShowToast) {
      onShowToast('Opening Gmail Web compose window...', 'success');
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
              Reach out directly via Gmail or WhatsApp. I am always open to discussing internship opportunities, AI collaborations, and software projects.
            </p>
          </div>
        )}

        <div className="contact-grid">
          {/* Left: Direct Contact Information */}
          <div className="contact-info-panel">
            <p className="contact-lead-text">
              Whether you are looking for an ambitious software engineering intern at VIT Pune, exploring an AI collaboration, or simply wish to connect, feel free to reach out directly.
            </p>

            <div className="contact-cards">
              {/* Direct Gmail Card */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box" style={{ background: 'rgba(234, 67, 53, 0.12)', color: '#ea4335' }}>
                    <GmailIcon size={20} />
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
                  <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25d366' }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone & WhatsApp</div>
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

              {/* Current Base Card */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div className="contact-icon-box">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Current Location</div>
                    <div className="contact-item-val">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Social Handles */}
            <div style={{ marginTop: '24px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Quick Direct Connect:
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/91${personalInfo.phone}?text=${encodeURIComponent('Hi Prashant, I visited your portfolio and would like to connect with you!')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  LinkedIn
                </a>

                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  GitHub
                </a>

                <a 
                  href="https://leetcode.com/u/prashantthorat100/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right: Dedicated Gmail Hub (No Outlook) */}
          <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '12px', 
                  background: 'rgba(234, 67, 53, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#ea4335' 
                }}>
                  <GmailIcon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Email Me Directly via Gmail</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Opens directly in your browser using Gmail
                  </div>
                </div>
              </div>

              {/* Template Selectors */}
              <div style={{ marginBottom: '20px' }}>
                <label className="form-label">Select Purpose / Topic:</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {emailTemplates.map((tpl) => (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => {
                        setSelectedTopic(tpl.label);
                        setCustomSubject('');
                        setQuickNote('');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: selectedTopic === tpl.label ? 'rgba(29, 117, 128, 0.15)' : 'var(--bg-secondary)',
                        border: selectedTopic === tpl.label ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                        color: selectedTopic === tpl.label ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: selectedTopic === tpl.label ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        fontSize: '0.9rem'
                      }}
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Custom Subject */}
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label htmlFor="customSubject" className="form-label">Subject Line (Pre-filled):</label>
                <input 
                  type="text" 
                  id="customSubject"
                  className="form-input" 
                  value={customSubject || getActiveSubject()} 
                  onChange={(e) => setCustomSubject(e.target.value)}
                  placeholder="Enter email subject"
                />
              </div>

              {/* Optional Message Preview */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="quickNote" className="form-label">Message Preview (Editable):</label>
                <textarea 
                  id="quickNote"
                  className="form-textarea" 
                  rows={4}
                  value={quickNote || getActiveBody()} 
                  onChange={(e) => setQuickNote(e.target.value)}
                  placeholder="Message body"
                  style={{ minHeight: '90px' }}
                />
              </div>
            </div>

            {/* Launch Action */}
            <div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleLaunchGmail}
                style={{ 
                  width: '100%', 
                  padding: '14px 20px', 
                  fontSize: '1rem', 
                  fontWeight: 700, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px',
                  background: 'linear-gradient(135deg, #ea4335, #c5221f)',
                  borderColor: '#ea4335',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(234, 67, 53, 0.3)'
                }}
              >
                <GmailIcon size={20} />
                <span>Open in Gmail (Compose)</span>
                <ArrowRightIcon size={16} />
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  ✅ Opens web browser Gmail — Never launches Outlook
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email address')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-primary)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0
                  }}
                >
                  Copy {personalInfo.email}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
