import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, TECH_CATEGORIES, PROJECTS_DATA } from './data/portfolioData';
import { TechBadgeIcon, CategoryIcon } from './components/TechIcons';
import './App.css';

export default function App() {
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

  return (
    <div className="app-wrapper">
      {/* Ambient Background Glows */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      {/* Sticky Top Navbar */}
      <header className="navbar-header">
        <div className="container navbar-inner">
          <a href="#inicio" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-monogram">GG</span>
            <div className="brand-text">
              <span className="brand-name">{PROFILE_DATA.name}</span>
              <span className="brand-role">Full Stack • Python & React</span>
            </div>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navegação Principal">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'sobre', label: 'Sobre Mim' },
              { id: 'stack', label: 'Stack & Tecnologias' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'contato', label: 'Contato' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-nav-cta">
              <button
                type="button"
                className="btn btn-outline-blue btn-sm full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCvModalOpen(true);
                }}
              >
                Visualizar Currículo PDF
              </button>
              <a
                href="#contato"
                className="btn btn-primary-blue btn-sm full-width"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar Comigo
              </a>
            </div>
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="btn btn-ghost-blue btn-sm desktop-only-btn"
              onClick={() => setIsCvModalOpen(true)}
            >
              Currículo PDF
            </button>

            <a href="#contato" className="btn btn-primary-blue btn-sm desktop-only-btn">
              Falar Comigo
            </a>

            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section id="inicio" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="status-pill">
                <span className="status-dot" />
                <span>{PROFILE_DATA.availability} • {PROFILE_DATA.location}</span>
              </div>

              <h1 className="hero-title">
                Olá, eu sou <span className="text-gradient-blue">{PROFILE_DATA.name}</span>
                <span className="hero-subtitle-block">
                  Engenharia Full Stack, Automação & Dados
                </span>
              </h1>

              <p className="hero-description">{PROFILE_DATA.heroSummary}</p>

              {/* Quick Stack Highlights */}
              <div className="hero-quick-tags" aria-label="Principais tecnologias">
                {['Python', 'React', 'Node.js', 'FastAPI', 'Flask', 'TypeScript', 'n8n', 'Power BI', 'PostgreSQL', 'MySQL'].map(
                  (tech) => (
                    <span key={tech} className="hero-tech-chip">
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Hero Action Buttons */}
              <div className="hero-cta-group">
                <a href="#projetos" className="btn btn-primary-blue btn-lg">
                  <span>Ver Projetos em Produção</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <button
                  type="button"
                  className="btn btn-outline-blue btn-lg"
                  onClick={() => setIsCvModalOpen(true)}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Visualizar Currículo</span>
                </button>

                <a
                  href={PROFILE_DATA.cvUrl}
                  download={PROFILE_DATA.cvDownloadName}
                  className="btn btn-glass btn-lg"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Baixar CV</span>
                </a>
              </div>

              {/* Social Strip */}
              <div className="hero-social-strip">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>GitHub</span>
                  <span className="social-arrow">↗</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>LinkedIn</span>
                  <span className="social-arrow">↗</span>
                </a>
                <a
                  href={PROFILE_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>WhatsApp</span>
                  <span className="social-arrow">↗</span>
                </a>
                <button type="button" onClick={handleCopyEmail} className="social-pill social-pill-btn">
                  <span>{copiedEmail ? '✓ E-mail Copiado!' : PROFILE_DATA.email}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Profile Portrait + Code Architecture Card */}
            <div className="hero-visual">
              <div className="profile-showcase-card">
                <div className="profile-card-glow" />
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
                  <img
                    src={PROFILE_DATA.avatar}
                    alt={PROFILE_DATA.fullName}
                    className="profile-avatar-img"
                  />
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
                      {'  '}nome: <span className="code-str">'{PROFILE_DATA.fullName}'</span>,{'\n'}
                      {'  '}foco: [<span className="code-str">'Full Stack'</span>, <span className="code-str">'Automação n8n'</span>, <span className="code-str">'Dados'</span>],{'\n'}
                      {'  '}status: <span className="code-bool">'Pronto para grandes desafios'</span>{'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Bar */}
          <div className="container">
            <div className="metrics-grid">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-value">{stat.value}</span>
                  <strong className="metric-label">{stat.label}</strong>
                  <span className="metric-detail">{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SOBRE MIM & FORMAÇÃO ================= */}
        <section id="sobre" className="section-block about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">01 • Trajetória & Perfil Profissional</span>
              <h2 className="section-title">
                De entusiasta curioso a <span className="text-gradient-blue">Engenheiro de Soluções Full Stack</span>
              </h2>
              <p className="section-subtitle">
                Combinando base acadêmica em Análise e Desenvolvimento de Sistemas com prática intensa em projetos reais, automação e análise de dados.
              </p>
            </div>

            <div className="about-bento-grid">
              {/* Bio Story Card */}
              <div className="about-story-card glass-panel">
                <div className="card-kicker">
                  <span className="kicker-dot" />
                  <span>Sobre Gustavo Geraldo</span>
                </div>
                <h3 className="about-card-heading">
                  Transformando problemas complexos em software limpo, rápido e funcional
                </h3>
                <div className="about-paragraphs">
                  {PROFILE_DATA.aboutParagraphs.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? 'lead-paragraph' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="about-highlights-row">
                  <div className="highlight-pill">
                    <span>💻</span>
                    <span>Desenvolvimento Full Stack & Git</span>
                  </div>
                  <div className="highlight-pill">
                    <span>⚡</span>
                    <span>APIs REST & Automação n8n</span>
                  </div>
                  <div className="highlight-pill">
                    <span>📊</span>
                    <span>Modelagem SQL & Power BI</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Academic & Certifications */}
              <div className="about-credentials-col">
                <div className="credential-card glass-panel">
                  <div className="credential-header">
                    <div className="credential-icon-box">🎓</div>
                    <div>
                      <span className="credential-tag">Formação Acadêmica</span>
                      <h4>{PROFILE_DATA.education[0].degree}</h4>
                      <span className="credential-period">{PROFILE_DATA.education[0].period}</span>
                    </div>
                  </div>
                  <p className="credential-desc">{PROFILE_DATA.education[0].description}</p>
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
                    {PROFILE_DATA.certifications.map((cert, idx) => (
                      <li key={idx} className="cert-item">
                        <div className="cert-info">
                          <strong>{cert.title}</strong>
                          <span>{cert.issuer}</span>
                        </div>
                        <span className="cert-badge">{cert.category}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick CV Action Banner */}
                <div className="cv-banner-card">
                  <div>
                    <strong>Currículo Completo (Método STAR)</strong>
                    <p>Confira todas as entregas detalhadas em PDF.</p>
                  </div>
                  <div className="cv-banner-actions">
                    <button
                      type="button"
                      className="btn btn-outline-blue btn-sm"
                      onClick={() => setIsCvModalOpen(true)}
                    >
                      Visualizar
                    </button>
                    <a
                      href={PROFILE_DATA.cvUrl}
                      download={PROFILE_DATA.cvDownloadName}
                      className="btn btn-primary-blue btn-sm"
                    >
                      Baixar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STACK & TECNOLOGIAS ================= */}
        <section id="stack" className="section-block stack-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">02 • Ecossistema Técnico Completo</span>
              <h2 className="section-title">
                Linguagens, Frameworks & <span className="text-gradient-blue">Ferramentas de Engenharia</span>
              </h2>
              <p className="section-subtitle">
                Domínio ponta a ponta organizado nas 4 frentes essenciais do desenvolvimento moderno: Backend, Frontend/UI, Dados/Automação e Banco de Dados/Segurança.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="stack-filter-bar" role="tablist" aria-label="Filtrar categorias de tecnologias">
              <button
                type="button"
                role="tab"
                aria-selected={selectedTechCategory === 'all'}
                className={`stack-tab-btn ${selectedTechCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTechCategory('all')}
              >
                <span>Todas as Frentes</span>
                <span className="tab-count">{totalTechCount}</span>
              </button>
              {TECH_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedTechCategory === category.id}
                  className={`stack-tab-btn ${selectedTechCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedTechCategory(category.id)}
                >
                  <CategoryIcon id={category.id} />
                  <span>{category.title}</span>
                  <span className="tab-count">{category.items.length}</span>
                </button>
              ))}
            </div>

            {/* 4-Category Bento Grid */}
            <div className={`stack-categories-grid ${selectedTechCategory !== 'all' ? 'single-category-view' : ''}`}>
              {filteredTechCategories.map((category) => (
                <article key={category.id} className="stack-category-card glass-panel">
                  <div className="stack-category-header">
                    <div className="stack-category-title-group">
                      <div className="stack-category-icon">
                        <CategoryIcon id={category.id} />
                      </div>
                      <div>
                        <span className="stack-category-badge">{category.badge}</span>
                        <h3 className="stack-category-title">{category.title}</h3>
                      </div>
                    </div>
                    <span className="stack-count-pill">{category.items.length} tecnologias</span>
                  </div>

                  <p className="stack-category-subtitle">{category.subtitle}</p>

                  <div className="tech-items-grid">
                    {category.items.map((tech) => (
                      <div key={tech.name} className="tech-item-card">
                        <div className="tech-item-top">
                          <div className="tech-icon-wrapper">
                            <TechBadgeIcon name={tech.name} color={tech.color} />
                          </div>
                          <div className="tech-title-meta">
                            <strong className="tech-name">{tech.name}</strong>
                            <span className="tech-level">{tech.level}</span>
                          </div>
                        </div>
                        <p className="tech-role-desc">{tech.role}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJETOS EM PRODUÇÃO ================= */}
        <section id="projetos" className="section-block projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">03 • Portfólio de Aplicações Reais</span>
              <h2 className="section-title">
                Projetos em <span className="text-gradient-blue">Produção & Estudos de Caso</span>
              </h2>
              <p className="section-subtitle">
                Soluções completas desenvolvidas do zero — desde aplicações com Inteligência Artificial e plataformas web Full Stack até ferramentas de automação e gestão financeira.
              </p>
            </div>

            {/* Project Category Filter */}
            <div className="project-filter-pills">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill-btn ${selectedProjectFilter === cat ? 'active' : ''}`}
                  onClick={() => setSelectedProjectFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Showcase Grid */}
            <div className="projects-showcase-grid">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-showcase-card glass-panel ${
                    project.image ? 'has-preview' : 'bot-architecture-card'
                  }`}
                >
                  {/* Browser Mockup Frame for visual projects */}
                  {project.image ? (
                    <div className="project-browser-frame">
                      <div className="browser-topbar">
                        <div className="window-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <div className="browser-address-bar">
                          <span className="lock-icon">🔒</span>
                          <span>{project.domainDisplay}</span>
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="browser-external-btn"
                          title={`Abrir ${project.title}`}
                        >
                          ↗
                        </a>
                      </div>
                      <div className="project-image-container">
                        <img
                          src={project.image}
                          alt={`Preview do projeto ${project.title}`}
                          className="project-screenshot"
                          loading={index < 2 ? 'eager' : 'lazy'}
                        />
                        <div className="project-image-overlay">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary-blue btn-sm"
                          >
                            Acessar Aplicação Online ↗
                          </a>
                          <button
                            type="button"
                            className="btn btn-glass btn-sm"
                            onClick={() => setActiveStarProject(project)}
                          >
                            Ver Método STAR
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-browser-frame bot-visual-frame">
                      <div className="browser-topbar">
                        <div className="window-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <div className="browser-address-bar">
                          <span>fsm-whatsapp-lead-bot.service.js</span>
                        </div>
                      </div>
                      <div className="bot-architecture-preview">
                        <div className="fsm-flow">
                          <span className="fsm-node">Webhook WhatsApp</span>
                          <span className="fsm-arrow">→</span>
                          <span className="fsm-node active">FSM Context Manager</span>
                          <span className="fsm-arrow">→</span>
                          <span className="fsm-node">Lead Qualificado</span>
                        </div>
                        <p className="fsm-caption">
                          Controle de múltiplos atendimentos simultâneos com isolamento de estado por cliente (Node.js & Express)
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="project-body">
                    <div className="project-meta-top">
                      <span className="project-category-tag">{project.category}</span>
                      <div className="project-links-mini">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mini-icon-link"
                            title="Repositório no GitHub"
                          >
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>

                    {/* Stack Pills */}
                    <div className="project-tech-pills">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="project-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Footer */}
                    <div className="project-card-footer">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary-blue btn-sm"
                      >
                        <span>Acessar Projeto</span>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-blue btn-sm"
                        onClick={() => setActiveStarProject(project)}
                      >
                        <span>Estudo de Caso (STAR)</span>
                      </button>

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost-blue btn-sm"
                        >
                          Código
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTATO & CONVERSÃO ================= */}
        <section id="contato" className="section-block contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">04 • Vamos Conversar</span>
              <h2 className="section-title">
                Pronto para agregar valor ao seu <span className="text-gradient-blue">Time ou Projeto</span>
              </h2>
              <p className="section-subtitle">
                Gostou do meu trabalho? Escolha o canal de sua preferência ou envie uma mensagem direta para conversarmos sobre oportunidades Full Stack, automação ou freelas.
              </p>
            </div>

            <div className="contact-grid">
              {/* Left Column: Direct Channel Cards */}
              <div className="contact-channels-col">
                <a
                  href={PROFILE_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card glass-panel channel-whatsapp"
                >
                  <div className="channel-icon-wrap whatsapp-bg">💬</div>
                  <div className="channel-info">
                    <span className="channel-label">Atendimento Rápido</span>
                    <strong>WhatsApp</strong>
                    <span className="channel-value">{PROFILE_DATA.whatsappDisplay}</span>
                  </div>
                  <span className="channel-cta">Iniciar conversa ↗</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card glass-panel channel-linkedin"
                >
                  <div className="channel-icon-wrap linkedin-bg">💼</div>
                  <div className="channel-info">
                    <span className="channel-label">Rede Profissional</span>
                    <strong>LinkedIn</strong>
                    <span className="channel-value">in/gustavo-geraldo-b12b05359</span>
                  </div>
                  <span className="channel-cta">Conectar ↗</span>
                </a>

                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card glass-panel channel-github"
                >
                  <div className="channel-icon-wrap github-bg">💻</div>
                  <div className="channel-info">
                    <span className="channel-label">Código & Repositórios</span>
                    <strong>GitHub</strong>
                    <span className="channel-value">github.com/gustavogcsilva</span>
                  </div>
                  <span className="channel-cta">Explorar código ↗</span>
                </a>

                <div className="contact-channel-card glass-panel channel-email">
                  <div className="channel-icon-wrap email-bg">📧</div>
                  <div className="channel-info">
                    <span className="channel-label">E-mail Direto</span>
                    <strong>{PROFILE_DATA.email}</strong>
                    <span className="channel-value">Recife/PE • Resposta rápida</span>
                  </div>
                  <div className="email-actions">
                    <button
                      type="button"
                      className="btn btn-outline-blue btn-xs"
                      onClick={handleCopyEmail}
                    >
                      {copiedEmail ? '✓ Copiado!' : 'Copiar'}
                    </button>
                    <a href={`mailto:${PROFILE_DATA.email}`} className="btn btn-primary-blue btn-xs">
                      Enviar ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Quick Message Builder */}
              <div className="contact-form-card glass-panel">
                <div className="card-kicker">
                  <span className="kicker-dot" />
                  <span>Mensagem Direta</span>
                </div>
                <h3>Envie um Briefing ou Convite</h3>
                <p className="contact-form-desc">
                  Preencha abaixo para abrir uma conversa já formatada diretamente no WhatsApp ou por E-mail.
                </p>

                <form onSubmit={handleQuickWhatsApp} className="quick-contact-form">
                  <div className="form-group">
                    <label htmlFor="visitor-name">Seu Nome ou Empresa</label>
                    <input
                      id="visitor-name"
                      type="text"
                      placeholder="Ex.: Ana Silva • Tech Recruiter"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="visitor-subject">Assunto</label>
                    <select
                      id="visitor-subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    >
                      <option value="Oportunidade / Vaga Full Stack">Oportunidade / Vaga Full Stack</option>
                      <option value="Desenvolvimento de Aplicação Web">Desenvolvimento de Aplicação Web</option>
                      <option value="Automação de Processos (n8n / Python / Bots)">
                        Automação de Processos (n8n / Python / Bots)
                      </option>
                      <option value="Análise de Dados & Dashboards Power BI">
                        Análise de Dados & Dashboards Power BI
                      </option>
                      <option value="Parceria ou Consultoria Técnica">Parceria ou Consultoria Técnica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="visitor-message">Mensagem (opcional)</label>
                    <textarea
                      id="visitor-message"
                      rows="4"
                      placeholder="Conte um pouco sobre a vaga, projeto ou ideia..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    />
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary-blue btn-lg full-width">
                      <span>Enviar via WhatsApp</span>
                      <span>↗</span>
                    </button>
                    <a
                      href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                        contactForm.subject
                      )}&body=${encodeURIComponent(
                        `Olá Gustavo,\n\nMeu nome é ${contactForm.name || '[Seu Nome]'}.\n\n${
                          contactForm.message || 'Gostaria de conversar sobre uma oportunidade.'
                        }`
                      )}`}
                      className="btn btn-outline-blue btn-lg"
                    >
                      Enviar por E-mail
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-monogram">GG</span>
            <div>
              <strong>{PROFILE_DATA.fullName}</strong>
              <p>Desenvolvedor Full Stack • Python, Node.js, React, Automação & Dados</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#stack">Stack (21+)</a>
            <a href="#projetos">Projetos</a>
            <button type="button" className="footer-link-btn" onClick={() => setIsCvModalOpen(true)}>
              Currículo PDF
            </button>
          </div>

          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Gustavo Geraldo • Recife/PE</span>
          </div>
        </div>
      </footer>

      {/* ================= MODAL: ESTUDO DE CASO (MÉTODO STAR) ================= */}
      {activeStarProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveStarProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="star-modal-title"
        >
          <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">Estudo de Caso de Engenharia • Método STAR</span>
                <h3 id="star-modal-title">{activeStarProject.title}</h3>
                <p className="modal-subtitle">{activeStarProject.subtitle}</p>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveStarProject(null)}
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {activeStarProject.image && (
              <div className="modal-image-banner">
                <img src={activeStarProject.image} alt={activeStarProject.title} />
              </div>
            )}

            <div className="star-grid">
              <div className="star-step">
                <span className="star-badge">S • Situação</span>
                <p>{activeStarProject.star.situacao}</p>
              </div>
              <div className="star-step">
                <span className="star-badge">T • Tarefa</span>
                <p>{activeStarProject.star.tarefa}</p>
              </div>
              <div className="star-step">
                <span className="star-badge">A • Ação Técnica</span>
                <p>{activeStarProject.star.acao}</p>
              </div>
              <div className="star-step star-result">
                <span className="star-badge">R • Resultado Entregue</span>
                <p>{activeStarProject.star.resultado}</p>
              </div>
            </div>

            <div className="modal-footer">
              <div className="project-tech-pills">
                {activeStarProject.technologies.map((tech) => (
                  <span key={tech} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="modal-actions">
                {activeStarProject.repoUrl && (
                  <a
                    href={activeStarProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-blue btn-sm"
                  >
                    Repositório GitHub ↗
                  </a>
                )}
                <a
                  href={activeStarProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-blue btn-sm"
                >
                  Acessar Aplicação ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: VISUALIZADOR DE CURRÍCULO PDF ================= */}
      {isCvModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsCvModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div className="modal-card modal-cv glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">Documento Oficial</span>
                <h3 id="cv-modal-title">Currículo — {PROFILE_DATA.fullName}</h3>
              </div>
              <div className="modal-actions">
                <a
                  href={PROFILE_DATA.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-blue btn-sm"
                >
                  Abrir em Nova Guia ↗
                </a>
                <a
                  href={PROFILE_DATA.cvUrl}
                  download={PROFILE_DATA.cvDownloadName}
                  className="btn btn-primary-blue btn-sm"
                >
                  Baixar PDF
                </a>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setIsCvModalOpen(false)}
                  aria-label="Fechar visualizador"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="cv-iframe-container">
              <iframe
                src={PROFILE_DATA.cvUrl}
                title="Currículo Gustavo Geraldo PDF"
                className="cv-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

