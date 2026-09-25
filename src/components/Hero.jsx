import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from './Icons';

export default function Hero({ onShowToast }) {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Prashant_Thorat_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (onShowToast) {
      onShowToast('Resume download started! (PDF)', 'info');
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Engineering & AI Roles</span>
            </div>

            <h1 className="hero-title">
              Prashant <span className="text-gradient">Thorat</span>
            </h1>

            <p className="hero-subtitle">
              {personalInfo.role} | {personalInfo.specialization}
            </p>

            <p className="hero-bio">
              {personalInfo.tagline}
            </p>

            <div className="hero-cta-group">
              <Link to="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <button className="btn btn-secondary" id="heroResumeBtn" onClick={handleDownloadResume}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume</span>
              </button>

              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>

            <div className="hero-social-bar">
              <span className="social-label">Connect:</span>
              <div className="social-links">
                <a href={`mailto:${personalInfo.email}`} className="social-btn" title="Email Prashant" aria-label="Send Email">
                  <MailIcon size={18} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub Profile" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn Profile" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
                <a href="https://leetcode.com/u/prashantthorat100/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LeetCode Profile" aria-label="LeetCode">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.875-4.913c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.875-4.914c.466-.466 1.111-.661 1.823-.661s1.357.195 1.823.661l2.697 2.608" />
                    <path d="M9 12h9.5" />
                  </svg>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="social-btn" title="Call or WhatsApp" aria-label="Phone">
                  <PhoneIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right: Visual Photo Card */}
          <div className="hero-visual-card">
            <div className="avatar-backdrop-glow"></div>
            
            <div className="floating-chip chip-top">
              <span>🏛️ VIT Pune (B.Tech)</span>
            </div>

            <div className="avatar-wrapper">
              <img 
                src={personalInfo.avatarUrl} 
                alt="Prashant Thorat - Computer Engineering Student" 
                className="avatar-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            <div className="floating-chip chip-bottom">
              <span>☕ Java & MERN & AI</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
