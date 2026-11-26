import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const sectionVariants = cva("scroll-mt-24", {
  variants: {
    variant: {
      default: "space-y-8",
      spaced: "space-y-12",
      hero: "flex flex-col-reverse items-center justify-between gap-12 pt-4 md:flex-row md:pt-10",
      surface:
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-10 md:p-12",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({ className, variant = "default", ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      data-variant={variant}
      className={cn(sectionVariants({ variant }), className)}
      {...props}
    />
  );
}

const sectionGlowVariants = cva(
  "pointer-events-none absolute rounded-full blur-3xl",
  {
    variants: {
      position: {
        "bottom-right": "-right-24 -bottom-24 size-80 bg-orange-600/10",
        "top-right": "-top-24 -right-24 size-80 bg-orange-600/10",
        "bottom-left": "-bottom-24 -left-24 size-80 bg-orange-600/10",
      },
    },
    defaultVariants: {
      position: "bottom-right",
    },
  },
);

type SectionGlowProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionGlowVariants>;

function SectionGlow({
  className,
  position = "bottom-right",
  ...props
}: SectionGlowProps) {
  return (
    <div
      aria-hidden="true"
      data-slot="section-glow"
      className={cn(sectionGlowVariants({ position }), className)}
      {...props}
    />
  );
}

function AmbientBackground({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="ambient-background"
      className={cn("pointer-events-none fixed inset-0 z-0", className)}
      {...props}
    >
      <div className="ember-glow absolute inset-0" />
      <div className="absolute top-1/3 -right-60 size-96 rounded-full bg-orange-600/5 blur-[140px]" />
      <div className="absolute bottom-10 -left-60 size-96 rounded-full bg-orange-600/5 blur-[140px]" />
    </div>
  );
}

export {
  AmbientBackground,
  Section,
  SectionGlow,
  sectionGlowVariants,
  sectionVariants,
};
export type { SectionGlowProps, SectionProps };
