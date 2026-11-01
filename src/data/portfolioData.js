export const PROFILE_DATA = {
  name: 'Gustavo Geraldo',
  fullName: 'Gustavo Geraldo Campos da Silva',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Python • Node.js • React • Automação & Dados',
  location: 'Recife/PE, Brasil',
  availability: 'Disponível para projetos & oportunidades Full Stack',
  avatar: 'static/foto-gustavo.png',
  cvUrl: 'pdf/Curriculo-Gustavo-Geraldo.pdf',
  cvDownloadName: 'Curriculo_Gustavo_Campos.pdf',
  email: 'gustavogeraldo14@gmail.com',
  whatsapp: 'https://wa.me/5581984630516',
  whatsappDisplay: '(81) 9 8463-0516',
  phoneSecondary: '(81) 9 8703-5306',
  linkedin: 'https://www.linkedin.com/in/gustavo-geraldo-b12b05359',
  github: 'https://github.com/gustavogcsilva',
  heroSummary:
    'Desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas. Especialista em arquitetar aplicações web modernas, APIs escaláveis em Python e Node.js, automação inteligente de processos com n8n e soluções orientadas a dados.',
  stats: [
    { value: 'ADS', label: 'Ensino Superior Completo', detail: 'Análise e Desenv. de Sistemas' },
    { value: '21+', label: 'Tecnologias Dominadas', detail: 'Full Stack, Dados & DevOps' },
    { value: '5+', label: 'Sistemas em Produção', detail: 'Web Apps, IA, Finanças & Bots' },
    { value: '100%', label: 'Foco em Resolução', detail: 'Código limpo & entrega real' },
  ],
  aboutParagraphs: [
    'Fala aí! Eu sou o Gustavo Geraldo, um desenvolvedor Full Stack totalmente apaixonado por tirar ideias do papel e transformá-las em experiências digitais incríveis!',
    'Minha jornada começou quando decidi parar de ser apenas um usuário da internet e passei a quebrar a cabeça para entender como os sites realmente funcionavam por trás dos panos. Essa curiosidade me levou a cursar Análise e Desenvolvimento de Sistemas e, desde então, não parei mais de codar.',
    'Hoje, meu arsenal de ferramentas favoritas envolve Python, JavaScript, Node.js, SQL, HTML e CSS. Se o desafio envolve criar uma aplicação do zero, automatizar alguma tarefa ou desvendar uma lógica complexa de banco de dados, pode apostar que eu topo na hora (com um MONSTER, claro).',
    'Estou sempre de olho no próximo aprendizado e pronto para me jogar em projetos que façam a diferença. Se você quer bater um papo sobre tecnologia, criar algo inovador ou discutir uma parceria, chega junto e me dá um alô na página de contato!',
  ],
  education: [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Ensino Superior Completo',
      period: 'Concluído em 05/2025',
      description:
        'Formação focada em engenharia de software, arquitetura de sistemas, estrutura de dados, modelagem de bancos de dados relacionais e desenvolvimento web Full Stack.',
    },
  ],
  certifications: [
    {
      title: 'Curso Fullstack (Python, JS, HTML, CSS)',
      issuer: 'Infinity School',
      category: 'Full Stack',
    },
    {
      title: 'Utilização da Ferramenta n8n (Automação)',
      issuer: 'Rocketseat',
      category: 'Automação',
    },
    {
      title: 'Analista de Dados com Power BI',
      issuer: 'SEST / SENAT',
      category: 'Dados & BI',
    },
    {
      title: 'Linguagem Orientada a Objetos com Python',
      issuer: 'Fundação Bradesco',
      category: 'Backend',
    },
  ],
};

