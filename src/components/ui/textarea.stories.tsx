import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./label";
import { Textarea } from "./textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Conte um pouco sobre o seu projeto ou ideia...",
    className: "w-96",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-96 gap-2">
      <Label htmlFor="message">Mensagem</Label>
      <Textarea
        id="message"
        placeholder="Conte um pouco sobre o seu projeto ou ideia..."
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Esta mensagem não pode ser editada no momento.",
    className: "w-96",
  },
};

export const Invalid: Story = {
  render: () => (
    <div className="grid w-96 gap-2">
      <Label htmlFor="invalid-message">Mensagem</Label>
      <Textarea id="invalid-message" defaultValue="Oi" aria-invalid={true} />
      <p className="text-xs text-destructive">
        A mensagem deve ter pelo menos 10 caracteres.
      </p>
    </div>
  ),
};
