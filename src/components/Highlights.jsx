import React from 'react';
import { highlightsData } from '../data/portfolioData';
import { EyeIcon, AwardIcon, CodeIcon, TerminalIcon, LayersIcon, BookOpenIcon, FileTextIcon } from './Icons';

export default function Highlights() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'eye': return <EyeIcon />;
      case 'award': return <AwardIcon />;
      case 'code': return <CodeIcon />;
      case 'terminal': return <TerminalIcon />;
      case 'layers': return <LayersIcon />;
      case 'book-open': return <BookOpenIcon />;
      default: return <AwardIcon />;
    }
  };

  return (
    <section className="section" id="highlights">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">KEY HIGHLIGHTS</div>
          <h2 className="section-title">Milestones & <span className="text-gradient">Demonstrated Capability</span></h2>
          <p className="section-description">
            Grounded technical milestones reflecting real project delivery, patent innovation, and continuous problem-solving.
          </p>
        </div>

        <div className="highlights-grid" id="highlightsGrid">
          {highlightsData.map((item, idx) => (
            <div className="highlight-card" key={idx}>
              <div className="highlight-icon-box">{getIcon(item.icon)}</div>
              <div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'inline-flex', marginTop: '10px', padding: '5px 12px', fontSize: '0.8rem' }}
                  >
                    <FileTextIcon size={14} />
                    <span>{item.linkText || 'View Document'}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
