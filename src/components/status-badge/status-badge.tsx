import { Badge } from "@ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const pulseDotVariants = cva("relative inline-flex shrink-0", {
  variants: {
    size: {
      sm: "size-1.5",
      md: "size-2",
    },
    tone: {
      emerald:
        "[&>[data-slot=pulse-ring]]:bg-emerald-400 [&>[data-slot=pulse-core]]:bg-emerald-500",
      orange:
        "[&>[data-slot=pulse-ring]]:bg-orange-400 [&>[data-slot=pulse-core]]:bg-orange-400",
      zinc: "[&>[data-slot=pulse-ring]]:bg-zinc-400 [&>[data-slot=pulse-core]]:bg-zinc-500",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "emerald",
  },
});

type PulseDotProps = React.ComponentProps<"span"> &
  VariantProps<typeof pulseDotVariants> & {
    pulse?: boolean;
  };

function PulseDot({
  className,
  size = "md",
  tone = "emerald",
  pulse = true,
  ...props
}: PulseDotProps) {
  return (
    <span
      aria-hidden="true"
      data-slot="pulse-dot"
      data-tone={tone}
      className={cn(pulseDotVariants({ size, tone }), className)}
      {...props}
    >
      {pulse && (
        <span
          data-slot="pulse-ring"
          className="absolute inline-flex size-full animate-ping rounded-full opacity-75"
        />
      )}
      <span
        data-slot="pulse-core"
        className="relative inline-flex size-full rounded-full"
      />
    </span>
  );
}

type StatusBadgeProps = React.ComponentProps<typeof Badge>;

function StatusBadge({
  className,
  variant = "ember",
  ...props
}: StatusBadgeProps) {
  return (
    <Badge
      data-slot="status-badge"
      variant={variant}
      className={cn("h-auto gap-2 px-3.5 py-1 text-xs font-medium", className)}
      {...props}
    />
  );
}

export { PulseDot, pulseDotVariants, StatusBadge };
export type { PulseDotProps, StatusBadgeProps };
