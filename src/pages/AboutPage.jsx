import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Education from '../components/Education';
import Hobbies from '../components/Hobbies';
import { personalInfo } from '../data/portfolioData';
import { FileTextIcon, ArrowRightIcon, MailIcon, MapPinIcon } from '../components/Icons';

export default function AboutPage({ onShowToast }) {
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
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header" style={{ padding: '80px 0 40px 0', background: 'radial-gradient(ellipse at top, var(--glow-primary) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="section-eyebrow">DISCOVER MY PROFILE</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginTop: '8px' }}>
            About <span className="text-gradient">Prashant Thorat</span>
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '12px' }}>
            Computer Engineering Undergraduate at Vishwakarma Institute of Technology (VIT Pune)
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={handleDownloadResume}>
              <FileTextIcon size={16} />
              <span>Download Official Resume</span>
            </button>
            <Link to="/contact" className="btn btn-secondary">
              <MailIcon size={16} />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Narrative & Quick Stats */}
      <About />

      {/* Formal Academic Background */}
      <Education />

      {/* Outside Engineering & Hobbies */}
      <Hobbies />

      {/* Call to action */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 className="section-title">Want to see what I've engineered?</h2>
          <p className="section-description" style={{ margin: '14px auto 24px auto' }}>
            Check out full-stack applications, intelligent computer vision algorithms, and patent-filed systems.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRightIcon size={16} />
            </Link>
            <Link to="/journey" className="btn btn-outline">
              <span>View Learning Journey</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
