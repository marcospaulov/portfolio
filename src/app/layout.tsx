import { LocaleProvider, SiteFooter, SiteHeader } from "@components/layout";
import { AmbientBackground } from "@components/section";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcos Paulo Vimieiro | Desenvolvedor Full Stack",
  description:
    "Portfólio de Marcos Paulo Vimieiro, Desenvolvedor Full Stack com foco em Node.js, Java, React e Next.js. Construindo aplicações modernas e escaláveis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LocaleProvider>
          <AmbientBackground />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
