/**
 * Prashant Thorat - Developer Portfolio
 * Main Application Logic & Modular Component Renderers
 */

import {
  personalInfo,
  aboutData,
  skillsData,
  projectCategories,
  projectsData,
  learningJourneyData,
  educationData,
  highlightsData,
  hobbiesData
} from './data.js';

/* --- SVG Icon Library (Zero External Dependencies) --- */
const icons = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
};

/* --- DOM Elements --- */
const scrollProgressBar = document.getElementById('scrollProgressBar');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const aboutTextContainer = document.getElementById('aboutTextContainer');
const aboutStatsContainer = document.getElementById('aboutStatsContainer');
const skillsGrid = document.getElementById('skillsGrid');
const projectFilterBar = document.getElementById('projectFilterBar');
const projectsGrid = document.getElementById('projectsGrid');
const learningJourneyGrid = document.getElementById('learningJourneyGrid');
const educationCard = document.getElementById('educationCard');
const highlightsGrid = document.getElementById('highlightsGrid');
const hobbiesGrid = document.getElementById('hobbiesGrid');
const projectModal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBadges = document.getElementById('modalBadges');
const modalBody = document.getElementById('modalBody');
const toastContainer = document.getElementById('toastContainer');
const copyPhoneBtn = document.getElementById('copyPhoneBtn');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const contactForm = document.getElementById('contactForm');
const heroResumeBtn = document.getElementById('heroResumeBtn');

/* Current Active Filter State */
let activeProjectFilter = 'all';

/* --- Toast Notification Utility --- */
export function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* --- Theme Management --- */
function initTheme() {
  const savedTheme = localStorage.getItem('pt_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('pt_theme', nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info');
  });
}

