import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  InfoRow,
  InfoRowBody,
  InfoRowIcon,
  InfoRowLabel,
  InfoRowValue,
} from "./info-row";

const meta = {
  title: "Custom/InfoRow",
  component: InfoRow,
} satisfies Meta<typeof InfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactChannels: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <InfoRow
        render={(props) => (
          <a
            {...props}
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
          >
            {props.children}
          </a>
        )}
      >
        <InfoRowIcon tone="emerald">
          <Phone />
        </InfoRowIcon>
        <InfoRowBody>
          <InfoRowLabel>WhatsApp Direto</InfoRowLabel>
          <InfoRowValue>+55 (31) 9 0000-0000</InfoRowValue>
        </InfoRowBody>
      </InfoRow>

      <InfoRow>
        <InfoRowIcon tone="orange">
          <Clock />
        </InfoRowIcon>
        <InfoRowBody>
          <InfoRowLabel>Tempo médio</InfoRowLabel>
          <InfoRowValue>Resposta em até 1 hora</InfoRowValue>
        </InfoRowBody>
      </InfoRow>

      <InfoRow
        render={(props) => (
          <a {...props} href="mailto:contato@marcospaulo.dev">
            {props.children}
          </a>
        )}
      >
        <InfoRowIcon tone="orange">
          <Mail />
        </InfoRowIcon>
        <InfoRowBody>
          <InfoRowLabel>E-mail Profissional</InfoRowLabel>
          <InfoRowValue>contato@marcospaulo.dev</InfoRowValue>
        </InfoRowBody>
      </InfoRow>

      <InfoRow>
        <InfoRowIcon tone="muted">
          <MapPin />
        </InfoRowIcon>
        <InfoRowBody>
          <InfoRowLabel>Localização</InfoRowLabel>
          <InfoRowValue>Minas Gerais, Brasil</InfoRowValue>
        </InfoRowBody>
      </InfoRow>
    </div>
  ),
};
