import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Cloud, Cpu, Globe, Languages, Server } from "lucide-react";
import { IconBox } from "./icon-box";

const meta = {
  title: "Custom/IconBox",
  component: IconBox,
  argTypes: {
    tone: {
      control: "select",
      options: ["orange", "amber", "blue", "emerald", "muted"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpecialtyTones: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconBox tone="orange" size="md">
        <Globe />
      </IconBox>
      <IconBox tone="amber" size="md">
        <Server />
      </IconBox>
      <IconBox tone="blue" size="md">
        <Cloud />
      </IconBox>
      <IconBox tone="emerald" size="md">
        <Cpu />
      </IconBox>
    </div>
  ),
};

export const CertificationMuted: Story = {
  render: () => (
    <IconBox tone="muted" size="lg">
      <Languages />
    </IconBox>
  ),
};
