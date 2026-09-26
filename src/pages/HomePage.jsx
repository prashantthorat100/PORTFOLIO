import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Highlights from '../components/Highlights';
import LeetCodeLiveCard from '../components/LeetCodeLiveCard';
import { personalInfo } from '../data/portfolioData';
import { ArrowRightIcon, SparklesIcon, AwardIcon } from '../components/Icons';

export default function HomePage({ onOpenModal, onShowToast }) {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <Hero onShowToast={onShowToast} />

      {/* Quick Impact Metrics Bar */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="about-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div className="stat-card">
              <div className="stat-label">Degree & Institution</div>
              <div className="stat-value" style={{ fontSize: '1.4rem' }}>VIT Pune</div>
              <div className="stat-note">B.Tech in Computer Engineering</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Innovation & IP</div>
              <div className="stat-value" style={{ fontSize: '1.4rem' }}>1 Patent Filed</div>
              <div className="stat-note">Indian Patent Application Verified</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Full-Stack & Systems</div>
              <div className="stat-value" style={{ fontSize: '1.4rem' }}>3+ Production Apps</div>
              <div className="stat-note">MERN, Python & Computer Vision</div>
            </div>
            <LeetCodeLiveCard />
          </div>
        </div>
      </section>

      {/* Featured Projects with CTA to Projects Page */}
      <section style={{ position: 'relative' }}>
        <Projects onOpenModal={onOpenModal} limit={2} showFilter={false} />
        <div className="container" style={{ textAlign: 'center', marginTop: '-20px', marginBottom: '60px' }}>
          <Link to="/projects" className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
            <span>Explore All Projects & Patents</span>
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>

      {/* Core Arsenal Overview */}
      <section style={{ position: 'relative' }}>
        <Skills />
        <div className="container" style={{ textAlign: 'center', marginTop: '-20px', marginBottom: '60px' }}>
          <Link to="/skills" className="btn btn-secondary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
            <span>View Full Technical Arsenal</span>
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>

      {/* About Overview */}
      <About />

      {/* Milestones & Highlights */}
      <Highlights />

      {/* Ready to connect banner */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-eyebrow">OPPORTUNITY & COLLABORATION</div>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Looking for a motivated <span className="text-gradient">Software Engineering Intern</span>?
          </h2>
          <p className="section-description" style={{ margin: '16px auto 28px auto' }}>
            Available for Summer 2025/2026 internships, full-stack development, and AI engineering opportunities. Let's create high-impact software together.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Let's Connect</span>
              <ArrowRightIcon size={16} />
            </Link>
            <a href={personalInfo.gmailUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Email via Gmail</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