export const TECH_CATEGORIES = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Arquitetura de servidores, microsserviços, REST APIs e lógica de negócios',
    accent: '#3b82f6',
    badge: 'Server & Core',
    items: [
      {
        name: 'Python',
        level: 'Especialista',
        role: 'Automação, Backend, IA & Processamento',
        color: '#3776AB',
        code: 'PY',
      },
      {
        name: 'Node.js',
        level: 'Avançado',
        role: 'Runtime assíncrono, Bots FSM & APIs Express',
        color: '#5FA04E',
        code: 'ND',
      },
      {
        name: 'FastAPI',
        level: 'Avançado',
        role: 'APIs REST de alta performance e tipadas',
        color: '#009688',
        code: 'FA',
      },
      {
        name: 'Flask',
        level: 'Avançado',
        role: 'Aplicações web modulares e integrações',
        color: '#38bdf8',
        code: 'FL',
      },
      {
        name: 'TypeScript',
        level: 'Intermediário/Avançado',
        role: 'Tipagem estática e escalabilidade de código',
        color: '#3178C6',
        code: 'TS',
      },
      {
        name: 'JavaScript',
        level: 'Avançado',
        role: 'ES6+, manipulação assíncrona e web dinâmica',
        color: '#F7DF1E',
        code: 'JS',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend, Desktop & UI',
    subtitle: 'Interfaces reativas, dashboards interativos, sistemas desktop e UX/UI responsivo',
    accent: '#0ea5e9',
    badge: 'Interface & UX',
    items: [
      {
        name: 'React',
        level: 'Avançado',
        role: 'SPAs modernas, componentização e estados',
        color: '#61DAFB',
        code: 'RC',
      },
      {
        name: 'Tkinter',
        level: 'Avançado',
        role: 'Interfaces gráficas nativas para Desktop em Python',
        color: '#60a5fa',
        code: 'TK',
      },
      {
        name: 'HTML5',
        level: 'Especialista',
        role: 'Estruturação semântica, SEO e acessibilidade',
        color: '#E34F26',
        code: 'H5',
      },
      {
        name: 'CSS3',
        level: 'Especialista',
        role: 'Grid, Flexbox, animações fluidas e design responsivo',
        color: '#1572B6',
        code: 'C3',
      },
      {
        name: 'Streamlit',
        level: 'Especialista',
        role: 'Data Apps interativos e deploy ágil em Python',
        color: '#FF4B4B',
        code: 'ST',
      },
    ],
  },
  {
    id: 'data',
    title: 'Dados, Análise & Automação',
    subtitle: 'Engenharia analítica, ETL, visualização executiva e orquestração de workflows',
    accent: '#6366f1',
    badge: 'Data & Workflows',
    items: [
      {
        name: 'Pandas',
        level: 'Avançado',
        role: 'Manipulação, limpeza e transformação de dados',
        color: '#818cf8',
        code: 'PD',
      },
      {
        name: 'Jupyter',
        level: 'Avançado',
        role: 'Exploração interativa, prototipagem e análise',
        color: '#F37626',
        code: 'JP',
      },
      {
        name: 'Power BI',
        level: 'Avançado',
        role: 'Dashboards executivos, DAX e inteligência de negócios',
        color: '#F2C811',
        code: 'BI',
      },
      {
        name: 'n8n',
        level: 'Especialista',
        role: 'Automação de processos, webhooks e integrações de IA',
        color: '#FF6D5A',
        code: 'N8',
      },
    ],
  },
  {
    id: 'database',
    title: 'Bancos de Dados, Segurança & DevOps',
    subtitle: 'Modelagem relacional, persistência segura, criptografia e controle de versão',
    accent: '#2563eb',
    badge: 'Infra & Security',
    items: [
      {
        name: 'PostgreSQL',
        level: 'Avançado',
        role: 'Banco relacional robusto para sistemas críticos',
        color: '#4169E1',
        code: 'PG',
      },
      {
        name: 'MySQL',
        level: 'Avançado',
        role: 'Modelagem relacional, queries otimizadas e Workbench',
        color: '#4479A1',
        code: 'MY',
      },
      {
        name: 'SQLite',
        level: 'Avançado',
        role: 'Persistência leve embarcada e testes locais',
        color: '#003B57',
        code: 'SQ',
      },
      {
        name: 'bcrypt',
        level: 'Avançado',
        role: 'Hashing criptográfico seguro de senhas e autenticação',
        color: '#38bdf8',
        code: 'BC',
      },
      {
        name: 'Git',
        level: 'Avançado',
        role: 'Versionamento distribuído, branches e resolução',
        color: '#F05032',
        code: 'GT',
      },
      {
        name: 'GitHub',
        level: 'Avançado',
        role: 'Repositórios, documentação técnica, CI/CD e deploy',
        color: '#94a3b8',
        code: 'GH',
      },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 'mia-intelligence',
    title: 'Mia Intelligence',
    subtitle: 'Diário Emocional Inteligente com IA Generativa',
    category: 'IA & Web App',
    featured: true,
    image: 'static/imagem-mia.png',
    liveUrl: 'https://miaproject.streamlit.app/',
    repoUrl: 'https://github.com/gustavogcsilva/mia-intelligence-system',
    domainDisplay: 'miaproject.streamlit.app',
    description:
      'Diário interativo voltado para desabafo e bem-estar psicológico, ajudando a registrar sentimentos e reflexões de forma inteligente. Ao final de cada registro, a Mia analisa o humor e indica livros e músicas personalizadas via Gemini API, além de contar com detecção preventiva de palavras de risco (CVV 188).',
    technologies: ['Python', 'Streamlit', 'Gemini API', 'SQLite', 'bcrypt'],
    star: {
      situacao:
        'Pessoas com ansiedade e sobrecarga emocional frequentemente não têm um espaço seguro, acolhedor e acessível para registrar o que estão sentindo.',
      tarefa:
        'Desenvolver um diário emocional interativo que permitisse anotar livremente os sentimentos, reduzindo a carga mental e oferecendo recomendações terapêuticas personalizadas.',
      acao:
        'Criei o sistema Mia com autenticação segura de usuários e registros ilimitados. Integrei a API do Google Gemini para gerar indicações personalizadas de livros e músicas de acordo com a emoção detectada, além de implementar verificação automática de palavras de risco com redirecionamento imediato ao CVV (188).',
      resultado:
        'Ferramenta em produção de apoio ao bem-estar emocional que reduz a carga mental e conecta usuários a recomendações culturais e canais especializados de ajuda.',
    },
  },
  {
    id: 'movecritic',
    title: 'Movecritic',
    subtitle: 'Plataforma de Catálogo e Críticas de Filmes e Livros',
    category: 'Full Stack Web',
    featured: true,
    image: 'static/imagem-movecritic.png',
    liveUrl: 'https://movecritic.onrender.com/',
    repoUrl: 'https://github.com/gustavogcsilva/movecritic',
    domainDisplay: 'movecritic.onrender.com',
    description:
      'Plataforma interativa de crítica de filmes e livros que consome APIs externas em tempo real para listar, pesquisar e detalhar produções cinematográficas e literárias, permitindo registrar avaliações pessoais.',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    star: {
      situacao:
        'Consumidores de filmes e livros muitas vezes não dispõem de um espaço único e intuitivo para pesquisar títulos em tempo real e registrar suas próprias críticas.',
      tarefa:
        'Criar uma aplicação web Full Stack para busca dinâmica de filmes e livros com persistência de avaliações e críticas dos usuários.',
      acao:
        'Desenvolvi com Python (Flask), MySQL, HTML5 e CSS3 uma plataforma responsiva integrada a APIs externas de mídia, estruturando rotas backend e interface de busca por título e gênero.',
      resultado:
        'Aplicação publicada em nuvem demonstrando domínio da integração entre front-end responsivo, consumo de APIs REST e banco de dados relacional MySQL.',
    },
  },
  {
    id: 'gerencie-dindin',
    title: 'Gerencie DinDin',
    subtitle: 'Sistema de Gestão Financeira & Relatórios em PDF',
    category: 'Dados & Finanças',
    featured: true,
    image: 'static/imagem-financas.png',
    liveUrl: 'https://gerenciedindin.streamlit.app',
    repoUrl: 'https://github.com/gustavogcsilva/gerencie-dindin',
    domainDisplay: 'gerenciedindin.streamlit.app',
    description:
      'Aplicação financeira completa para gestão de receitas e despesas mensais estruturada na regra 50/30/20 (Necessidades Fixas, Desejos/Lazer e Poupança), com geração e exportação instantânea de relatórios detalhados em PDF.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'HTML5', 'CSS3'],
    star: {
      situacao:
        'Usuários frequentemente perdem o controle do próprio orçamento mensal por falta de uma ferramenta prática e visual de categorização financeira.',
      tarefa:
        'Desenvolver uma aplicação web intuitiva para registro, distribuição percentual e controle de despesas pessoais organizadas por categoria.',
      acao:
        'Implementei em Python, Pandas e Streamlit um painel de controle financeiro categorizado em Custos Fixos (50%), Lazer/Desejos (30%) e Reservas (20%), com motor de exportação de relatórios fechados em PDF.',
      resultado:
        'Aplicação funcional em produção que simplifica o planejamento financeiro mensal e gera documentação pronta para acompanhamento pessoal.',
    },
  },
  {
    id: 'route-dump',
    title: 'Route Dump',
    subtitle: 'Extração, Mapeamento e Conversão de Rotas de Transporte',
    category: 'Automação & Dados',
    featured: true,
    image: 'static/imagem-routedump.png',
    liveUrl: 'https://gcs-core.com',
    repoUrl: 'https://github.com/gustavogcsilva/RouteDump',
    domainDisplay: 'gcs-core.com',
    description:
      'Ferramenta especializada na extração automatizada de rotas de transporte público (ônibus, metrô e trem) a partir de arquivos PDF (Moovit), gerando mapeamento geográfico interativo e arquivos TXT estruturados prontos para importação em outros sistemas.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Automação', 'Geodados'],
    star: {
      situacao:
        'As rotas e itinerários de transporte público frequentemente ficam presos em arquivos PDF estáticos do Moovit, dificultando a manipulação e integração desses dados em sistemas operacionais.',
      tarefa:
        'Criar uma ferramenta automatizada para extrair itinerários de arquivos PDF, visualizar o traçado geográfico e converter os dados para um formato estruturado e editável.',
      acao:
        'Desenvolvi o Route Dump em Python para processar PDFs de linhas de transporte, higienizar os logradouros por sentido (ex.: Piedade / Derby), renderizar o mapa da rota selecionada e exportar arquivos TXT padronizados.',
      resultado:
        'Solução em produção (gcs-core.com) que elimina o trabalho manual de digitação e acelera a integração logística de dados de transporte urbano.',
    },
  },
  {
    id: 'whatsapp-lead-bot',
    title: 'Gerenciador de WhatsApp Bot',
    subtitle: 'Bot de Qualificação de Leads com Máquina de Estados (FSM)',
    category: 'Automação & Backend',
    featured: false,
    image: null,
    liveUrl: 'https://github.com/gustavogcsilva/Gerenciador-de-bot-para-o-whatsapp',
    repoUrl: 'https://github.com/gustavogcsilva/Gerenciador-de-bot-para-o-whatsapp',
    domainDisplay: 'github.com/gustavogcsilva',
    description:
      'Bot inteligente em Node.js e Express com máquina de estados finitos (FSM) para atendimento simultâneo no WhatsApp, qualificação automatizada de leads por categoria de serviço, captura de briefing e simulação de digitação humanizada.',
    technologies: ['Node.js', 'JavaScript', 'FastAPI', 'n8n', 'Git'],
    star: {
      situacao:
        'Empresas que atendem clientes via WhatsApp perdem tempo qualificando leads manualmente e correm risco de misturar contextos de múltiplos clientes simultâneos.',
      tarefa:
        'Desenvolver um bot para WhatsApp capaz de conduzir o cliente por um menu interativo de serviços e qualificar o briefing de forma 100% automatizada.',
      acao:
        'Construí em Node.js com Express um motor de estados (FSM) com isolamento de contexto por usuário (userContexts), simulação de digitação humanizada (sendStateTyping), captura estruturada de briefing e resumo de confirmação, otimizado para rodar em Render/Koyeb.',
      resultado:
        'Bot pronto para produção que qualifica leads automaticamente 24/7 e gerencia múltiplos atendimentos simultâneos sem colisão de contexto.',
    },
  },
];

