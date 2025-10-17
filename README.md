# Phillip ML - Personal API

Uma API REST desenvolvida com Next.js que serve como backend para meu [portfólio pessoal](https://github.com/Phillipml/portfolio). Esta API fornece dados estruturados sobre meus projetos, incluindo descrições, tecnologias utilizadas, links para demos e muito mais.

## 🚀 Sobre o Projeto

Esta API foi criada especificamente para alimentar meu portfólio web, centralizando e organizando informações sobre meus projetos de desenvolvimento. Ela permite que o portfólio consuma dados atualizados de forma dinâmica, facilitando a manutenção e atualização do conteúdo.

### 📋 Funcionalidades

- **Endpoint de Repositórios**: `/api/repos` - Retorna lista completa de projetos para o portfólio
- **Integração com Portfólio**: API consumida pelo [portfólio web](https://portfolio-weld-phi-94.vercel.app)
- **Dados Estruturados**: Informações detalhadas sobre cada projeto incluindo:
  - Nome e descrição do projeto
  - Tecnologias utilizadas
  - Links para repositório e demo
  - Thumbnails dos projetos
  - Destaques técnicos
  - Papel desempenhado no desenvolvimento

### 🛠️ Tecnologias

- **Next.js 15.5.6** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React 19.1.0** - Biblioteca de interface
- **ESLint** - Linting e qualidade de código

## 🏃‍♂️ Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Phillipml/4my-personal-api.git
cd 4my-personal-api
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador

## 📡 Endpoints da API

### GET `/api/repos`

Retorna uma lista completa de todos os projetos do portfólio. Este endpoint é consumido pelo [portfólio web](https://portfolio-weld-phi-94.vercel.app) para exibir os projetos dinamicamente.

**URL de Produção:** `https://4my-personal-api.vercel.app/api/repos`

**Resposta:**
```json
[
  {
    "repoName": "nome-do-projeto",
    "id": 0,
    "html_url": "https://github.com/Phillipml/nome-do-projeto",
    "description": "Descrição detalhada do projeto",
    "readme": "https://raw.githubusercontent.com/Phillipml/nome-do-projeto/main/README.md",
    "technologies": ["React", "TypeScript", "Next.js"],
    "thumbnail": "/images/nome-do-projeto.png",
    "demo_url": "https://demo-do-projeto.vercel.app/",
    "highlight": "Principais destaques técnicos do projeto",
    "role": "Frontend Developer"
  }
]
```

### 🔗 Integração com o Portfólio

O portfólio consome esta API para:
- Exibir lista dinâmica de projetos
- Mostrar tecnologias utilizadas
- Linkar para repositórios e demos
- Exibir thumbnails dos projetos
- Destacar habilidades técnicas

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Gera build de produção com Turbopack
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint para verificar qualidade do código

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Projetos Relacionados

- **[Portfólio Web](https://github.com/Phillipml/portfolio)** - Frontend que consome esta API
- **[Portfólio Online](https://portfolio-weld-phi-94.vercel.app)** - Versão deployada do portfólio

## 📞 Contato

**Phillip ML**
- GitHub: [@Phillipml](https://github.com/Phillipml)
- LinkedIn: [Phillip ML](https://linkedin.com/in/phillipml)
- Portfólio: [portfolio-weld-phi-94.vercel.app](https://portfolio-weld-phi-94.vercel.app)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
