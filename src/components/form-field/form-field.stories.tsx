import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { FormField, FormFieldError, FormFieldLabel } from "./form-field";

const meta = {
  title: "Custom/FormField",
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <FormField>
        <FormFieldLabel htmlFor="story-name">Nome completo</FormFieldLabel>
        <Input id="story-name" placeholder="Ex: Carlos Silva" />
      </FormField>

      <FormField invalid>
        <FormFieldLabel htmlFor="story-contact">
          Seu contato (E-mail ou WhatsApp)
        </FormFieldLabel>
        <Input
          id="story-contact"
          aria-invalid="true"
          placeholder="carlos@exemplo.com"
        />
        <FormFieldError>Informe um e-mail ou WhatsApp válido.</FormFieldError>
      </FormField>

      <FormField>
        <FormFieldLabel htmlFor="story-message">Mensagem</FormFieldLabel>
        <Textarea
          id="story-message"
          placeholder="Como posso ajudar no seu projeto?"
          rows={4}
        />
      </FormField>
    </div>
  ),
};
