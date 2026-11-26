"use client";

import { Tabs, TabsList, TabsTrigger } from "@ui/tabs";
import { cn } from "cn";
import type * as React from "react";

type Locale = "pt" | "en";

type LanguageToggleProps = Omit<
  React.ComponentProps<typeof Tabs>,
  "value" | "defaultValue" | "onValueChange"
> & {
  value?: Locale;
  defaultValue?: Locale;
  onValueChange?: (locale: Locale) => void;
};

function LanguageToggle({
  className,
  value,
  defaultValue = "pt",
  onValueChange,
  children,
  ...props
}: LanguageToggleProps) {
  return (
    <Tabs
      data-slot="language-toggle"
      value={value}
      defaultValue={defaultValue}
      onValueChange={(nextValue) => {
        if (nextValue === "pt" || nextValue === "en") {
          onValueChange?.(nextValue);
        }
      }}
      className={cn("inline-flex", className)}
      {...props}
    >
      <TabsList className="h-8 rounded-md p-0.5 font-mono text-xs">
        {children ?? (
          <>
            <LanguageToggleItem value="pt">PT</LanguageToggleItem>
            <LanguageToggleItem value="en">EN</LanguageToggleItem>
          </>
        )}
      </TabsList>
    </Tabs>
  );
}

type LanguageToggleItemProps = Omit<
  React.ComponentProps<typeof TabsTrigger>,
  "value"
> & {
  value: Locale;
};

function LanguageToggleItem({ className, ...props }: LanguageToggleItemProps) {
  return (
    <TabsTrigger
      data-slot="language-toggle-item"
      className={cn(
        "rounded-[4px] px-2.5 py-1 font-mono text-xs data-active:bg-secondary data-active:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { LanguageToggle, LanguageToggleItem };
export type { LanguageToggleItemProps, LanguageToggleProps, Locale };
