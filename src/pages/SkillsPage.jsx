import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/portfolioData';
import { CodeIcon, LayersIcon, CpuIcon, TerminalIcon, ToolIcon, ArrowRightIcon } from '../components/Icons';

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'All Domains' },
    ...skillsData.map((g) => ({ id: g.category, label: g.category }))
  ];

  const filteredGroups = skillsData
    .filter((group) => {
      if (selectedCategory !== 'all' && group.category !== selectedCategory) {
        return false;
      }
      if (!searchTerm.trim()) return true;

      const term = searchTerm.toLowerCase();
      const matchCategory = group.category.toLowerCase().includes(term);
      const matchDesc = group.description.toLowerCase().includes(term);
      const matchSkill = group.skills.some((s) => s.name.toLowerCase().includes(term));
      return matchCategory || matchDesc || matchSkill;
    })
    .map((group) => {
      if (!searchTerm.trim()) return group;
      const term = searchTerm.toLowerCase();
      return {
        ...group,
        skills: group.skills.filter((s) => 
          s.name.toLowerCase().includes(term) ||
          (s.note && s.note.toLowerCase().includes(term)) ||
          group.category.toLowerCase().includes(term)
        )
      };
    })
    .filter((group) => group.skills.length > 0);

  return (
    <div className="skills-page">
      {/* Page Header */}
      <div className="page-header" style={{ padding: '80px 0 40px 0', background: 'radial-gradient(ellipse at top, var(--glow-primary) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="section-eyebrow">TECHNICAL ARSENAL</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginTop: '8px' }}>
            Skills & <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '12px' }}>
            Structured capabilities in Full-Stack Engineering, Computer Vision AI, Core Java & DSA
          </p>

          {/* Interactive Search & Filter */}
          <div style={{ marginTop: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search a technology, language, or framework (e.g. React, Java, YOLO)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '14px 24px',
                fontSize: '0.95rem',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* Category Pills */}
          <div className="projects-filter-bar" style={{ marginTop: '20px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${cat.id === selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          {filteredGroups.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <h3>No matching technologies found for "{searchTerm}"</h3>
              <p style={{ marginTop: '10px' }}>Try searching for Java, React, Python, MongoDB, or OpenCV</p>
              <button 
                className="btn btn-outline btn-sm" 
                style={{ marginTop: '16px' }}
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              >
                Clear Search & Filter
              </button>
            </div>
          ) : (
            <div className="skills-grid" id="skillsGrid">
              {filteredGroups.map((group, idx) => (
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
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 className="section-title">See these skills applied in real projects</h2>
          <p className="section-description" style={{ margin: '14px auto 24px auto' }}>
            Explore practical implementations, live deployments, and patent documentation.
          </p>
          <Link to="/projects" className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
            <span>Explore Projects & Patents</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
