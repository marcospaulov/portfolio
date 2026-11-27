import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type * as React from "react";

const iconBoxVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border [&_svg]:shrink-0",
  {
    variants: {
      tone: {
        orange: "border-orange-500/20 bg-orange-500/10 text-orange-400",
        amber: "border-amber-500/20 bg-amber-500/10 text-amber-400",
        blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
        emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        muted: "border-border bg-muted text-orange-400",
      },
      size: {
        sm: "size-8 [&_svg]:size-4",
        md: "size-10 [&_svg]:size-5",
        lg: "size-12 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      tone: "orange",
      size: "md",
    },
  },
);

type IconBoxProps = React.ComponentProps<"div"> &
  VariantProps<typeof iconBoxVariants>;

function IconBox({
  className,
  tone = "orange",
  size = "md",
  ...props
}: IconBoxProps) {
  return (
    <div
      data-slot="icon-box"
      data-tone={tone}
      data-size={size}
      className={cn(iconBoxVariants({ tone, size }), className)}
      {...props}
    />
  );
}

export { IconBox, iconBoxVariants };
export type { IconBoxProps };
