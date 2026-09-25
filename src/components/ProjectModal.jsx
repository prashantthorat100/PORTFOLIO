import React, { useEffect } from 'react';
import { CloseIcon, GithubIcon, FileTextIcon, CheckIcon, ExternalLinkIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay project-modal active" 
      id="projectModalOverlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modalTitle"
      onClick={onClose}
    >
      <div 
        className="modal-container project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button"
          className="modal-close-btn" 
          id="modalCloseBtn" 
          aria-label="Close project details"
          onClick={onClose}
        >
          <CloseIcon size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badges" id="modalBadges" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {project.patentBadge && (
              <span className="badge-tag badge-patent">
                ★ {project.patentBadge}
              </span>
            )}
            <span className="badge-tag">{project.status}</span>
          </div>
          <h3 className="modal-title" id="modalTitle">{project.title}</h3>
          <p className="modal-subtitle" id="modalSubtitle">{project.subtitle}</p>
        </div>

        <div className="modal-body" id="modalBody">
          {project.patentNote && (
            <div className="modal-callout">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <strong>Patent & Innovation Status:</strong> {project.patentStatus || 'Patent Filed / Proof Available'}
                </div>
                {project.patentDocUrl && (
                  <a 
                    href={project.patentDocUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="badge-tag badge-patent" 
                    style={{ textDecoration: 'none', padding: '6px 12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <FileTextIcon size={14} />
                    <span>View Official Patent Document (PDF) ↗</span>
                  </a>
                )}
              </div>
              <div style={{ marginTop: '10px', fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {project.patentNote}
              </div>
            </div>
          )}

          {project.disclaimer && (
            <div className="project-disclaimer">{project.disclaimer}</div>
          )}

          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', fontWeight: 700 }}>Architecture & Technical Overview</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {project.longDescription || project.description}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '12px', fontWeight: 700 }}>Key Engineering Features</h4>
            <ul className="project-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li className="project-feature-item" key={idx}>
                  <CheckIcon size={16} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', fontWeight: 700 }}>Technologies & Tools</h4>
            <div className="project-tech-stack" style={{ marginTop: 0, paddingTop: 0, border: 'none' }}>
              {project.technologies.map((t, idx) => (
                <span className="tech-tag" style={{ fontSize: '0.85rem', padding: '5px 10px' }} key={idx}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.patentDocUrl && (
              <a href={project.patentDocUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <FileTextIcon size={14} />
                <span>Patent Document (PDF)</span>
              </a>
            )}

            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <span>Live Demo</span>
                <ExternalLinkIcon size={14} />
              </a>
            ) : !project.patentDocUrl ? (
              <button type="button" className="btn btn-disabled btn-sm" disabled>Live Demo — Coming Soon</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
