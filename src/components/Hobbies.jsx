import React from 'react';
import { hobbiesData } from '../data/portfolioData';

export default function Hobbies() {
  return (
    <section className="section" id="hobbies">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">BEYOND CODING</div>
          <h2 className="section-title">Interests & <span className="text-gradient">Activities</span></h2>
          <p className="section-description">
            Passions and pursuits that foster creative problem solving, discipline, and endurance outside technical engineering.
          </p>
        </div>

        <div className="hobbies-grid" id="hobbiesGrid">
          {hobbiesData.map((hobby, idx) => (
            <div className="hobby-card" key={idx}>
              <div className="hobby-emoji">{hobby.icon}</div>
              <div>
                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-desc">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
