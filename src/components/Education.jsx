import React from 'react';
import { educationData } from '../data/portfolioData';
import { AwardIcon } from './Icons';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">Education & <span className="text-gradient">Foundation</span></h2>
          <p className="section-description">
            Formal computer engineering education grounding my practical software and AI engineering skills.
          </p>
        </div>

        <div className="education-card" id="educationCard">
          <div>
            <h3 className="edu-institution">{educationData.institution}</h3>
            <p className="edu-degree">{educationData.degree} &mdash; {educationData.branch}</p>
            <div className="edu-meta">
              <span>📅 {educationData.status} ({educationData.period})</span>
              <span>📍 {educationData.location}</span>
            </div>
            <p className="edu-desc">{educationData.description}</p>
            
            <div className="edu-coursework-title">Relevant Core Coursework</div>
            <div className="edu-coursework-tags">
              {educationData.coursework.map((c, idx) => (
                <span className="skill-badge" key={idx}>{c}</span>
              ))}
            </div>
          </div>

          <div className="edu-badge-box">
            <div className="edu-badge-icon">
              <AwardIcon size={24} />
            </div>
            <div className="edu-badge-text">VIT Pune</div>
            <div className="edu-badge-sub">Autonomous Institute</div>
          </div>
        </div>
      </div>
    </section>
  );
}
