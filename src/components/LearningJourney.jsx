import React from 'react';
import { learningJourneyData } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">LEARNING JOURNEY</div>
          <h2 className="section-title">Learning & <span className="text-gradient">Development</span></h2>
          <p className="section-description">
            An honest reflection of my technical growth and competencies acquired as an engineering student, focusing on self-driven development and practical execution.
          </p>
        </div>

        <div className="journey-grid" id="learningJourneyGrid">
          {learningJourneyData.map((item, idx) => (
            <div className="journey-card" key={idx}>
              <div className="journey-focus-tag">{item.focus}</div>
              <h3 className="journey-title">{item.title}</h3>
              <p className="journey-desc">{item.description}</p>
              <div className="journey-tags">
                {item.tags.map((t, tIdx) => (
                  <span className="tech-tag" key={tIdx}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
