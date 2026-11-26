import {
  FloatingPill,
  FloatingPillIcon,
  FloatingPillLabel,
} from "@components/floating-pill";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@ui/badge";
import { Database, Terminal } from "lucide-react";
import Image from "next/image";
import {
  ProfileShowcase,
  ProfileShowcaseCaption,
  ProfileShowcaseFrame,
  ProfileShowcaseScrim,
} from "./profile-showcase";

const meta = {
  title: "Custom/ProfileShowcase",
  component: ProfileShowcase,
} satisfies Meta<typeof ProfileShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ProfileShowcase>
        <ProfileShowcaseFrame>
          <div className="flex size-full items-center justify-center bg-muted">
            <Image
              src="/logo.svg"
              alt="Marcos Paulo Vimieiro"
              width={128}
              height={128}
              className="transition-transform duration-500 group-hover/profile:scale-105"
            />
          </div>
          <ProfileShowcaseScrim />
          <ProfileShowcaseCaption>
            <span className="font-mono text-xs text-zinc-300">
              @marcospaulo
            </span>
            <Badge
              variant="ember"
              className="h-auto rounded px-2 py-0.5 font-mono text-[11px]"
            >
              Full Stack
            </Badge>
          </ProfileShowcaseCaption>
        </ProfileShowcaseFrame>
        <FloatingPill position="top-right">
          <FloatingPillIcon tone="orange">
            <Terminal />
          </FloatingPillIcon>
          <FloatingPillLabel>React &amp; Next.js</FloatingPillLabel>
        </FloatingPill>
        <FloatingPill position="bottom-left">
          <FloatingPillIcon tone="emerald">
            <Database />
          </FloatingPillIcon>
          <FloatingPillLabel>Node &amp; Java</FloatingPillLabel>
        </FloatingPill>
      </ProfileShowcase>
    </div>
  ),
};
