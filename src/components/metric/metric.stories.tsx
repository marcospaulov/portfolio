import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MetricItem, MetricLabel, MetricList, MetricValue } from "./metric";

const meta = {
  title: "Custom/Metric",
  component: MetricList,
} satisfies Meta<typeof MetricList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroStats: Story = {
  render: () => (
    <MetricList className="w-[480px]">
      <MetricItem>
        <MetricLabel>Anos de Estudo</MetricLabel>
        <MetricValue>+2</MetricValue>
      </MetricItem>
      <MetricItem>
        <MetricLabel>Certificações</MetricLabel>
        <MetricValue>4</MetricValue>
      </MetricItem>
      <MetricItem>
        <MetricLabel>Pós-Graduação</MetricLabel>
        <MetricValue>1</MetricValue>
      </MetricItem>
    </MetricList>
  ),
};
