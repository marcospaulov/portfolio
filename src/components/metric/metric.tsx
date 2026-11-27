import { cn } from "cn";
import type * as React from "react";

function MetricList({ className, ...props }: React.ComponentProps<"dl">) {
  return (
    <dl
      data-slot="metric-list"
      className={cn(
        "grid grid-cols-3 gap-4 border-t border-border pt-6",
        className,
      )}
      {...props}
    />
  );
}

function MetricItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric-item"
      className={cn(
        "flex flex-col-reverse gap-0.5 not-first:border-l not-first:border-border not-first:pl-4",
        className,
      )}
      {...props}
    />
  );
}

function MetricValue({ className, ...props }: React.ComponentProps<"dd">) {
  return (
    <dd
      data-slot="metric-value"
      className={cn(
        "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

function MetricLabel({ className, ...props }: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="metric-label"
      className={cn("font-mono text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export { MetricItem, MetricLabel, MetricList, MetricValue };
