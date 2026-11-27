# Marcos Paulo Vimieiro — Portfólio

Portfólio pessoal de **Marcos Paulo Vimieiro**, Desenvolvedor Full Stack focado em aplicações modernas, escaláveis e de alta performance. Construído com **Next.js 16**, **React 19**, **Tailwind CSS 4**, **Base UI** e um design system próprio documentado no **Storybook**.

## Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- **UI & Biblioteca:** [React 19](https://react.dev) · [TypeScript 5](https://www.typescriptlang.org)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com) · `tw-animate-css` · `class-variance-authority`
- **Componentes & Acessibilidade:** [Base UI](https://base-ui.com) · [shadcn](https://ui.shadcn.com) · [Lucide React](https://lucide.dev)
- **Documentação de Componentes:** [Storybook 10](https://storybook.js.org) (`@storybook/nextjs-vite`)
- **Qualidade de Código:** [Biome 2](https://biomejs.dev) (lint + format)
- **Gerenciador de Pacotes:** [pnpm](https://pnpm.io)

## Funcionalidades

- **Design System próprio (Kinetic Ember Dark):** tokens semânticos em `globals.css`, tipografia `Geist` e `Geist Mono`, e componentes reutilizáveis com stories no Storybook.
- **Alternância de idioma (PT / EN):** troca dinâmica de todo o conteúdo da interface diretamente pelo header.
- **Navegação responsiva:** barra fixa com drawer mobile (`Sheet`) e rolagem suave entre seções.
- **Seções da Landing Page:**
  - **Hero:** badge de disponibilidade, apresentação, CTAs (Trajetória, Contato e GitHub), métricas e `ProfileShowcase` com `FloatingPill`s.
  - **Especialidades Técnicas:** grade de competências (Frontend, Backend, Cloud & Infraestrutura e Arquitetura de Software).
  - **Sobre Mim:** trajetória pessoal e foco técnico.
  - **Crescimento Profissional:** linha do tempo cronológica destacando a formação e experiências.
  - **Certificações:** grade de certificações e reconhecimentos.
  - **Contato:** alternador de canal (`WhatsApp` / `E-mail`) com validação de formulário e envio direto pelo canal selecionado.

## Estrutura do Projeto

```text
public/                         # Assets estáticos (logo e foto de perfil)
src/
├── app/
│   ├── globals.css             # Tokens do tema e utilitários CSS
│   ├── layout.tsx              # Layout raiz, fontes, metadados e providers
│   └── page.tsx                # Página inicial
├── components/
│   ├── layout/                 # SiteHeader, SiteFooter e LocaleProvider
│   ├── pages/
│   │   └── landing-page/       # LandingPage e subcomponentes (ContactSection)
│   ├── ui/                     # Primitivos de UI (Button, Card, Badge, Sheet, Tabs...)
│   └── <component>/            # Componentes customizados (Brand, Navbar, Timeline...)
└── lib/
    ├── content.ts              # Conteúdo estruturado (PT / EN)
    └── utils.ts                # Utilitário de classes (cn)
```

## Como Executar Localmente

### Pré-requisitos

- **Node.js** 20+
- **pnpm** 12+

### Instalação e desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar o servidor de desenvolvimento (http://localhost:3000)
pnpm dev

# Iniciar o Storybook (http://localhost:6006)
pnpm storybook
```

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento Next.js |
| `pnpm build` | Gera o build de produção |
| `pnpm start` | Executa o servidor de produção |
| `pnpm lint` | Executa checagens de lint e formatação com Biome |
| `pnpm format` | Formata o código automaticamente com Biome |
| `pnpm storybook` | Abre o Storybook localmente na porta `6006` |
| `pnpm build-storybook` | Gera o build estático do Storybook |

## Contato

- **GitHub:** [@marcospaulov](https://github.com/marcospaulov)
- **LinkedIn:** [linkedin.com/in/marcospaulov0](https://www.linkedin.com/in/marcospaulov0/)
- **X (Twitter):** [@marcospaulov01](https://x.com/marcospaulov01)
- **E-mail:** [marcospvs96@gmail.com](mailto:marcospvs96@gmail.com)
