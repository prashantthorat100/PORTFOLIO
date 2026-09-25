import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">ABOUT ME</div>
          <h2 className="section-title">Theory & <span className="text-gradient">Practice</span></h2>
          <p className="section-description">
            My engineering journey, hands-on work, and focus on building reliable software systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text" id="aboutTextContainer">
            {aboutData.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-stats-grid" id="aboutStatsContainer">
            {aboutData.quickStats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-note">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
