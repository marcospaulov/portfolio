import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Seu nome completo",
    className: "w-80",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" placeholder="contato@exemplo.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "marcs@portfolio.dev",
    className: "w-80",
  },
};

export const Invalid: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="invalid-email">E-mail</Label>
      <Input
        id="invalid-email"
        type="email"
        defaultValue="email-invalido"
        aria-invalid={true}
      />
      <p className="text-xs text-destructive">
        Informe um endereço de e-mail válido.
      </p>
    </div>
  ),
};
