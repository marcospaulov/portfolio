"use client";

import {
  Brand,
  BrandMark,
  BrandName,
  BrandTagline,
  BrandText,
} from "@components/brand";
import { LanguageToggle } from "@components/language-toggle";
import {
  Navbar,
  NavbarActions,
  NavbarContainer,
  NavbarLink,
  NavbarNav,
} from "@components/navbar";
import { Button, buttonVariants } from "@ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ui/sheet";
import { cn } from "cn";
import { Download, Menu } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useLocale } from "./locale-provider";

function SiteHeader() {
  const { locale, setLocale, content } = useLocale();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = [
    { href: "#sobre", label: content.nav.about },
    { href: "#especialidades", label: content.nav.specialties },
    { href: "#experiencia", label: content.nav.timeline },
    { href: "#certificados", label: content.nav.certifications },
    { href: "#contato", label: content.nav.contact },
  ];

  return (
    <Navbar>
      <NavbarContainer>
        <Brand href="#inicio">
          <BrandMark>
            <Image
              src="/logo.svg"
              alt={content.brand.logoAlt}
              width={28}
              height={28}
              priority
            />
          </BrandMark>
          <BrandText>
            <BrandName>{content.brand.name}</BrandName>
            <BrandTagline>{content.brand.tagline}</BrandTagline>
          </BrandText>
        </Brand>

        <NavbarNav aria-label={content.nav.menuTitle}>
          {navItems.map((item) => (
            <NavbarLink key={item.href} href={item.href}>
              {item.label}
            </NavbarLink>
          ))}
        </NavbarNav>

        <NavbarActions>
          <LanguageToggle value={locale} onValueChange={setLocale} />

          <a
            href={content.nav.resumeHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden font-semibold sm:inline-flex",
            )}
          >
            <Download />
            {content.nav.downloadResume}
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="md:hidden"
                  aria-label={content.nav.openMenu}
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-background">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle>{content.nav.menuTitle}</SheetTitle>
                <SheetDescription>
                  {content.nav.menuDescription}
                </SheetDescription>
              </SheetHeader>
              <nav
                aria-label={content.nav.menuTitle}
                className="flex flex-col gap-1 px-4"
              >
                {navItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={(props) => (
                      <a
                        {...props}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {props.children}
                      </a>
                    )}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t border-border p-4">
                <SheetClose
                  nativeButton={false}
                  render={(props) => (
                    <a
                      {...props}
                      href={content.nav.resumeHref}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default", size: "default" }),
                        "w-full font-semibold",
                      )}
                    >
                      {props.children}
                    </a>
                  )}
                >
                  <Download />
                  {content.nav.downloadResume}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </NavbarActions>
      </NavbarContainer>
    </Navbar>
  );
}

export { SiteHeader };
