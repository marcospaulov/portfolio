import type { Locale } from "@components/language-toggle";

export type SpecialtyIconKey =
  | "frontend"
  | "backend"
  | "cloud"
  | "architecture";
export type SpecialtyTone = "orange" | "amber" | "blue" | "emerald";
export type CertificationIconKey = "english" | "business" | "kotlin" | "docker";

export interface PortfolioContent {
  nav: {
    about: string;
    specialties: string;
    timeline: string;
    certifications: string;
    contact: string;
    downloadResume: string;
    openMenu: string;
    menuTitle: string;
    menuDescription: string;
  };
  brand: {
    name: string;
    tagline: string;
    footerTagline: string;
    logoAlt: string;
  };
  hero: {
    status: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    githubCta: string;
    githubHref: string;
    metrics: Array<{ value: string; label: string }>;
    portraitAlt: string;
    handle: string;
    roleBadge: string;
    pills: {
      topRight: string;
      bottomLeft: string;
    };
  };
  specialties: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      id: string;
      icon: SpecialtyIconKey;
      tone: SpecialtyTone;
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      id: string;
      period: string;
      title: string;
      description: string;
      highlighted?: boolean;
    }>;
  };
  certifications: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      id: string;
      icon: CertificationIconKey;
      issuer: string;
      title: string;
    }>;
  };
  contact: {
    channels: {
      whatsapp: string;
      email: string;
    };
    title: string;
    description: string;
    whatsappInfo: {
      directLabel: string;
      directValue: string;
      directHref: string;
      responseLabel: string;
      responseValue: string;
    };
    emailInfo: {
      emailLabel: string;
      emailValue: string;
      emailHref: string;
      locationLabel: string;
      locationValue: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitted: string;
      errors: {
        name: string;
        contact: string;
        message: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    nav: {
      about: "Sobre Mim",
      specialties: "Especialidades",
      timeline: "Linha do Tempo",
      certifications: "Certificados",
      contact: "Contato",
      downloadResume: "Download Currículo",
      openMenu: "Abrir menu de navegação",
      menuTitle: "Navegação",
      menuDescription: "Acesse rapidamente qualquer seção do portfólio.",
    },
    brand: {
      name: "Marcos Paulo",
      tagline: "Full Stack Dev",
      footerTagline: "Full Stack Developer",
      logoAlt: "Logo Marcos Paulo",
    },
    hero: {
      status: "Disponível para novos desafios e projetos",
      headlinePrefix: "Construindo aplicações",
      headlineHighlight: "modernas, escaláveis",
      headlineSuffix: "e de alta performance.",
      description:
        "Desenvolvedor Full Stack apaixonado por arquitetura limpa e produtos digitais consistentes. Especialista no ecossistema Node.js, Java, React e Next.js.",
      primaryCta: "Ver Trajetória",
      secondaryCta: "Entrar em Contato",
      githubCta: "GitHub",
      githubHref: "https://github.com/marcospaulov",
      metrics: [
        { value: "+2", label: "Anos de Estudo" },
        { value: "4", label: "Certificações" },
        { value: "1", label: "Pós-Graduação" },
      ],
      portraitAlt: "Marcos Paulo Vimieiro",
      handle: "@marcospaulov",
      roleBadge: "Full Stack",
      pills: {
        topRight: "React & Next.js",
        bottomLeft: "Node & Java",
      },
    },
    specialties: {
      eyebrow: "Competências",
      title: "Especialidades Técnicas",
      description:
        "Áreas de atuação estruturadas com foco em qualidade de software, arquitetura robusta e boa experiência do usuário.",
      items: [
        {
          id: "frontend",
          icon: "frontend",
          tone: "orange",
          title: "Frontend Development",
          description:
            "Construção de interfaces reativas, acessíveis e focadas em usabilidade. Aplicação de componentização limpa e gerenciamento de estado previsível.",
          tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        },
        {
          id: "backend",
          icon: "backend",
          tone: "amber",
          title: "Backend Development",
          description:
            "Desenvolvimento de APIs RESTful resilientes e seguras, modelagem de dados relacionais e otimização de fluxos de processamento.",
          tags: ["Node.js", "Java", "Express", "PostgreSQL"],
        },
        {
          id: "cloud",
          icon: "cloud",
          tone: "blue",
          title: "Cloud & Infraestrutura",
          description:
            "Containerização com Docker, configuração de pipelines CI/CD automatizadas e deploys rápidos em ambientes cloud e edge.",
          tags: ["Docker", "AWS", "CI/CD", "Vercel"],
        },
        {
          id: "architecture",
          icon: "architecture",
          tone: "emerald",
          title: "Arquitetura de Software",
          description:
            "Aplicação de Clean Code, princípios SOLID e padrões de projeto para construir sistemas fáceis de manter e escaláveis a longo prazo.",
          tags: ["Clean Arch", "SOLID", "Design Patterns", "Microservices"],
        },
      ],
    },
    about: {
      eyebrow: "Trajetória Pessoal",
      title: "Sobre Mim",
      paragraphs: [
        "Sou um desenvolvedor apaixonado por resolver problemas complexos através de código limpo e arquiteturas bem definidas. Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionavam por trás das telas.",
        "Atualmente focado em ecossistemas JavaScript/TypeScript e Java, busco constantemente aprimorar minhas habilidades em construir aplicações de ponta a ponta. Acredito firmemente que a tecnologia deve servir como uma ferramenta para facilitar a vida das pessoas e impulsionar negócios.",
        "Quando não estou codando, estou estudando novas tendências, participando de comunidades tech ou trabalhando em projetos pessoais para explorar novas ferramentas.",
      ],
    },
    timeline: {
      eyebrow: "Carreira & Formação",
      title: "Crescimento Profissional",
      description:
        "Uma visão cronológica da minha evolução técnica e acadêmica.",
      items: [
        {
          id: "postgrad",
          period: "2025 - Atual",
          title: "Pós-graduação em Engenharia de Software",
          description:
            "Especialização em arquitetura de software, qualidade, padrões de projeto e desenvolvimento de sistemas escaláveis e resilientes.",
          highlighted: true,
        },
        {
          id: "support",
          period: "2024 - 2025",
          title: "Analista de Suporte Remoto",
          description:
            "Automatização de rotinas de backup utilizando PowerShell e Bash, reduzindo o tempo de restauração e aumentando a eficiência operacional.",
        },
        {
          id: "freelancer",
          period: "2023 - 2024",
          title: "Desenvolvedor Front-end Freelancer",
          description:
            "Desenvolvimento de aplicações corporativas com React, TypeScript e integração com APIs REST, priorizando performance e acessibilidade.",
        },
        {
          id: "graduation",
          period: "2021 - 2024",
          title: "Graduação Ciência da Computação",
          description:
            "Construção de uma base sólida em desenvolvimento de software, algoritmos, bancos de dados e arquitetura de sistemas através de práticas de engenharia de software.",
        },
      ],
    },
    certifications: {
      eyebrow: "Reconhecimentos",
      title: "Certificações",
      description:
        "Validações contínuas de competências técnicas e metodologias.",
      items: [
        {
          id: "english-live",
          icon: "english",
          issuer: "English Live",
          title: "Proficiência em Inglês",
        },
        {
          id: "sebrae",
          icon: "business",
          issuer: "SEBRAE",
          title: "Empreendedorismo Digital",
        },
        {
          id: "udemy-kotlin",
          icon: "kotlin",
          issuer: "Udemy",
          title: "Dev com Kotlin",
        },
        {
          id: "udemy-docker",
          icon: "docker",
          issuer: "Udemy",
          title: "Docker para Desenvolvedores",
        },
      ],
    },
    contact: {
      channels: {
        whatsapp: "WhatsApp",
        email: "E-mail",
      },
      title: "Vamos Conversar?",
      description:
        "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para agregar ao seu time técnico.",
      whatsappInfo: {
        directLabel: "WhatsApp Direto",
        directValue: "+55 (32) 99961-5269",
        directHref: "https://wa.me/5532999615269",
        responseLabel: "Tempo médio",
        responseValue: "Resposta em até 1 hora",
      },
      emailInfo: {
        emailLabel: "E-mail Profissional",
        emailValue: "marcospvs96@gmail.com",
        emailHref: "mailto:marcospvs96@gmail.com",
        locationLabel: "Localização",
        locationValue: "Minas Gerais, Brasil",
      },
      form: {
        nameLabel: "Nome completo",
        namePlaceholder: "Ex: Carlos Silva",
        contactLabel: "Seu contato (E-mail ou WhatsApp)",
        contactPlaceholder: "carlos@exemplo.com ou (31) 99999-9999",
        messageLabel: "Mensagem",
        messagePlaceholder: "Como posso ajudar no seu projeto?",
        submit: "Enviar Mensagem",
        submitted: "Mensagem preparada! Obrigado pelo contato.",
        errors: {
          name: "Informe seu nome completo.",
          contact: "Informe um e-mail ou WhatsApp para retorno.",
          message: "Escreva uma breve mensagem sobre o projeto.",
        },
      },
    },
    footer: {
      copyright: "© 2025 Marcos Paulo Vimieiro. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About Me",
      specialties: "Specialties",
      timeline: "Timeline",
      certifications: "Certifications",
      contact: "Contact",
      downloadResume: "Download Resume",
      openMenu: "Open navigation menu",
      menuTitle: "Navigation",
      menuDescription: "Jump quickly to any section of the portfolio.",
    },
    brand: {
      name: "Marcos Paulo",
      tagline: "Full Stack Dev",
      footerTagline: "Full Stack Developer",
      logoAlt: "Marcos Paulo Logo",
    },
    hero: {
      status: "Available for new challenges and projects",
      headlinePrefix: "Building",
      headlineHighlight: "modern, scalable",
      headlineSuffix: "and high-performance applications.",
      description:
        "Full Stack Developer passionate about clean architecture and consistent digital products. Specialized in Node.js, Java, React, and Next.js.",
      primaryCta: "View Journey",
      secondaryCta: "Get in Touch",
      githubCta: "GitHub",
      githubHref: "https://github.com/marcospaulov",
      metrics: [
        { value: "+2", label: "Years of Study" },
        { value: "4", label: "Certifications" },
        { value: "1", label: "Postgraduate" },
      ],
      portraitAlt: "Marcos Paulo Vimieiro",
      handle: "@marcospaulov",
      roleBadge: "Full Stack",
      pills: {
        topRight: "React & Next.js",
        bottomLeft: "Node & Java",
      },
    },
    specialties: {
      eyebrow: "Capabilities",
      title: "Technical Specialties",
      description:
        "Structured areas of expertise focused on software quality, robust architecture, and great user experience.",
      items: [
        {
          id: "frontend",
          icon: "frontend",
          tone: "orange",
          title: "Frontend Development",
          description:
            "Building reactive, accessible, and usability-focused interfaces with clean componentization and predictable state management.",
          tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        },
        {
          id: "backend",
          icon: "backend",
          tone: "amber",
          title: "Backend Development",
          description:
            "Developing resilient and secure RESTful APIs, relational data modeling, and optimized processing workflows.",
          tags: ["Node.js", "Java", "Express", "PostgreSQL"],
        },
        {
          id: "cloud",
          icon: "cloud",
          tone: "blue",
          title: "Cloud & Infrastructure",
          description:
            "Containerization with Docker, automated CI/CD pipelines, and fast deployments across cloud and edge environments.",
          tags: ["Docker", "AWS", "CI/CD", "Vercel"],
        },
        {
          id: "architecture",
          icon: "architecture",
          tone: "emerald",
          title: "Software Architecture",
          description:
            "Applying Clean Code, SOLID principles, and design patterns to build maintainable, long-term scalable systems.",
          tags: ["Clean Arch", "SOLID", "Design Patterns", "Microservices"],
        },
      ],
    },
    about: {
      eyebrow: "Personal Journey",
      title: "About Me",
      paragraphs: [
        "I am a developer passionate about solving complex problems through clean code and well-defined architectures. My journey in technology started with curiosity about how things worked behind the scenes.",
        "Currently focused on JavaScript/TypeScript and Java ecosystems, I constantly refine my skills in building end-to-end applications. I firmly believe technology should serve as a tool to make people's lives easier and drive businesses forward.",
        "When I am not coding, I am studying emerging trends, engaging with tech communities, or building personal projects to explore new tools.",
      ],
    },
    timeline: {
      eyebrow: "Career & Education",
      title: "Professional Growth",
      description:
        "A chronological view of my technical and academic evolution.",
      items: [
        {
          id: "postgrad",
          period: "2025 - Present",
          title: "Postgraduate in Software Engineering",
          description:
            "Specialization in software architecture, quality, design patterns, and building scalable, resilient systems.",
          highlighted: true,
        },
        {
          id: "support",
          period: "2024 - 2025",
          title: "Remote Support Analyst",
          description:
            "Automated backup routines using PowerShell and Bash, reducing restore times and improving operational efficiency.",
        },
        {
          id: "freelancer",
          period: "2023 - 2024",
          title: "Freelance Front-end Developer",
          description:
            "Built corporate applications with React, TypeScript, and REST API integrations, prioritizing performance and accessibility.",
        },
        {
          id: "graduation",
          period: "2021 - 2024",
          title: "B.S. in Computer Science",
          description:
            "Built a strong foundation in software development, algorithms, databases, and systems architecture through software engineering practices.",
        },
      ],
    },
    certifications: {
      eyebrow: "Credentials",
      title: "Certifications",
      description:
        "Continuous validation of technical competencies and methodologies.",
      items: [
        {
          id: "english-live",
          icon: "english",
          issuer: "English Live",
          title: "English Proficiency",
        },
        {
          id: "sebrae",
          icon: "business",
          issuer: "SEBRAE",
          title: "Digital Entrepreneurship",
        },
        {
          id: "udemy-kotlin",
          icon: "kotlin",
          issuer: "Udemy",
          title: "Kotlin Development",
        },
        {
          id: "udemy-docker",
          icon: "docker",
          issuer: "Udemy",
          title: "Docker for Developers",
        },
      ],
    },
    contact: {
      channels: {
        whatsapp: "WhatsApp",
        email: "Email",
      },
      title: "Let's Talk?",
      description:
        "I am always open to discussing new projects, creative ideas, or opportunities to contribute to your engineering team.",
      whatsappInfo: {
        directLabel: "Direct WhatsApp",
        directValue: "+55 (32) 99961-5269",
        directHref: "https://wa.me/5532999615269",
        responseLabel: "Average reply",
        responseValue: "Usually within 1 hour",
      },
      emailInfo: {
        emailLabel: "Work Email",
        emailValue: "marcospvs96@gmail.com",
        emailHref: "mailto:marcospvs96@gmail.com",
        locationLabel: "Location",
        locationValue: "Minas Gerais, Brazil",
      },
      form: {
        nameLabel: "Full name",
        namePlaceholder: "e.g. Carlos Silva",
        contactLabel: "Your contact (Email or WhatsApp)",
        contactPlaceholder: "carlos@example.com or +55 (31) 99999-9999",
        messageLabel: "Message",
        messagePlaceholder: "How can I help with your project?",
        submit: "Send Message",
        submitted: "Message ready! Thanks for reaching out.",
        errors: {
          name: "Please enter your full name.",
          contact: "Please provide an email or WhatsApp number.",
          message: "Please write a short message about your project.",
        },
      },
    },
    footer: {
      copyright: "© 2025 Marcos Paulo Vimieiro. All rights reserved.",
    },
  },
};
