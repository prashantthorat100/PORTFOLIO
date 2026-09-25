import React, { useState } from 'react';
import { projectCategories, projectsData } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon, CheckIcon, FileTextIcon } from './Icons';

export default function Projects({ onOpenModal, limit, showFilter = true, showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeFilter));

  const displayProjects = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section" id="projects">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <div className="section-eyebrow">PROJECT SHOWCASE</div>
            <h2 className="section-title">Featured <span className="text-gradient">Engineering Work</span></h2>
            <p className="section-description">
              Architected and built with clean code, modular design, and real-world practical use cases—including patent-backed computer vision and full-stack platforms.
            </p>
          </div>
        )}

        {/* Project Filter Tabs */}
        {showFilter && (
          <div className="projects-filter-bar" id="projectFilterBar" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${cat.id === activeFilter ? 'active' : ''}`}
                role="tab"
                aria-selected={cat.id === activeFilter}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid" id="projectsGrid">
          {displayProjects.map((project) => {
            const isPatentProject = Boolean(project.patentBadge);
            const isOngoing = Boolean(project.isOngoingProduct);
            const cardClass = isPatentProject 
              ? 'project-card featured-patent' 
              : isOngoing 
                ? 'project-card ongoing-product' 
                : 'project-card';

            return (
              <article className={cardClass} data-project-id={project.id} key={project.id}>
                <div className="project-badges-top">
                  {isPatentProject && (
                    <span className="badge-tag badge-patent">★ {project.patentBadge}</span>
                  )}
                  {isOngoing && (
                    <span className="badge-tag badge-active">⚙ {project.status}</span>
                  )}
                  {project.category.map((c) => {
                    const catObj = projectCategories.find((item) => item.id === c);
                    return (
                      <span className="badge-tag" key={c}>
                        {catObj ? catObj.label : c}
                      </span>
                    );
                  })}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                {project.disclaimer && (
                  <div className="project-disclaimer">{project.disclaimer}</div>
                )}

                <p className="project-description">{project.description}</p>

                <ul className="project-features-list">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li className="project-feature-item" key={idx}>
                      <CheckIcon size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-stack">
                  {project.technologies.map((t, idx) => (
                    <span className="tech-tag" key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="View Source Code on GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>

                  {project.patentDocUrl && (
                    <a
                      href={project.patentDocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View Patent Document (PDF)"
                    >
                      <FileTextIcon size={14} />
                      <span>Patent Doc</span>
                    </a>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon size={14} />
                    </a>
                  ) : !project.patentDocUrl ? (
                    <button className="btn btn-disabled btn-sm" title="Deployment in progress" disabled>
                      <span>Demo — Coming Soon</span>
                    </button>
                  ) : null}

                  <button
                    type="button"
                    className={`btn ${isPatentProject ? 'btn-primary' : 'btn-outline'} btn-sm view-details-btn`}
                    onClick={() => onOpenModal && onOpenModal(project)}
                  >
                    <span>{isPatentProject ? 'Patent Details' : 'Details'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
