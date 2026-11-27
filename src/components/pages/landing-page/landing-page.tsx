"use client";

import {
  FloatingPill,
  FloatingPillIcon,
  FloatingPillLabel,
} from "@components/floating-pill";
import { IconBox } from "@components/icon-box";
import { useLocale } from "@components/layout";
import {
  MetricItem,
  MetricLabel,
  MetricList,
  MetricValue,
} from "@components/metric";
import {
  ProfileShowcase,
  ProfileShowcaseCaption,
  ProfileShowcaseFrame,
  ProfileShowcaseScrim,
} from "@components/profile-showcase";
import { Section } from "@components/section";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderEyebrow,
  SectionHeaderGroup,
  SectionHeaderTitle,
} from "@components/section-header";
import { PulseDot, StatusBadge } from "@components/status-badge";
import {
  Timeline,
  TimelineCard,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelinePeriod,
  TimelineTitle,
} from "@components/timeline";
import type { CertificationIconKey, SpecialtyIconKey } from "@lib/content";
import { Badge } from "@ui/badge";
import { buttonVariants } from "@ui/button";
import { Card } from "@ui/card";
import { cn } from "cn";
import {
  ArrowRight,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Languages,
  Server,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { ContactSection } from "./components";

const specialtyIcons: Record<SpecialtyIconKey, React.ReactNode> = {
  frontend: <Globe />,
  backend: <Server />,
  cloud: <Cloud />,
  architecture: <Cpu />,
};

const certificationIcons: Record<CertificationIconKey, React.ReactNode> = {
  english: <Languages />,
  business: <GraduationCap />,
  kotlin: <Code2 />,
  docker: <Container />,
};

function LandingPage() {
  const { content } = useLocale();
  const { hero, specialties, about, timeline, certifications } = content;

  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 space-y-28 px-4 pt-4 pb-12 sm:px-8 md:pt-8 md:pb-20">
      {/* Hero Section */}
      <Section id="inicio" variant="hero">
        <div className="flex-1 space-y-6 text-left">
          <StatusBadge>
            <PulseDot tone="emerald" size="md" />
            {hero.status}
          </StatusBadge>

          <h1 className="font-heading text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headlinePrefix} <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {hero.headlineHighlight}
            </span>{" "}
            <br className="hidden sm:inline" />
            {hero.headlineSuffix}
          </h1>

          <p className="max-w-xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#experiencia"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "font-semibold",
              )}
            >
              {hero.primaryCta}
              <ArrowRight />
            </a>
            <a
              href="#contato"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {hero.secondaryCta}
            </a>
            <a
              href={hero.githubHref}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              {hero.githubCta}
            </a>
          </div>

          <MetricList>
            {hero.metrics.map((metric) => (
              <MetricItem key={metric.label}>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricValue>{metric.value}</MetricValue>
              </MetricItem>
            ))}
          </MetricList>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <ProfileShowcase>
            <ProfileShowcaseFrame>
              <Image
                src="/Classic Black-Tie Studio Portrait.png"
                alt={hero.portraitAlt}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top transition-transform duration-500 group-hover/profile:scale-105"
              />
              <ProfileShowcaseScrim />
              <ProfileShowcaseCaption>
                <span className="font-mono text-xs text-zinc-300">
                  {hero.handle}
                </span>
                <Badge
                  variant="ember"
                  className="h-auto rounded px-2 py-0.5 font-mono text-[11px]"
                >
                  {hero.roleBadge}
                </Badge>
              </ProfileShowcaseCaption>
            </ProfileShowcaseFrame>

            <FloatingPill position="top-right">
              <FloatingPillIcon tone="orange">
                <Terminal />
              </FloatingPillIcon>
              <FloatingPillLabel>{hero.pills.topRight}</FloatingPillLabel>
            </FloatingPill>

            <FloatingPill position="bottom-left">
              <FloatingPillIcon tone="emerald">
                <Database />
              </FloatingPillIcon>
              <FloatingPillLabel>{hero.pills.bottomLeft}</FloatingPillLabel>
            </FloatingPill>
          </ProfileShowcase>
        </div>
      </Section>

      {/* Specialties Section */}
      <Section id="especialidades">
        <SectionHeader align="split">
          <SectionHeaderGroup>
            <SectionHeaderEyebrow>{specialties.eyebrow}</SectionHeaderEyebrow>
            <SectionHeaderTitle>{specialties.title}</SectionHeaderTitle>
          </SectionHeaderGroup>
          <SectionHeaderDescription>
            {specialties.description}
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {specialties.items.map((item) => (
            <Card
              key={item.id}
              glow
              className="justify-between gap-0 p-6 transition-all duration-200"
            >
              <div>
                <IconBox tone={item.tone} className="mb-5">
                  {specialtyIcons[item.icon]}
                </IconBox>
                <h3 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-border-subtle pt-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="tech">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Me Section */}
      <Section id="sobre" variant="surface">
        <div className="max-w-3xl space-y-6">
          <SectionHeader align="left">
            <SectionHeaderEyebrow>{about.eyebrow}</SectionHeaderEyebrow>
            <SectionHeaderTitle>{about.title}</SectionHeaderTitle>
          </SectionHeader>

          <div className="space-y-4 text-sm leading-relaxed font-normal text-zinc-300 sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="experiencia" variant="spaced">
        <SectionHeader align="center">
          <SectionHeaderEyebrow>{timeline.eyebrow}</SectionHeaderEyebrow>
          <SectionHeaderTitle>{timeline.title}</SectionHeaderTitle>
          <SectionHeaderDescription>
            {timeline.description}
          </SectionHeaderDescription>
        </SectionHeader>

        <Timeline>
          {timeline.items.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <TimelineItem
                key={item.id}
                side={side}
                highlighted={item.highlighted}
              >
                <TimelineDot />
                <TimelineContent>
                  <TimelineCard>
                    <TimelinePeriod>
                      {item.highlighted ? (
                        <StatusBadge className="rounded px-2 py-0.5 font-mono text-[11px]">
                          <PulseDot tone="orange" size="sm" />
                          {item.period}
                        </StatusBadge>
                      ) : (
                        item.period
                      )}
                    </TimelinePeriod>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineDescription>
                      {item.description}
                    </TimelineDescription>
                  </TimelineCard>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Section>

      {/* Certifications Section */}
      <Section id="certificados">
        <SectionHeader align="split">
          <SectionHeaderGroup>
            <SectionHeaderEyebrow>
              {certifications.eyebrow}
            </SectionHeaderEyebrow>
            <SectionHeaderTitle>{certifications.title}</SectionHeaderTitle>
          </SectionHeaderGroup>
          <SectionHeaderDescription>
            {certifications.description}
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.items.map((cert) => (
            <Card
              key={cert.id}
              glow
              className="items-center gap-0 p-5 text-center transition-all"
            >
              <IconBox tone="muted" size="lg" className="mb-4">
                {certificationIcons[cert.icon]}
              </IconBox>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {cert.issuer}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {cert.title}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

export { LandingPage };
