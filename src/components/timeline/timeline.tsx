import { Card } from "@ui/card";
import { cn } from "cn";
import type * as React from "react";

function Timeline({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="timeline"
      className={cn(
        "relative mx-auto max-w-3xl space-y-8 md:space-y-12",
        "before:pointer-events-none before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:-translate-x-1/2 before:bg-border md:before:left-1/2",
        className,
      )}
      {...props}
    />
  );
}

type TimelineItemProps = React.ComponentProps<"li"> & {
  side?: "left" | "right";
  highlighted?: boolean;
};

function TimelineItem({
  className,
  side = "left",
  highlighted = false,
  ...props
}: TimelineItemProps) {
  return (
    <li
      data-slot="timeline-item"
      data-side={side}
      data-highlighted={highlighted || undefined}
      className={cn(
        "group/timeline-item relative flex flex-col items-start md:flex-row md:items-center",
        "data-[side=right]:md:flex-row-reverse",
        className,
      )}
      {...props}
    />
  );
}

function TimelineDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="timeline-dot"
      className={cn(
        "absolute top-5 left-4 z-10 size-3.5 -translate-x-1/2 rounded-full border-4 border-background bg-zinc-700 md:top-1/2 md:left-1/2 md:-translate-y-1/2",
        "group-data-[highlighted=true]/timeline-item:size-4 group-data-[highlighted=true]/timeline-item:bg-primary group-data-[highlighted=true]/timeline-item:shadow-[0_0_10px_#f97316]",
        className,
      )}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn(
        "w-full pl-10 text-left md:w-1/2",
        "group-data-[side=left]/timeline-item:md:pr-8 group-data-[side=left]/timeline-item:md:pl-0 group-data-[side=left]/timeline-item:md:text-right",
        "group-data-[side=right]/timeline-item:md:pl-8 group-data-[side=right]/timeline-item:md:text-left",
        className,
      )}
      {...props}
    />
  );
}

type TimelineCardProps = React.ComponentProps<typeof Card>;

function TimelineCard({ className, ...props }: TimelineCardProps) {
  return (
    <Card
      data-slot="timeline-card"
      className={cn(
        "gap-2 rounded-xl border-border bg-card p-5 transition-colors hover:border-zinc-700",
        "group-data-[highlighted=true]/timeline-item:border-primary/40 group-data-[highlighted=true]/timeline-item:bg-surface-highlight group-data-[highlighted=true]/timeline-item:shadow-[0_0_20px_rgba(249,115,22,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

function TimelinePeriod({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-period"
      className={cn(
        "flex items-center font-mono text-xs text-muted-foreground",
        "group-data-[side=left]/timeline-item:md:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function TimelineTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="timeline-title"
      className={cn(
        "font-heading text-base font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TimelineDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-description"
      className={cn("text-xs leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineCard,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelinePeriod,
  TimelineTitle,
};
export type { TimelineCardProps, TimelineItemProps };
