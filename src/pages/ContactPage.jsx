import React from 'react';
import Contact from '../components/Contact';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage({ onShowToast }) {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header" style={{ padding: '80px 0 40px 0', background: 'radial-gradient(ellipse at top, var(--glow-primary) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="section-eyebrow">GET IN TOUCH</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginTop: '8px' }}>
            Contact & <span className="text-gradient">Collaboration</span>
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '12px' }}>
            Have a project, internship opportunity, or tech question? Send a message directly.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <Contact onShowToast={onShowToast} showHeader={false} />

      {/* Quick FAQ / Availability notes */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">FREQUENTLY ASKED</div>
            <h2 className="section-title">Availability & <span className="text-gradient">Engagement</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="stat-card" style={{ textAlign: 'left', padding: '24px' }}>
              <div className="stat-label">Internship Availability</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0', color: 'var(--text-primary)' }}>
                Summer / Ongoing 2025-2026
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Available for Software Engineering, Full-Stack MERN, and AI / Computer Vision internships (Remote, Hybrid, or On-site in Pune / Mumbai / Bangalore).
              </p>
            </div>

            <div className="stat-card" style={{ textAlign: 'left', padding: '24px' }}>
              <div className="stat-label">Response Time</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0', color: 'var(--text-primary)' }}>
                Within 24 Hours
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                I actively monitor email, LinkedIn, and WhatsApp messages. Direct emails received at {personalInfo.email} are answered quickly.
              </p>
            </div>

            <div className="stat-card" style={{ textAlign: 'left', padding: '24px' }}>
              <div className="stat-label">Preferred Tech Stack</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0', color: 'var(--text-primary)' }}>
                Java, MERN & Python AI
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                React, Node.js, Express, MongoDB, Java (DSA), Python, OpenCV, YOLO, and modern REST APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