/* --- Scroll Progress Bar & Active Section Nav Spy --- */
function initScrollFeatures() {
  window.addEventListener('scroll', () => {
    // Scroll progress
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrolled + '%';
    }

    // Nav Spy
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (navLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  if (!mobileMenuBtn || !navMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close mobile menu on clicking any navigation link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

/* --- Render 2. About Me Section --- */
function renderAbout() {
  if (aboutTextContainer) {
    aboutTextContainer.innerHTML = aboutData.summary
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  if (aboutStatsContainer) {
    aboutStatsContainer.innerHTML = aboutData.quickStats
      .map(stat => `
        <div class="stat-card">
          <div class="stat-label">${stat.label}</div>
          <div class="stat-value">${stat.value}</div>
          <div class="stat-note">${stat.note}</div>
        </div>
      `).join('');
  }
}

/* --- Render 3. Skills Section --- */
function renderSkills() {
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillsData.map(group => {
    const iconSvg = icons[group.icon] || icons.code;
    return `
      <div class="skill-card">
        <div class="skill-card-header">
          <div class="skill-card-icon">${iconSvg}</div>
          <div>
            <h3 class="skill-card-title">${group.category}</h3>
          </div>
        </div>
        <p class="skill-card-desc">${group.description}</p>
        <div class="skill-badges">
          ${group.skills.map(s => `
            <span class="skill-badge ${s.highlight ? 'highlight' : ''}" title="${s.note || s.name}">
              ${s.name}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* --- Render 5. Project Filter Tabs --- */
function renderProjectFilters() {
  if (!projectFilterBar) return;

  projectFilterBar.innerHTML = projectCategories.map(cat => `
    <button 
      class="filter-btn ${cat.id === activeProjectFilter ? 'active' : ''}" 
      data-filter="${cat.id}"
      role="tab"
      aria-selected="${cat.id === activeProjectFilter}">
      ${cat.label}
    </button>
  `).join('');

  projectFilterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');
      activeProjectFilter = filter;

      projectFilterBar.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      e.target.classList.add('active');
      e.target.setAttribute('aria-selected', 'true');

      renderProjects(filter);
    });
  });
}

/* --- Render 4. Featured Projects Cards --- */
function renderProjects(filter = 'all') {
  if (!projectsGrid) return;

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.includes(filter));

  projectsGrid.innerHTML = filtered.map(project => {
    const isPatentProject = !!project.patentBadge;
    const isOngoing = !!project.isOngoingProduct;
    const cardClass = isPatentProject ? 'project-card featured-patent' : (isOngoing ? 'project-card ongoing-product' : 'project-card');

    return `
      <article class="${cardClass}" data-project-id="${project.id}">
        <div class="project-badges-top">
          ${isPatentProject ? `<span class="badge-tag badge-patent">★ ${project.patentBadge}</span>` : ''}
          ${isOngoing ? `<span class="badge-tag badge-active">⚙ ${project.status}</span>` : ''}
          ${project.category.map(c => {
            const catObj = projectCategories.find(item => item.id === c);
            return `<span class="badge-tag">${catObj ? catObj.label : c}</span>`;
          }).join('')}
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>

        ${project.disclaimer ? `<div class="project-disclaimer">${project.disclaimer}</div>` : ''}

        <p class="project-description">${project.description}</p>

        <ul class="project-features-list">
          ${project.keyFeatures.slice(0, 3).map(feat => `
            <li class="project-feature-item">
              ${icons.check}
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>

        <div class="project-tech-stack">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source Code on GitHub">
            ${icons.github}
            <span>GitHub</span>
          </a>

          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>Live Demo</span>
              ${icons.externalLink}
            </a>
          ` : `
            <button class="btn btn-disabled btn-sm" title="Deployment in progress">
              <span>Demo — Coming Soon</span>
            </button>
          `}

          <button class="btn ${isPatentProject ? 'btn-primary' : 'btn-outline'} btn-sm view-details-btn" data-id="${project.id}">
            <span>${isPatentProject ? 'Patent Details' : 'Details'}</span>
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Attach modal listeners to detail buttons
  projectsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openProjectModal(id);
    });
  });
}

/* --- Project Detail & Patent Modal Handler --- */
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.subtitle;

  modalBadges.innerHTML = `
    ${project.patentBadge ? `<span class="badge-tag badge-patent" style="margin-right: 6px;">★ ${project.patentBadge}</span>` : ''}
    <span class="badge-tag">${project.status}</span>
  `;

  modalBody.innerHTML = `
    ${project.patentNote ? `
      <div class="modal-callout">
        <strong>Patent & Innovation Status:</strong> ${project.patentStatus || 'Patent Filed / Proof Available'}
        <div style="margin-top: 6px; font-size: 0.85rem; color: var(--text-primary);">${project.patentNote}</div>
      </div>
    ` : ''}

    ${project.disclaimer ? `
      <div class="project-disclaimer">${project.disclaimer}</div>
    ` : ''}

    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 8px;">Architecture & Overview</h4>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">${project.longDescription}</p>
    </div>

    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 12px;">Key Engineering Features</h4>
      <ul class="project-features-list">
        ${project.keyFeatures.map(feat => `
          <li class="project-feature-item">
            ${icons.check}
            <span>${feat}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 10px;">Technologies & Tools</h4>
      <div class="project-tech-stack" style="margin-top: 0; padding-top: 0; border: none;">
        ${project.technologies.map(t => `<span class="tech-tag" style="font-size: 0.85rem; padding: 5px 10px;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 10px; border-top: 1px solid var(--border-subtle); padding-top: 18px;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        ${icons.github}
        <span>GitHub Repository</span>
      </a>
      ${project.demoUrl ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>Live Demo</span>
        </a>
      ` : `
        <button class="btn btn-disabled btn-sm">Live Demo — Coming Soon</button>
      `}
    </div>
  `;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

function initModalEvents() {
  if (!modalCloseBtn || !projectModal) return;

  modalCloseBtn.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/* --- Render 6. Experience / Learning Journey Section --- */
function renderLearningJourney() {
  if (!learningJourneyGrid) return;

  learningJourneyGrid.innerHTML = learningJourneyData.map(item => `
    <div class="journey-card">
      <div class="journey-focus-tag">${item.focus}</div>
      <h3 class="journey-title">${item.title}</h3>
      <p class="journey-desc">${item.description}</p>
      <div class="journey-tags">
        ${item.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Render 7. Education Section --- */
function renderEducation() {
  if (!educationCard) return;

  educationCard.innerHTML = `
    <div>
      <h3 class="edu-institution">${educationData.institution}</h3>
      <p class="edu-degree">${educationData.degree} &mdash; ${educationData.branch}</p>
      <div class="edu-meta">
        <span>📅 ${educationData.status} (${educationData.period})</span>
        <span>📍 ${educationData.location}</span>
      </div>
      <p class="edu-desc">${educationData.description}</p>
      
      <div class="edu-coursework-title">Relevant Core Coursework</div>
      <div class="edu-coursework-tags">
        ${educationData.coursework.map(c => `<span class="skill-badge">${c}</span>`).join('')}
      </div>
    </div>

    <div class="edu-badge-box">
      <div class="edu-badge-icon">${icons.award}</div>
      <div class="edu-badge-text">VIT Pune</div>
      <div class="edu-badge-sub">Autonomous Institute</div>
    </div>
  `;
}

/* --- Render 8. Achievements / Highlights Section --- */
function renderHighlights() {
  if (!highlightsGrid) return;

  highlightsGrid.innerHTML = highlightsData.map(item => {
    const iconSvg = icons[item.icon] || icons.award;
    return `
      <div class="highlight-card">
        <div class="highlight-icon-box">${iconSvg}</div>
        <div>
          <h3 class="highlight-title">${item.title}</h3>
          <p class="highlight-desc">${item.description}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* --- Render 9. Hobbies & Beyond Coding --- */
function renderHobbies() {
  if (!hobbiesGrid) return;

  hobbiesGrid.innerHTML = hobbiesData.map(hobby => `
    <div class="hobby-card">
      <div class="hobby-emoji">${hobby.icon}</div>
      <div>
        <h3 class="hobby-name">${hobby.name}</h3>
        <p class="hobby-desc">${hobby.description}</p>
      </div>
    </div>
  `).join('');
}

/* --- 10. Contact Section Actions (Clipboard & Form) --- */
function initContactActions() {
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personalInfo.phone).then(() => {
        showToast(`Copied phone number (${personalInfo.phone}) to clipboard!`, 'success');
      }).catch(() => {
        showToast(`Phone: ${personalInfo.phone}`, 'info');
      });
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personalInfo.email).then(() => {
        showToast(`Copied email (${personalInfo.email}) to clipboard!`, 'success');
      }).catch(() => {
        showToast(`Email: ${personalInfo.email}`, 'info');
      });
    });
  }

  if (heroResumeBtn) {
    heroResumeBtn.addEventListener('click', () => {
      showToast('Resume link placeholder. You can link your resume PDF in data.js under resumeUrl.', 'info');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in your name, email, and message.', 'info');
        return;
      }

      // Generate mailto link
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Hi Prashant,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoLink;
      showToast('Opening your default email client with your message...', 'success');
      contactForm.reset();
    });
  }
}

/* --- App Initialization --- */
function initApp() {
  initTheme();
  initScrollFeatures();
  initMobileMenu();
  initModalEvents();
  initContactActions();

  // Render modular data components
  renderAbout();
  renderSkills();
  renderProjectFilters();
  renderProjects('all');
  renderLearningJourney();
  renderEducation();
  renderHighlights();
  renderHobbies();

  console.log('⚡ Prashant Thorat Portfolio loaded successfully.');
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
