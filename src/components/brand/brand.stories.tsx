import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { Brand, BrandMark, BrandName, BrandTagline, BrandText } from "./brand";

const meta = {
  title: "Custom/Brand",
  component: Brand,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBrand: Story = {
  render: () => (
    <Brand href="#inicio" size="default">
      <BrandMark>
        <Image src="/logo.svg" alt="Logo Marcos Paulo" width={28} height={28} />
      </BrandMark>
      <BrandText>
        <BrandName>Marcos Paulo</BrandName>
        <BrandTagline>Full Stack Dev</BrandTagline>
      </BrandText>
    </Brand>
  ),
};

export const FooterBrand: Story = {
  render: () => (
    <Brand href="#inicio" size="sm">
      <BrandMark>
        <Image src="/logo.svg" alt="Logo Marcos Paulo" width={18} height={18} />
      </BrandMark>
      <BrandText>
        <BrandName>Marcos Paulo</BrandName>
        <span className="text-zinc-600">|</span>
        <BrandTagline>Full Stack Developer</BrandTagline>
      </BrandText>
    </Brand>
  ),
};
