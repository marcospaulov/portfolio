import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const floatingPillVariants = cva(
  "inline-flex items-center gap-2 rounded-lg border border-border bg-card/90 px-3 py-1.5 shadow-lg backdrop-blur-md",
  {
    variants: {
      position: {
        static: "relative",
        "top-right": "absolute -top-3 -right-3 z-10",
        "top-left": "absolute -top-3 -left-3 z-10",
        "bottom-right": "absolute -right-3 -bottom-3 z-10",
        "bottom-left": "absolute -bottom-3 -left-3 z-10",
      },
    },
    defaultVariants: {
      position: "static",
    },
  },
);

type FloatingPillProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof floatingPillVariants>;

function FloatingPill({
  className,
  position = "static",
  render,
  ...props
}: FloatingPillProps) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(floatingPillVariants({ position }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "floating-pill",
      position,
    },
  });
}

const floatingPillIconVariants = cva(
  "inline-flex shrink-0 items-center justify-center [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      tone: {
        orange: "text-orange-400",
        emerald: "text-emerald-400",
        blue: "text-blue-400",
        amber: "text-amber-400",
        muted: "text-muted-foreground",
      },
    },
    defaultVariants: {
      tone: "orange",
    },
  },
);

type FloatingPillIconProps = React.ComponentProps<"span"> &
  VariantProps<typeof floatingPillIconVariants>;

function FloatingPillIcon({
  className,
  tone = "orange",
  ...props
}: FloatingPillIconProps) {
  return (
    <span
      data-slot="floating-pill-icon"
      data-tone={tone}
      className={cn(floatingPillIconVariants({ tone }), className)}
      {...props}
    />
  );
}

function FloatingPillLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="floating-pill-label"
      className={cn("font-mono text-xs font-medium text-zinc-200", className)}
      {...props}
    />
  );
}

export {
  FloatingPill,
  FloatingPillIcon,
  FloatingPillLabel,
  floatingPillIconVariants,
  floatingPillVariants,
};
export type { FloatingPillIconProps, FloatingPillProps };
