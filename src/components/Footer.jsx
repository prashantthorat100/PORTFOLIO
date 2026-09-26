import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { ChevronUpIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-title">{personalInfo.name}</div>
            <div className="footer-brand-desc">{personalInfo.role} | {personalInfo.specialization}</div>
          </div>

          <ul className="footer-nav">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/skills" className="footer-link">Skills</Link></li>
            <li><Link to="/projects" className="footer-link">Projects</Link></li>
            <li><Link to="/journey" className="footer-link">Journey</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {personalInfo.name} &bull; Built with React &amp; Express &bull; {personalInfo.institution}
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub" style={{ width: '32px', height: '32px' }}>
                <GithubIcon size={14} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" style={{ width: '32px', height: '32px' }}>
                <LinkedinIcon size={14} />
              </a>
              <a href={personalInfo.gmailUrl} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Email via Gmail" title="Email Prashant via Gmail" style={{ width: '32px', height: '32px' }}>
                <MailIcon size={14} />
              </a>
            </div>

            <button 
              type="button"
              className="back-to-top-btn" 
              id="backToTopBtn" 
              title="Scroll back to top" 
              aria-label="Back to top"
              onClick={scrollToTop}
            >
              <span>Back to Top</span>
              <ChevronUpIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
