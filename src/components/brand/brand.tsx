import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const brandVariants = cva(
  "group/brand inline-flex items-center transition-opacity hover:opacity-90",
  {
    variants: {
      size: {
        default: "gap-3",
        sm: "gap-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type BrandProps = useRender.ComponentProps<"a"> &
  VariantProps<typeof brandVariants>;

function Brand({ className, size = "default", render, ...props }: BrandProps) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(brandVariants({ size }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "brand",
      size,
    },
  });
}

function BrandMark({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="brand-mark"
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden border border-border bg-muted shadow-sm",
        "size-9 rounded-md p-1 group-data-[size=sm]/brand:size-6 group-data-[size=sm]/brand:rounded group-data-[size=sm]/brand:p-0.5",
        "[&_img]:size-full [&_img]:object-contain group-data-[size=default]/brand:[&_img]:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]",
        className,
      )}
      {...props}
    />
  );
}

function BrandText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="brand-text"
      className={cn(
        "flex flex-col group-data-[size=sm]/brand:flex-row group-data-[size=sm]/brand:items-center group-data-[size=sm]/brand:gap-2",
        className,
      )}
      {...props}
    />
  );
}

function BrandName({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="brand-name"
      className={cn(
        "text-sm leading-none font-semibold tracking-tight text-foreground group-data-[size=sm]/brand:text-xs group-data-[size=sm]/brand:text-zinc-200",
        className,
      )}
      {...props}
    />
  );
}

function BrandTagline({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="brand-tagline"
      className={cn(
        "mt-1 font-mono text-[11px] text-muted-foreground group-data-[size=sm]/brand:mt-0 group-data-[size=sm]/brand:font-sans group-data-[size=sm]/brand:text-xs",
        className,
      )}
      {...props}
    />
  );
}

export { Brand, BrandMark, BrandName, BrandTagline, BrandText, brandVariants };
export type { BrandProps };
