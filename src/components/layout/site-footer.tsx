"use client";

import {
  Brand,
  BrandMark,
  BrandName,
  BrandTagline,
  BrandText,
} from "@components/brand";
import Image from "next/image";
import { useLocale } from "./locale-provider";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcospaulov0/" },
  { label: "GitHub", href: "https://github.com/marcospaulov" },
  { label: "X (Twitter)", href: "https://x.com/marcospaulov01" },
];

function SiteFooter() {
  const { content } = useLocale();

  return (
    <footer className="relative z-10 border-t border-border bg-background py-10 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-8 md:flex-row">
        <Brand href="#inicio" size="sm">
          <BrandMark>
            <Image
              src="/logo.svg"
              alt={content.brand.logoAlt}
              width={20}
              height={20}
            />
          </BrandMark>
          <BrandText>
            <BrandName>{content.brand.name}</BrandName>
            <span aria-hidden="true" className="text-zinc-600">
              |
            </span>
            <BrandTagline>{content.brand.footerTagline}</BrandTagline>
          </BrandText>
        </Brand>

        <p>{content.footer.copyright}</p>

        <div className="flex items-center gap-6 font-medium">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-orange-400"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
