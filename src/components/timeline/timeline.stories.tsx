import { PulseDot, StatusBadge } from "@components/status-badge";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Timeline,
  TimelineCard,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelinePeriod,
  TimelineTitle,
} from "./timeline";

const meta = {
  title: "Custom/Timeline",
  component: Timeline,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CareerJourney: Story = {
  render: () => (
    <Timeline>
      <TimelineItem side="left" highlighted>
        <TimelineDot />
        <TimelineContent>
          <TimelineCard>
            <TimelinePeriod>
              <StatusBadge className="rounded px-2 py-0.5 font-mono text-[11px]">
                <PulseDot tone="orange" size="sm" />
                2025 - Atual
              </StatusBadge>
            </TimelinePeriod>
            <TimelineTitle>
              Pós-graduação em Engenharia de Software
            </TimelineTitle>
            <TimelineDescription>
              Especialização em arquitetura de software, qualidade, padrões de
              projeto e desenvolvimento de sistemas escaláveis e resilientes.
            </TimelineDescription>
          </TimelineCard>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem side="right">
        <TimelineDot />
        <TimelineContent>
          <TimelineCard>
            <TimelinePeriod>2024 - 2025</TimelinePeriod>
            <TimelineTitle>Analista de Suporte Remoto</TimelineTitle>
            <TimelineDescription>
              Automatização de rotinas de backup utilizando PowerShell e Bash,
              reduzindo o tempo de restauração e aumentando a eficiência
              operacional.
            </TimelineDescription>
          </TimelineCard>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem side="left">
        <TimelineDot />
        <TimelineContent>
          <TimelineCard>
            <TimelinePeriod>2023 - 2024</TimelinePeriod>
            <TimelineTitle>Desenvolvedor Front-end Freelancer</TimelineTitle>
            <TimelineDescription>
              Desenvolvimento de aplicações corporativas com React, TypeScript e
              integração com APIs REST.
            </TimelineDescription>
          </TimelineCard>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
