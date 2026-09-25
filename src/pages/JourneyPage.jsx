import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/Education';
import LearningJourney from '../components/LearningJourney';
import Highlights from '../components/Highlights';
import { ArrowRightIcon, AwardIcon } from '../components/Icons';

export default function JourneyPage() {
  return (
    <div className="journey-page">
      {/* Page Header */}
      <div className="page-header" style={{ padding: '80px 0 40px 0', background: 'radial-gradient(ellipse at top, var(--glow-primary) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="section-eyebrow">MILESTONES & TIMELINE</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginTop: '8px' }}>
            My Engineering <span className="text-gradient">Journey</span>
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '12px' }}>
            Academic development at VIT Pune, self-driven software milestones, and innovation in AI
          </p>
        </div>
      </div>

      {/* Learning & Growth Milestones */}
      <LearningJourney />

      {/* Formal Academic Foundation */}
      <Education />

      {/* Concrete Highlights & Patents */}
      <Highlights />

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 className="section-title">Ready to work with an agile builder?</h2>
          <p className="section-description" style={{ margin: '14px auto 24px auto' }}>
            I bring strong engineering discipline, continuous learning, and practical problem-solving to every team.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              <span>Get In Touch</span>
              <ArrowRightIcon size={16} />
            </Link>
            <Link to="/projects" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
