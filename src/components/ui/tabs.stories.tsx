import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="frontend" className="w-96">
      <TabsList>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="devops">DevOps</TabsTrigger>
      </TabsList>
      <TabsContent value="frontend" className="p-2 text-muted-foreground">
        React, Next.js, TypeScript e TailwindCSS para interfaces responsivas.
      </TabsContent>
      <TabsContent value="backend" className="p-2 text-muted-foreground">
        APIs escaláveis com Node.js, PostgreSQL e arquitetura limpa.
      </TabsContent>
      <TabsContent value="devops" className="p-2 text-muted-foreground">
        CI/CD, Docker e observabilidade para entregas contínuas.
      </TabsContent>
    </Tabs>
  ),
};

export const Ember: Story = {
  render: () => (
    <Tabs defaultValue="projetos" className="w-96">
      <TabsList variant="ember">
        <TabsTrigger value="projetos">Projetos</TabsTrigger>
        <TabsTrigger value="experiencia">Experiência</TabsTrigger>
        <TabsTrigger value="formacao">Formação</TabsTrigger>
      </TabsList>
      <TabsContent value="projetos" className="p-2 text-muted-foreground">
        Seleção de projetos em destaque com foco em performance e UX.
      </TabsContent>
      <TabsContent value="experiencia" className="p-2 text-muted-foreground">
        Histórico profissional em produtos digitais de alta escala.
      </TabsContent>
      <TabsContent value="formacao" className="p-2 text-muted-foreground">
        Graduação, certificações e estudos contínuos em engenharia de software.
      </TabsContent>
    </Tabs>
  ),
};

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="visao-geral" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
        <TabsTrigger value="arquitetura">Arquitetura</TabsTrigger>
        <TabsTrigger value="metricas">Métricas</TabsTrigger>
      </TabsList>
      <TabsContent value="visao-geral" className="p-2 text-muted-foreground">
        Resumo executivo dos objetivos e resultados alcançados.
      </TabsContent>
      <TabsContent value="arquitetura" className="p-2 text-muted-foreground">
        Decisões técnicas, padrões aplicados e integrações principais.
      </TabsContent>
      <TabsContent value="metricas" className="p-2 text-muted-foreground">
        Indicadores de desempenho, acessibilidade e Core Web Vitals.
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="perfil" orientation="vertical" className="w-96">
      <TabsList>
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="stack">Stack</TabsTrigger>
        <TabsTrigger value="contato">Contato</TabsTrigger>
      </TabsList>
      <TabsContent value="perfil" className="p-2 text-muted-foreground">
        Desenvolvedor focado em experiências web modernas e acessíveis.
      </TabsContent>
      <TabsContent value="stack" className="p-2 text-muted-foreground">
        TypeScript, React, Next.js, Node.js e ferramentas de design system.
      </TabsContent>
      <TabsContent value="contato" className="p-2 text-muted-foreground">
        Disponível para projetos freelance e oportunidades full-time.
      </TabsContent>
    </Tabs>
  ),
};
