import React, { useState, useEffect } from 'https://esm.sh/react@18.3.1';
import ReactDOM from 'https://esm.sh/react-dom@18.3.1/client';
import htm from 'https://esm.sh/htm@3.1.1';
import { PROFILE_DATA, TECH_CATEGORIES, PROJECTS_DATA } from './src/data/portfolioData.js';

const html = htm.bind(React.createElement);

function ensureStylesheet() {
  if (!document.querySelector('link[data-portfolio-css]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/App.css';
    link.setAttribute('data-portfolio-css', 'true');
    document.head.appendChild(link);
  }
}

function TechBadgeIcon({ name, color }) {
  const iconStyle = { color: color || '#3b82f6' };
  switch (name) {
    case 'Python':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" style=${iconStyle}>
          <path d="M11.9 2C7.8 2 8.2 3.8 8.2 3.8V6h3.8v.6H6.5S4 6.3 4 10.2c0 3.9 2.2 3.8 2.2 3.8h1.3v-1.9s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2V4.3S16 2 11.9 2Z" fill="#38bdf8" />
          <path d="M12.1 22c4.1 0 3.7-1.8 3.7-1.8V18h-3.8v-.6h5.5S20 17.7 20 13.8c0-3.9-2.2-3.8-2.2-3.8h-1.3v1.9s.1 2.2-2.2 2.2h-3.8s-2.1 0-2.1 2v3.6S8 22 12.1 22Z" fill="#fbbf24" />
          <circle cx="10" cy="4.2" r="0.8" fill="#0f172a" />
          <circle cx="14" cy="19.8" r="0.8" fill="#0f172a" />
        </svg>
      `;
    case 'React':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#61DAFB" strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      `;
    case 'Node.js':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="1.8">
          <path d="M12 2 4 6.6v10.8L12 22l8-4.6V6.6L12 2Z" />
          <path d="M9.5 9.5v5l2.5 1.5 2.5-1.5v-5L12 8 9.5 9.5Z" />
        </svg>
      `;
    case 'FastAPI':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="#14b8a6" strokeWidth="1.8" />
          <path d="M13 6.5 8.5 13h3.2l-.7 4.5L15.5 11h-3.2L13 6.5Z" fill="#14b8a6" />
        </svg>
      `;
    case 'Flask':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <path d="M9 3h6M10 3v5.2L5.5 16.8A2.5 2.5 0 0 0 7.7 20.5h8.6a2.5 2.5 0 0 0 2.2-3.7L14 8.2V3" />
          <path d="M7.5 15h9" />
        </svg>
      `;
    case 'TypeScript':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#2563eb" />
          <path d="M7.2 11h5.2M9.8 11v6.5M16.8 12.2c-.4-.4-1-.6-1.7-.6-1 0-1.7.5-1.7 1.3 0 .8.6 1.1 1.7 1.4 1.1.3 1.8.8 1.8 1.7 0 1-.8 1.6-2 1.6-.9 0-1.6-.3-2.1-.8" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      `;
    case 'JavaScript':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#eab308" />
          <path d="M10.5 11v4.8c0 1-.6 1.6-1.5 1.6-.7 0-1.2-.3-1.5-.8M16.8 12c-.4-.4-1-.6-1.6-.6-.9 0-1.5.5-1.5 1.2 0 .7.5 1 1.5 1.3 1.1.3 1.7.7 1.7 1.6 0 1-.8 1.6-1.9 1.6-.8 0-1.5-.3-2-.8" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      `;
    case 'PostgreSQL':
    case 'MySQL':
    case 'SQLite':
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke=${color || '#3b82f6'} strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
          <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
        </svg>
      `;
    default:
      return html`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke=${color || '#3b82f6'} strokeWidth="1.8">
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      `;
  }
}

function CategoryIcon({ id }) {
  switch (id) {
    case 'backend':
      return html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><circle cx="7" cy="7" r="1" fill="currentColor" /><circle cx="7" cy="17" r="1" fill="currentColor" /></svg>`;
    case 'frontend':
      return html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3M3 9h18" strokeLinecap="round" /></svg>`;
    case 'data':
      return html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19h16M7 15V9M12 15V5M17 15v-3" strokeLinecap="round" /></svg>`;
    case 'database':
      return html`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 4 7v6c0 5 3.5 7.8 8 9 4.5-1.2 8-4 8-9V7l-8-4Z" /><path d="m9.5 12 1.8 1.8 3.5-3.6" strokeLinecap="round" strokeLinejoin="round" /></svg>`;
    default:
      return null;
  }
}

function StaticPortfolioApp() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedTechCategory, setSelectedTechCategory] = useState('all');
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('Todos');
  const [activeStarProject, setActiveStarProject] = useState(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [contactForm, setContactForm] = useState({
    name: '',
    subject: 'Oportunidade / Projeto Full Stack',
    message: '',
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = ['inicio', 'sobre', 'stack', 'projetos', 'contato'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveStarProject(null);
        setIsCvModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROFILE_DATA.email);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE_DATA.email}`;
    }
  };

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const intro = contactForm.name
      ? `Olá Gustavo! Meu nome é ${contactForm.name}.`
      : 'Olá Gustavo! Vi seu portfólio.';
    const details = contactForm.message
      ? `\n\nAssunto: ${contactForm.subject}\nMensagem: ${contactForm.message}`
      : `\nGostaria de conversar sobre: ${contactForm.subject}`;
    const url = `https://wa.me/5581984630516?text=${encodeURIComponent(intro + details)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredTechCategories =
    selectedTechCategory === 'all'
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((cat) => cat.id === selectedTechCategory);

  const projectCategories = ['Todos', ...new Set(PROJECTS_DATA.map((p) => p.category))];

  const filteredProjects =
    selectedProjectFilter === 'Todos'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedProjectFilter);

  const totalTechCount = TECH_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);

  return html`
    <div className="app-wrapper">
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      <header className="navbar-header">
        <div className="container navbar-inner">
          <a href="#inicio" className="brand-logo" onClick=${() => setMobileMenuOpen(false)}>
            <span className="brand-monogram">GG</span>
            <div className="brand-text">
              <span className="brand-name">${PROFILE_DATA.name}</span>
              <span className="brand-role">Full Stack • Python & React</span>
            </div>
          </a>

          <nav className=${`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navegação Principal">
            ${[
              { id: 'inicio', label: 'Início' },
              { id: 'sobre', label: 'Sobre Mim' },
              { id: 'stack', label: 'Stack & Tecnologias' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'contato', label: 'Contato' },
            ].map(
              (item) => html`
                <a
                  key=${item.id}
                  href=${`#${item.id}`}
                  className=${`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick=${() => setMobileMenuOpen(false)}
                >
                  ${item.label}
                </a>
              `
            )}
            <div className="mobile-nav-cta">
              <button
                type="button"
                className="btn btn-outline-blue btn-sm full-width"
                onClick=${() => {
                  setMobileMenuOpen(false);
                  setIsCvModalOpen(true);
                }}
              >
                Visualizar Currículo PDF
              </button>
              <a
                href="#contato"
                className="btn btn-primary-blue btn-sm full-width"
                onClick=${() => setMobileMenuOpen(false)}
              >
                Falar Comigo
              </a>
            </div>
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick=${() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Alternar tema"
            >
              ${theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              type="button"
              className="btn btn-ghost-blue btn-sm desktop-only-btn"
              onClick=${() => setIsCvModalOpen(true)}
            >
              Currículo PDF
            </button>

            <a href="#contato" className="btn btn-primary-blue btn-sm desktop-only-btn">
              Falar Comigo
            </a>

            <button
              type="button"
              className="mobile-menu-trigger"
              onClick=${() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              <span className=${`hamburger ${mobileMenuOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="status-pill">
                <span className="status-dot" />
                <span>${PROFILE_DATA.availability} • ${PROFILE_DATA.location}</span>
              </div>

              <h1 className="hero-title">
                Olá, eu sou <span className="text-gradient-blue">${PROFILE_DATA.name}</span>
                <span className="hero-subtitle-block">Engenharia Full Stack, Automação & Dados</span>
              </h1>

              <p className="hero-description">${PROFILE_DATA.heroSummary}</p>

              <div className="hero-quick-tags">
                ${['Python', 'React', 'Node.js', 'FastAPI', 'Flask', 'TypeScript', 'n8n', 'Power BI', 'PostgreSQL', 'MySQL'].map(
                  (tech) => html`<span key=${tech} className="hero-tech-chip">${tech}</span>`
                )}
              </div>

              <div className="hero-cta-group">
                <a href="#projetos" className="btn btn-primary-blue btn-lg">
                  <span>Ver Projetos em Produção</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline-blue btn-lg"
                  onClick=${() => setIsCvModalOpen(true)}
                >
                  <span>Visualizar Currículo</span>
                </button>
                <a
                  href=${PROFILE_DATA.cvUrl}
                  download=${PROFILE_DATA.cvDownloadName}
                  className="btn btn-glass btn-lg"
                >
                  <span>Baixar CV</span>
                </a>
              </div>

              <div className="hero-social-strip">
                <a href=${PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <span>GitHub ↗</span>
                </a>
                <a href=${PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <span>LinkedIn ↗</span>
                </a>
                <a href=${PROFILE_DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <span>WhatsApp ↗</span>
                </a>
                <button type="button" onClick=${handleCopyEmail} className="social-pill social-pill-btn">
                  <span>${copiedEmail ? '✓ E-mail Copiado!' : PROFILE_DATA.email}</span>
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-showcase-card">
                <div className="profile-window-bar">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="window-title">gustavo-geraldo.profile.tsx</span>
                  <span className="window-badge">ADS • Full Stack</span>
                </div>

                <div className="profile-image-wrapper">
                  <img src=${PROFILE_DATA.avatar} alt=${PROFILE_DATA.fullName} className="profile-avatar-img" />
                  <div className="floating-badge badge-top-left">
                    <span className="badge-icon">⚡</span>
                    <div>
                      <strong>Python & Node.js</strong>
                      <small>APIs & Automação</small>
                    </div>
                  </div>
                  <div className="floating-badge badge-bottom-right">
                    <span className="badge-icon">🚀</span>
                    <div>
                      <strong>React & Streamlit</strong>
                      <small>Interfaces Modernas</small>
                    </div>
                  </div>
                </div>

                <div className="profile-code-footer">
                  <pre className="code-snippet">
                    <code>
                      <span className="code-kw">const</span> <span className="code-var">developer</span> = {'{\n'}
                      {'  '}nome: <span className="code-str">'${PROFILE_DATA.fullName}'</span>,{'\n'}
                      {'  '}foco: [<span className="code-str">'Full Stack'</span>, <span className="code-str">'Automação n8n'</span>, <span className="code-str">'Dados'</span>],{'\n'}
                      {'  '}status: <span className="code-bool">'Pronto para grandes desafios'</span>{'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="metrics-grid">
              ${PROFILE_DATA.stats.map(
                (stat, idx) => html`
                  <div key=${idx} className="metric-card">
                    <span className="metric-value">${stat.value}</span>
                    <strong className="metric-label">${stat.label}</strong>
                    <span className="metric-detail">${stat.detail}</span>
                  </div>
                `
              )}
            </div>
          </div>
        </section>

        <section id="sobre" className="section-block about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">01 • Trajetória & Perfil Profissional</span>
              <h2 className="section-title">
                De entusiasta curioso a <span className="text-gradient-blue">Engenheiro de Soluções Full Stack</span>
              </h2>
            </div>

            <div className="about-bento-grid">
              <div className="about-story-card glass-panel">
                <div className="card-kicker">
                  <span className="kicker-dot" />
                  <span>Sobre Gustavo Geraldo</span>
                </div>
                <h3 className="about-card-heading">
                  Transformando problemas complexos em software limpo, rápido e funcional
                </h3>
                <div className="about-paragraphs">
                  ${PROFILE_DATA.aboutParagraphs.map(
                    (p, idx) => html`<p key=${idx} className=${idx === 0 ? 'lead-paragraph' : ''}>${p}</p>`
                  )}
                </div>
                <div className="about-highlights-row">
                  <div className="highlight-pill"><span>💻</span><span>Desenvolvimento Full Stack & Git</span></div>
                  <div className="highlight-pill"><span>⚡</span><span>APIs REST & Automação n8n</span></div>
                  <div className="highlight-pill"><span>📊</span><span>Modelagem SQL & Power BI</span></div>
                </div>
              </div>

              <div className="about-credentials-col">
                <div className="credential-card glass-panel">
                  <div className="credential-header">
                    <div className="credential-icon-box">🎓</div>
                    <div>
                      <span className="credential-tag">Formação Acadêmica</span>
                      <h4>${PROFILE_DATA.education[0].degree}</h4>
                      <span className="credential-period">${PROFILE_DATA.education[0].period}</span>
                    </div>
                  </div>
                  <p className="credential-desc">${PROFILE_DATA.education[0].description}</p>
                </div>

                <div className="credential-card glass-panel">
                  <div className="credential-header">
                    <div className="credential-icon-box">🏆</div>
                    <div>
                      <span className="credential-tag">Aperfeiçoamento Contínuo</span>
                      <h4>Cursos & Certificações Técnicas</h4>
                    </div>
                  </div>
                  <ul className="cert-list">
                    ${PROFILE_DATA.certifications.map(
                      (cert, idx) => html`
                        <li key=${idx} className="cert-item">
                          <div className="cert-info">
                            <strong>${cert.title}</strong>
                            <span>${cert.issuer}</span>
                          </div>
                          <span className="cert-badge">${cert.category}</span>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-block stack-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">02 • Ecossistema Técnico Completo</span>
              <h2 className="section-title">
                Linguagens, Frameworks & <span className="text-gradient-blue">Ferramentas de Engenharia</span>
              </h2>
            </div>

            <div className="stack-filter-bar">
              <button
                type="button"
                className=${`stack-tab-btn ${selectedTechCategory === 'all' ? 'active' : ''}`}
                onClick=${() => setSelectedTechCategory('all')}
              >
                <span>Todas as Frentes</span>
                <span className="tab-count">${totalTechCount}</span>
              </button>
              ${TECH_CATEGORIES.map(
                (cat) => html`
                  <button
                    key=${cat.id}
                    type="button"
                    className=${`stack-tab-btn ${selectedTechCategory === cat.id ? 'active' : ''}`}
                    onClick=${() => setSelectedTechCategory(cat.id)}
                  >
                    <${CategoryIcon} id=${cat.id} />
                    <span>${cat.title}</span>
                    <span className="tab-count">${cat.items.length}</span>
                  </button>
                `
              )}
            </div>

            <div className=${`stack-categories-grid ${selectedTechCategory !== 'all' ? 'single-category-view' : ''}`}>
              ${filteredTechCategories.map(
                (cat) => html`
                  <article key=${cat.id} className="stack-category-card glass-panel">
                    <div className="stack-category-header">
                      <div className="stack-category-title-group">
                        <div className="stack-category-icon"><${CategoryIcon} id=${cat.id} /></div>
                        <div>
                          <span className="stack-category-badge">${cat.badge}</span>
                          <h3 className="stack-category-title">${cat.title}</h3>
                        </div>
                      </div>
                      <span className="stack-count-pill">${cat.items.length} tecnologias</span>
                    </div>
                    <p className="stack-category-subtitle">${cat.subtitle}</p>
                    <div className="tech-items-grid">
                      ${cat.items.map(
                        (tech) => html`
                          <div key=${tech.name} className="tech-item-card">
                            <div className="tech-item-top">
                              <div className="tech-icon-wrapper">
                                <${TechBadgeIcon} name=${tech.name} color=${tech.color} />
                              </div>
                              <div className="tech-title-meta">
                                <strong className="tech-name">${tech.name}</strong>
                                <span className="tech-level">${tech.level}</span>
                              </div>
                            </div>
                            <p className="tech-role-desc">${tech.role}</p>
                          </div>
                        `
                      )}
                    </div>
                  </article>
                `
              )}
            </div>
          </div>
        </section>

        <section id="projetos" className="section-block projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">03 • Portfólio de Aplicações Reais</span>
              <h2 className="section-title">
                Projetos em <span className="text-gradient-blue">Produção & Estudos de Caso</span>
              </h2>
            </div>

            <div className="project-filter-pills">
              ${projectCategories.map(
                (cat) => html`
                  <button
                    key=${cat}
                    type="button"
                    className=${`filter-pill-btn ${selectedProjectFilter === cat ? 'active' : ''}`}
                    onClick=${() => setSelectedProjectFilter(cat)}
                  >
                    ${cat}
                  </button>
                `
              )}
            </div>

            <div className="projects-showcase-grid">
              ${filteredProjects.map(
                (project) => html`
                  <article key=${project.id} className="project-showcase-card glass-panel">
                    ${project.image
                      ? html`
                          <div className="project-browser-frame">
                            <div className="browser-topbar">
                              <div className="window-dots">
                                <span className="dot dot-red" />
                                <span className="dot dot-yellow" />
                                <span className="dot dot-green" />
                              </div>
                              <div className="browser-address-bar">
                                <span>🔒 ${project.domainDisplay}</span>
                              </div>
                              <a href=${project.liveUrl} target="_blank" rel="noopener noreferrer" className="browser-external-btn">↗</a>
                            </div>
                            <div className="project-image-container">
                              <img src=${project.image} alt=${project.title} className="project-screenshot" />
                            </div>
                          </div>
                        `
                      : null}
                    <div className="project-body">
                      <div className="project-meta-top">
                        <span className="project-category-tag">${project.category}</span>
                        ${project.repoUrl &&
                        html`<a href=${project.repoUrl} target="_blank" rel="noopener noreferrer" className="mini-icon-link">GitHub ↗</a>`}
                      </div>
                      <h3 className="project-title">${project.title}</h3>
                      <p className="project-subtitle">${project.subtitle}</p>
                      <p className="project-description">${project.description}</p>
                      <div className="project-tech-pills">
                        ${project.technologies.map((t) => html`<span key=${t} className="project-tech-pill">${t}</span>`)}
                      </div>
                      <div className="project-card-footer">
                        <a href=${project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary-blue btn-sm">
                          Acessar Projeto ↗
                        </a>
                        <button type="button" className="btn btn-outline-blue btn-sm" onClick=${() => setActiveStarProject(project)}>
                          Estudo de Caso (STAR)
                        </button>
                      </div>
                    </div>
                  </article>
                `
              )}
            </div>
          </div>
        </section>

        <section id="contato" className="section-block contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">04 • Vamos Conversar</span>
              <h2 className="section-title">
                Pronto para agregar valor ao seu <span className="text-gradient-blue">Time ou Projeto</span>
              </h2>
            </div>

            <div className="contact-grid">
              <div className="contact-channels-col">
                <a href=${PROFILE_DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-channel-card glass-panel">
                  <div className="channel-icon-wrap">💬</div>
                  <div className="channel-info">
                    <span className="channel-label">Atendimento Rápido</span>
                    <strong>WhatsApp</strong>
                    <span className="channel-value">${PROFILE_DATA.whatsappDisplay}</span>
                  </div>
                  <span className="channel-cta">Conversar ↗</span>
                </a>
                <a href=${PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel-card glass-panel">
                  <div className="channel-icon-wrap">💼</div>
                  <div className="channel-info">
                    <span className="channel-label">Rede Profissional</span>
                    <strong>LinkedIn</strong>
                    <span className="channel-value">in/gustavo-geraldo-b12b05359</span>
                  </div>
                  <span className="channel-cta">Conectar ↗</span>
                </a>
                <a href=${PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-channel-card glass-panel">
                  <div className="channel-icon-wrap">💻</div>
                  <div className="channel-info">
                    <span className="channel-label">Repositórios</span>
                    <strong>GitHub</strong>
                    <span className="channel-value">github.com/gustavogcsilva</span>
                  </div>
                  <span className="channel-cta">Explorar ↗</span>
                </a>
                <div className="contact-channel-card glass-panel">
                  <div className="channel-icon-wrap">📧</div>
                  <div className="channel-info">
                    <span className="channel-label">E-mail Direto</span>
                    <strong>${PROFILE_DATA.email}</strong>
                  </div>
                  <div className="email-actions">
                    <button type="button" className="btn btn-outline-blue btn-xs" onClick=${handleCopyEmail}>
                      ${copiedEmail ? '✓ Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-form-card glass-panel">
                <h3>Envie um Briefing ou Convite</h3>
                <form onSubmit=${handleQuickWhatsApp} className="quick-contact-form">
                  <div className="form-group">
                    <label>Seu Nome ou Empresa</label>
                    <input
                      type="text"
                      placeholder="Ex.: Ana Silva • Tech Recruiter"
                      value=${contactForm.name}
                      onChange=${(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mensagem</label>
                    <textarea
                      rows="4"
                      placeholder="Conte um pouco sobre a vaga ou projeto..."
                      value=${contactForm.message}
                      onChange=${(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    />
                  </div>
                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary-blue btn-lg full-width">
                      Enviar via WhatsApp ↗
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      ${activeStarProject &&
      html`
        <div className="modal-backdrop" onClick=${() => setActiveStarProject(null)}>
          <div className="modal-card glass-panel" onClick=${(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">Estudo de Caso • Método STAR</span>
                <h3>${activeStarProject.title}</h3>
              </div>
              <button type="button" className="modal-close-btn" onClick=${() => setActiveStarProject(null)}>✕</button>
            </div>
            <div className="star-grid">
              <div className="star-step"><span className="star-badge">S • Situação</span><p>${activeStarProject.star.situacao}</p></div>
              <div className="star-step"><span className="star-badge">T • Tarefa</span><p>${activeStarProject.star.tarefa}</p></div>
              <div className="star-step"><span className="star-badge">A • Ação</span><p>${activeStarProject.star.acao}</p></div>
              <div className="star-step star-result"><span className="star-badge">R • Resultado</span><p>${activeStarProject.star.resultado}</p></div>
            </div>
          </div>
        </div>
      `}

      ${isCvModalOpen &&
      html`
        <div className="modal-backdrop" onClick=${() => setIsCvModalOpen(false)}>
          <div className="modal-card modal-cv glass-panel" onClick=${(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Currículo — ${PROFILE_DATA.fullName}</h3>
              <div className="modal-actions">
                <a href=${PROFILE_DATA.cvUrl} download=${PROFILE_DATA.cvDownloadName} className="btn btn-primary-blue btn-sm">Baixar PDF</a>
                <button type="button" className="modal-close-btn" onClick=${() => setIsCvModalOpen(false)}>✕</button>
              </div>
            </div>
            <div className="cv-iframe-container">
              <iframe src=${PROFILE_DATA.cvUrl} title="Currículo PDF" className="cv-iframe" />
            </div>
          </div>
        </div>
      `}
    </div>
  `;
}

export function mountFallbackApp() {
  ensureStylesheet();
  const rootEl = document.getElementById('root');
  if (rootEl && !rootEl.hasChildNodes()) {
    ReactDOM.createRoot(rootEl).render(React.createElement(StaticPortfolioApp));
  }
}

mountFallbackApp();

