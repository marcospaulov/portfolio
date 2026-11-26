import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const sectionHeaderVariants = cva("group/section-header", {
  variants: {
    align: {
      split:
        "flex flex-col justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-end",
      center: "mx-auto max-w-xl space-y-2 text-center",
      left: "space-y-2 text-left",
    },
  },
  defaultVariants: {
    align: "split",
  },
});

type SectionHeaderProps = React.ComponentProps<"header"> &
  VariantProps<typeof sectionHeaderVariants>;

function SectionHeader({
  className,
  align = "split",
  ...props
}: SectionHeaderProps) {
  return (
    <header
      data-slot="section-header"
      data-align={align}
      className={cn(sectionHeaderVariants({ align }), className)}
      {...props}
    />
  );
}

function SectionHeaderGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header-group"
      className={cn("space-y-1", className)}
      {...props}
    />
  );
}

function SectionHeaderEyebrow({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-header-eyebrow"
      className={cn(
        "font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeaderTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="section-header-title"
      className={cn(
        "font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-header-description"
      className={cn(
        "text-sm text-muted-foreground group-data-[align=split]/section-header:max-w-md",
        className,
      )}
      {...props}
    />
  );
}

export {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderEyebrow,
  SectionHeaderGroup,
  SectionHeaderTitle,
  sectionHeaderVariants,
};
export type { SectionHeaderProps };
