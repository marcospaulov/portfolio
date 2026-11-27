import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";
import type * as React from "react";

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}

function NavbarContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-container"
      className={cn(
        "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8",
        className,
      )}
      {...props}
    />
  );
}

function NavbarNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navbar-nav"
      className={cn(
        "hidden items-center gap-6 text-sm font-medium md:flex",
        className,
      )}
      {...props}
    />
  );
}

type NavbarLinkProps = useRender.ComponentProps<"a"> & {
  active?: boolean;
};

function NavbarLink({
  className,
  active = false,
  render,
  ...props
}: NavbarLinkProps) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-active:text-foreground",
          className,
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "navbar-link",
      active,
    },
  });
}

function NavbarActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

export { Navbar, NavbarActions, NavbarContainer, NavbarLink, NavbarNav };
export type { NavbarLinkProps };
