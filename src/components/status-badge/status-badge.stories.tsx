import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PulseDot, StatusBadge } from "./status-badge";

const meta = {
  title: "Custom/StatusBadge",
  component: StatusBadge,
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Available: Story = {
  render: () => (
    <StatusBadge>
      <PulseDot tone="emerald" />
      Disponível para novos desafios e projetos
    </StatusBadge>
  ),
};

export const CurrentPeriod: Story = {
  render: () => (
    <StatusBadge className="rounded px-2 py-0.5 font-mono text-[11px]">
      <PulseDot tone="orange" size="sm" />
      2025 - Atual
    </StatusBadge>
  ),
};
