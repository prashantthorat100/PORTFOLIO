import React from 'react';
import { skillsData } from '../data/portfolioData';
import { CodeIcon, LayersIcon, CpuIcon, TerminalIcon, ToolIcon } from './Icons';

export default function Skills({ showHeader = true }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <CodeIcon />;
      case 'layers': return <LayersIcon />;
      case 'cpu': return <CpuIcon />;
      case 'terminal': return <TerminalIcon />;
      case 'tool': return <ToolIcon />;
      default: return <CodeIcon />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <div className="section-eyebrow">TECHNICAL ARSENAL</div>
            <h2 className="section-title">Core Competencies & <span className="text-gradient">Tech Stack</span></h2>
            <p className="section-description">
              Structured domains of practical capability without arbitrary percentage meters. Focused on software foundations, backend logic, and intelligent algorithms.
            </p>
          </div>
        )}

        <div className="skills-grid" id="skillsGrid">
          {skillsData.map((group, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-card-icon">{getIcon(group.icon)}</div>
                <div>
                  <h3 className="skill-card-title">{group.category}</h3>
                </div>
              </div>
              <p className="skill-card-desc">{group.description}</p>
              <div className="skill-badges">
                {group.skills.map((s, sIdx) => (
                  <span 
                    key={sIdx} 
                    className={`skill-badge ${s.highlight ? 'highlight' : ''}`} 
                    title={s.note || s.name}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
