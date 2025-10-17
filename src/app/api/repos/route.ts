import { NextResponse } from "next/server";
const base_url = "https://phillipml-personal-api.vercel.app/";

const repos = [
  {
    repoName: "IMC React",
    id: 0,
    html_url: "https://github.com/Phillipml/imc-react",
    description:
      "Calculadora de IMC responsiva com React e Vite. Interface moderna com classificação automática.",
    readme:
      "https://raw.githubusercontent.com/Phillipml/imc-react/main/README.md",
    technologies: ["Vite", "Bootstrap"],
    thumbnail: `${base_url}images/imc-react.png`,
    demo_url: "https://imc-react-amber.vercel.app/",
    highlight: "Componentização, validação de entrada e design responsivo.",
    role: "Frontend Developer",
  },
  {
    repoName: "EBAC Sports",
    id: 4,
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
    highlight:
      "E-commerce completo com Redux para estado global, carrinho dinâmico e sistema de favoritos integrado.",
    role: "Frontend Developer",
  },
  {
    repoName: "Efood",
    id: 1,
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
    highlight: "Sistema completo com 147+ testes unitários e temas dinâmicos.",
    role: "Frontend Developer",
  },
  {
    repoName: "Contact List",
    id: 5,
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
    highlight:
      "Sistema completo de gerenciamento de contatos com Redux, favoritos, filtros e validação de dados.",
    role: "Frontend Developer",
  },
  {
    repoName: "Eplay",
    id: 3,
    html_url: "https://github.com/Phillipml/eplay",
    description:
      "E-commerce de jogos digitais com temas dinâmicos, carrinho inteligente e checkout integrado para uma experiência de compra moderna.",
    readme: "https://raw.githubusercontent.com/Phillipml/eplay/main/README.md",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
    thumbnail: `${base_url}images/eplay.png`,
    demo_url: "https://eplay-three-self.vercel.app/",
    highlight: "E-commerce de games com Redux e temas dinâmicos.",
    role: "Frontend Developer",
  },

  {
    repoName: "Django Personal Blog",
    id: 7,
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
    highlight:
      "Blog completo com ORM Django, sistema de migrações, Class-Based Views, painel admin customizado e cobertura de testes automatizados com pytest.",
    role: "Backend Developer",
  },
  {
    repoName: "LinkedIn Messaging Automation",
    id: 8,
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
    highlight:
      "Automação web completa com Puppeteer, personalização dinâmica de mensagens, configuração modular e tratamento inteligente de timeouts para estabilidade.",
    role: "Automation Developer",
  },
  {
    repoName: "Bookstore Api",
    id: 2,
    html_url: "https://github.com/Phillipml/bookstore-api",
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
    highlight:
      "API REST completa com versionamento, ViewSets, paginação inteligente, autenticação múltipla, containerização Docker e cobertura de testes com pytest e Factory Boy.",
    role: "Backend Developer",
  },
];

export async function GET() {
  return NextResponse.json(repos, {
    headers: {
      "Access-Control-Allow-Origin": "*", // 🌍 permite qualquer origem
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
