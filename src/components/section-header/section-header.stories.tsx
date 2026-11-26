import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderEyebrow,
  SectionHeaderGroup,
  SectionHeaderTitle,
} from "./section-header";

const meta = {
  title: "Custom/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    align: {
      control: "select",
      options: ["split", "center", "left"],
    },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Split: Story = {
  render: () => (
    <SectionHeader align="split" className="w-full max-w-4xl">
      <SectionHeaderGroup>
        <SectionHeaderEyebrow>Competências</SectionHeaderEyebrow>
        <SectionHeaderTitle>Especialidades Técnicas</SectionHeaderTitle>
      </SectionHeaderGroup>
      <SectionHeaderDescription>
        Áreas de atuação estruturadas com foco em qualidade de software,
        arquitetura robusta e boa experiência do usuário.
      </SectionHeaderDescription>
    </SectionHeader>
  ),
};

export const Centered: Story = {
  render: () => (
    <SectionHeader align="center">
      <SectionHeaderEyebrow>Carreira &amp; Formação</SectionHeaderEyebrow>
      <SectionHeaderTitle>Crescimento Profissional</SectionHeaderTitle>
      <SectionHeaderDescription>
        Uma visão cronológica da minha evolução técnica e acadêmica.
      </SectionHeaderDescription>
    </SectionHeader>
  ),
};

export const Left: Story = {
  render: () => (
    <SectionHeader align="left" className="max-w-2xl">
      <SectionHeaderEyebrow>Trajetória Pessoal</SectionHeaderEyebrow>
      <SectionHeaderTitle>Sobre Mim</SectionHeaderTitle>
    </SectionHeader>
  ),
};
