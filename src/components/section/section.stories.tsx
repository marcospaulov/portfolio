import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AmbientBackground, Section, SectionGlow } from "./section";

const meta = {
  title: "Custom/Section",
  component: Section,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "spaced", "hero", "surface"],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurfaceWithGlow: Story = {
  render: () => (
    <Section variant="surface" className="max-w-3xl">
      <SectionGlow position="bottom-right" />
      <div className="relative z-10 space-y-2">
        <p className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">
          Trajetória Pessoal
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Sobre Mim
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Container de superfície reutilizável com borda sutil e brilho ambiente
          opcional.
        </p>
      </div>
    </Section>
  ),
};

export const AmbientPreview: Story = {
  render: () => (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border bg-background">
      <AmbientBackground className="absolute" />
      <div className="relative z-10 flex h-full items-center justify-center font-mono text-xs text-muted-foreground">
        AmbientBackground Layer
      </div>
    </div>
  ),
};
