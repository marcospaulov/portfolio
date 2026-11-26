import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

type InfoRowProps = useRender.ComponentProps<"div">;

function InfoRow({ className, render, ...props }: InfoRowProps) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "group/info-row flex items-center gap-3 rounded-lg border border-border bg-muted p-3 transition-colors [a&]:hover:border-primary/40",
          className,
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "info-row",
    },
  });
}

const infoRowIconVariants = cva(
  "inline-flex shrink-0 items-center justify-center [&_svg]:size-4.5 [&_svg]:shrink-0",
  {
    variants: {
      tone: {
        emerald: "text-emerald-400",
        orange: "text-orange-400",
        muted: "text-muted-foreground",
      },
    },
    defaultVariants: {
      tone: "orange",
    },
  },
);

type InfoRowIconProps = React.ComponentProps<"span"> &
  VariantProps<typeof infoRowIconVariants>;

function InfoRowIcon({
  className,
  tone = "orange",
  ...props
}: InfoRowIconProps) {
  return (
    <span
      data-slot="info-row-icon"
      data-tone={tone}
      className={cn(infoRowIconVariants({ tone }), className)}
      {...props}
    />
  );
}

function InfoRowBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="info-row-body"
      className={cn("flex min-w-0 flex-col", className)}
      {...props}
    />
  );
}

function InfoRowLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="info-row-label"
      className={cn("font-mono text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function InfoRowValue({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="info-row-value"
      className={cn(
        "truncate text-sm font-medium text-foreground transition-colors [a:hover>&]:text-orange-400",
        className,
      )}
      {...props}
    />
  );
}

export {
  InfoRow,
  InfoRowBody,
  InfoRowIcon,
  InfoRowLabel,
  InfoRowValue,
  infoRowIconVariants,
};
export type { InfoRowIconProps, InfoRowProps };
