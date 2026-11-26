import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Menu } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Menu />
        Abrir Menu
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navegação</SheetTitle>
          <SheetDescription>
            Acesse rapidamente as seções do portfólio.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-4 text-sm">
          <a href="#sobre" className="py-1.5 text-foreground hover:underline">
            Sobre
          </a>
          <a
            href="#projetos"
            className="py-1.5 text-foreground hover:underline"
          >
            Projetos
          </a>
          <a href="#contato" className="py-1.5 text-foreground hover:underline">
            Contato
          </a>
        </nav>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Fechar</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Abrir à Esquerda
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu Lateral</SheetTitle>
          <SheetDescription>
            Painel deslizante exibido a partir da borda esquerda.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="secondary" />}>
            Concluir
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Abrir em Baixo
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Detalhes do Projeto</SheetTitle>
          <SheetDescription>
            Painel inferior ideal para ações rápidas em telas menores.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="default" />}>
            Entendido
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>
        Sem botão de fechar
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Confirmação</SheetTitle>
          <SheetDescription>
            Use o botão no rodapé para encerrar este painel.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="default" />}>Fechar</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
