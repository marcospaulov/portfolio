import { cn } from "cn";
import type * as React from "react";

function ProfileShowcase({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="profile-showcase"
      className={cn(
        "relative size-64 rounded-2xl bg-linear-to-b from-orange-500/40 via-border to-transparent p-1 sm:size-80",
        className,
      )}
      {...props}
    />
  );
}

function ProfileShowcaseFrame({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="profile-showcase-frame"
      className={cn(
        "group/profile relative size-full overflow-hidden rounded-[14px] border border-border bg-card",
        className,
      )}
      {...props}
    />
  );
}

function ProfileShowcaseScrim({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="profile-showcase-scrim"
      className={cn(
        "pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60",
        className,
      )}
      {...props}
    />
  );
}

function ProfileShowcaseCaption({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="profile-showcase-caption"
      className={cn(
        "absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-lg border border-border bg-background/80 p-2.5 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}

export {
  ProfileShowcase,
  ProfileShowcaseCaption,
  ProfileShowcaseFrame,
  ProfileShowcaseScrim,
};
