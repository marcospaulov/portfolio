import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        ember: { name: "Kinetic Ember", value: "#09090b" },
        card: { name: "Card Surface", value: "#121215" },
        muted: { name: "Muted Surface", value: "#18181b" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "ember" },
  },
};

export default preview;
