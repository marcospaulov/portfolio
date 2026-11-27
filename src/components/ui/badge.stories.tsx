import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ember",
        "tech",
        "destructive",
        "ghost",
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ember: Story = {
  args: {
    variant: "ember",
    children: "Disponível para novos desafios e projetos",
  },
};

export const TechStack: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="tech">React</Badge>
      <Badge variant="tech">Next.js</Badge>
      <Badge variant="tech">TypeScript</Badge>
      <Badge variant="tech">TailwindCSS</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="ember">Ember</Badge>
      <Badge variant="tech">Tech</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};
