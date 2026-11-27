import {
  Brand,
  BrandMark,
  BrandName,
  BrandTagline,
  BrandText,
} from "@components/brand";
import { LanguageToggle } from "@components/language-toggle";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@ui/button";
import { Download, Menu } from "lucide-react";
import Image from "next/image";
import {
  Navbar,
  NavbarActions,
  NavbarContainer,
  NavbarLink,
  NavbarNav,
} from "./navbar";

const meta = {
  title: "Custom/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarContainer>
        <Brand href="#inicio">
          <BrandMark>
            <Image
              src="/logo.svg"
              alt="Logo Marcos Paulo"
              width={28}
              height={28}
            />
          </BrandMark>
          <BrandText>
            <BrandName>Marcos Paulo</BrandName>
            <BrandTagline>Full Stack Dev</BrandTagline>
          </BrandText>
        </Brand>
        <NavbarNav>
          <NavbarLink href="#sobre" active>
            Sobre Mim
          </NavbarLink>
          <NavbarLink href="#especialidades">Especialidades</NavbarLink>
          <NavbarLink href="#experiencia">Linha do Tempo</NavbarLink>
          <NavbarLink href="#certificados">Certificados</NavbarLink>
          <NavbarLink href="#contato">Contato</NavbarLink>
        </NavbarNav>
        <NavbarActions>
          <LanguageToggle />
          <Button size="sm" className="hidden sm:inline-flex">
            <Download />
            Download Currículo
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-label="Abrir menu"
          >
            <Menu />
          </Button>
        </NavbarActions>
      </NavbarContainer>
    </Navbar>
  ),
};
