import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Nome completo",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="project-name">Nome do projeto</Label>
      <Input id="project-name" placeholder="Ex: Design System Portfolio" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="group grid w-80 gap-2" data-disabled="true">
      <Label htmlFor="disabled-field">Campo desabilitado</Label>
      <Input id="disabled-field" disabled defaultValue="Somente leitura" />
    </div>
  ),
};
