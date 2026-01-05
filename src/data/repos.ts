const base_url = "https://phillipml-personal-api.vercel.app/";

export const repos = [
  {
    id: 0,
    repoName: "Ping Me",
    highlight: true,
    html_url: "https://github.com/Phillipml/pingMe",
    description:  "Rede social completa desenvolvida com Next.js e Django, integrando frontend moderno com backend (primeira vez criando e integrando um backend nessa escala). Sistema de posts, perfis de usuário, autenticação segura e interface responsiva para uma experiência fluida e profissional.",
    readme:
      "https://github.com/Phillipml/pingMe/blob/main/README.md",
    technologies: ["NextJS","Typescript", "Tailwind", "RTK Query","Python","Django"],
    thumbnail: `${base_url}images/pingMe.png`,
    demo_url: "https://ping-me-green.vercel.app/",
    mainFocus: "Integração full-stack Next.js e Django, gerenciamento de estado com RTK Query, autenticação, componentização reutilizável e design responsivo com Tailwind.",
    role: "FullStack Developer",
  },
  {
    id: 1,
    repoName: "EBAC Sports",
    highlight: false,
    html_url: "https://github.com/Phillipml/ebac_sports",
    description:
      "E-commerce moderno de produtos esportivos com carrinho inteligente e sistema de favoritos. Interface responsiva e gerenciamento de estado robusto para uma experiência de compra fluida.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/ebac_sports/main/README.md",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Styled Components",
      "Create React App",
    ],
    thumbnail: `${base_url}images/ebac_sports.png`,
    demo_url: "https://ebac-sports-ecru-one.vercel.app/",
    mainFocus:
      "E-commerce completo com Redux para estado global, carrinho dinâmico e sistema de favoritos integrado.",
    role: "Frontend Developer",
  },
  {
    id: 2,
    repoName: "Efood",
    highlight: true,
    html_url: "https://github.com/Phillipml/efood",
    description:
      "Delivery moderno com temas dinâmicos, carrinho inteligente e interface responsiva para uma experiência de pedidos fluida e intuitiva.",
    readme: "https://raw.githubusercontent.com/Phillipml/efood/main/README.md",
    technologies: [
      "React",
      "TypeScript",
      "Styled Components",
      "Redux Toolkit",
      "React Router",
    ],
    thumbnail: `${base_url}images/efood.png`,
    demo_url: "https://efood-livid-ten.vercel.app/",
    mainFocus: "Sistema completo com 147+ testes unitários e temas dinâmicos.",
    role: "Frontend Developer",
  },
  {
    id: 3,
    repoName: "Contact List",
    highlight: false,
    html_url: "https://github.com/Phillipml/contactList",
    description:
      "Gerenciador completo de contatos com interface intuitiva, sistema de favoritos e filtros avançados. CRUD completo com validação de dados e design responsivo para uma experiência de usuário moderna.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/contactList/main/README.md",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Styled Components",
      "React Router",
    ],
    thumbnail: `${base_url}images/contactList.png`,
    demo_url: "https://contact-list-two-wine.vercel.app/",
    mainFocus:
      "Sistema completo de gerenciamento de contatos com Redux, favoritos, filtros e validação de dados.",
    role: "Frontend Developer",
  },
  {
    id: 4,
    repoName: "Eplay",
    highlight: true,
    html_url: "https://github.com/Phillipml/eplay",
    description:
      "E-commerce de jogos digitais com temas dinâmicos, carrinho inteligente e checkout integrado para uma experiência de compra moderna.",
    readme: "https://raw.githubusercontent.com/Phillipml/eplay/main/README.md",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
    thumbnail: `${base_url}images/eplay.png`,
    demo_url: "https://eplay-three-self.vercel.app/",
    mainFocus: "E-commerce de games com Redux e temas dinâmicos.",
    role: "Frontend Developer",
  },
  {
    id: 5,
    repoName: "Django Personal Blog",
    highlight: false,
    html_url: "https://github.com/Phillipml/django-personal-blog",
    description:
      "Blog pessoal completo desenvolvido com Django, demonstrando arquitetura MVC e melhores práticas do framework Python. Sistema robusto de posts com painel administrativo customizado, URLs amigáveis e interface responsiva para uma experiência moderna de blogging.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/django-personal-blog/main/README.md",
    technologies: [
      "Python",
      "Django 5.2.5",
      "SQLite3",
      "Bootstrap 4",
      "pytest",
      "Factory Boy",
    ],
    thumbnail: `${base_url}images/django-personal-blog.png`,
    demo_url: "",
    mainFocus:
      "Blog completo com ORM Django, sistema de migrações, Class-Based Views, painel admin customizado e cobertura de testes automatizados com pytest.",
    role: "Backend Developer",
  },
  {
    id: 6,
    repoName: "LinkedIn Messaging Automation",
    highlight: false,
    html_url: "https://github.com/Phillipml/LinkedInMessagingAutomation",
    description:
      "Automação inteligente para envio de mensagens personalizadas no LinkedIn usando Puppeteer. Sistema que automatiza o processo de networking profissional, permitindo envio em massa de mensagens personalizadas com nome do destinatário para networking legítimo e eficiente.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/LinkedInMessagingAutomation/main/README.md",
    technologies: [
      "Node.js",
      "Puppeteer 20.7.4",
      "dotenv",
      "nodemon",
      "Chrome/Chromium",
    ],
    thumbnail: `${base_url}images/LinkedInMessagingAutomation.png`,
    demo_url: "",
    mainFocus:
      "Automação web completa com Puppeteer, personalização dinâmica de mensagens, configuração modular e tratamento inteligente de timeouts para estabilidade.",
    role: "Automation Developer",
  },
  {
    id: 7,
    repoName: "Bookstore Api",
    html_url: "https://github.com/Phillipml/bookstore-api",
    highlight: true,
    description:
      "API REST completa para gerenciamento de livraria desenvolvida com Django e Django REST Framework. Sistema robusto que demonstra as melhores práticas de desenvolvimento de APIs, incluindo versionamento, paginação, autenticação múltipla e containerização com Docker para deploy simplificado.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/bookstore-api/main/README.md",
    technologies: [
      "Django",
      "PostgreSQL",
      "Docker",
      "Poetry",
      "pytest",
      "Factory Boy",
      "Gunicorn",
    ],
    thumbnail: `${base_url}images/bookstore-api.png`,
    demo_url: "",
    mainFocus:
      "API REST completa com versionamento, ViewSets, paginação inteligente, autenticação múltipla, containerização Docker e cobertura de testes com pytest e Factory Boy.",
    role: "Backend Developer",
  },
  {
    id: 8,
    repoName: "IMC React",
    highlight: false,
    html_url: "https://github.com/Phillipml/imc-react",
    description:
      "Calculadora de IMC responsiva com React e Vite. Interface moderna com classificação automática.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/imc-react/main/README.md",
    technologies: ["Vite", "Bootstrap"],
    thumbnail: `${base_url}images/imc-react.png`,
    demo_url: "https://imc-react-amber.vercel.app/",
    mainFocus: "Componentização, validação de entrada e design responsivo.",
    role: "Frontend Developer",
  }
];
