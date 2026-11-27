import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Database, Terminal } from "lucide-react";
import {
  FloatingPill,
  FloatingPillIcon,
  FloatingPillLabel,
} from "./floating-pill";

const meta = {
  title: "Custom/FloatingPill",
  component: FloatingPill,
} satisfies Meta<typeof FloatingPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TechPills: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <FloatingPill>
        <FloatingPillIcon tone="orange">
          <Terminal />
        </FloatingPillIcon>
        <FloatingPillLabel>React &amp; Next.js</FloatingPillLabel>
      </FloatingPill>
      <FloatingPill>
        <FloatingPillIcon tone="emerald">
          <Database />
        </FloatingPillIcon>
        <FloatingPillLabel>Node &amp; Java</FloatingPillLabel>
      </FloatingPill>
    </div>
  ),
};
