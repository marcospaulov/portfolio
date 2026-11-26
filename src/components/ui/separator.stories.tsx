import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-foreground">Kinetic Ember</h4>
        <p className="text-sm text-muted-foreground">
          Sistema de design do portfólio pessoal.
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
        <span>Projetos</span>
        <Separator orientation="vertical" />
        <span>Trajetória</span>
        <Separator orientation="vertical" />
        <span>Contato</span>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-6 items-center gap-4 text-sm text-foreground">
      <span>React</span>
      <Separator orientation="vertical" />
      <span>Next.js</span>
      <Separator orientation="vertical" />
      <span>TypeScript</span>
    </div>
  ),
};
