import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LanguageToggle } from "./language-toggle";

const meta = {
  title: "Custom/LanguageToggle",
  component: LanguageToggle,
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "pt",
  },
};

export const EnglishSelected: Story = {
  args: {
    defaultValue: "en",
  },
};
