import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  argTypes: {
    glow: { control: "boolean" },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    glow: true,
    className: "w-96",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Frontend Development</CardTitle>
        <CardDescription>
          Construção de interfaces reativas, acessíveis e focadas em
          usabilidade.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 border-t border-border-subtle pt-4">
        <Badge variant="tech">React</Badge>
        <Badge variant="tech">Next.js</Badge>
        <Badge variant="tech">TypeScript</Badge>
        <Badge variant="tech">TailwindCSS</Badge>
      </CardContent>
    </Card>
  ),
};
