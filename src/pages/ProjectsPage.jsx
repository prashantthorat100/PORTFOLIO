import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectCategories, projectsData } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon, CheckIcon, FileTextIcon, ArrowRightIcon } from '../components/Icons';

export default function ProjectsPage({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    // Category check
    const matchesCategory = activeFilter === 'all' || project.category.includes(activeFilter);
    if (!matchesCategory) return false;

    // Search query check
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
    const matchesDesc = project.description.toLowerCase().includes(query);
    const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(query));
    const matchesFeatures = project.keyFeatures.some((f) => f.toLowerCase().includes(query));

    return matchesTitle || matchesSubtitle || matchesDesc || matchesTech || matchesFeatures;
  });

  return (
    <div className="projects-page">
      {/* Page Header */}
      <div className="page-header" style={{ padding: '80px 0 40px 0', background: 'radial-gradient(ellipse at top, var(--glow-primary) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="section-eyebrow">PROJECT SHOWCASE</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginTop: '8px' }}>
            Featured Work & <span className="text-gradient">Inventions</span>
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '12px' }}>
            End-to-end full-stack web applications, AI computer vision systems, and patent-filed technologies.
          </p>

          {/* Search bar */}
          <div style={{ marginTop: '30px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search projects by name, technology (React, Node, OpenCV, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '14px 24px',
                fontSize: '0.95rem',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="projects-filter-bar" id="projectFilterBar" role="tablist" style={{ marginTop: '20px', justifyContent: 'center' }}>
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
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <h3>No projects found matching "{searchQuery}"</h3>
              <p style={{ marginTop: '10px' }}>Try clearing the search query or selecting "All Projects".</p>
              <button 
                className="btn btn-outline btn-sm" 
                style={{ marginTop: '16px' }}
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid" id="projectsGrid">
              {filteredProjects.map((project) => {
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
                      {project.keyFeatures.map((feat, idx) => (
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
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 className="section-title">Interested in collaborating on a project?</h2>
          <p className="section-description" style={{ margin: '14px auto 24px auto' }}>
            I am open to software development internships, freelance builds, and technical collaborations.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
            <span>Start a Conversation</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
