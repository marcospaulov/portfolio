import { Label } from "@ui/label";
import { cn } from "cn";
import type * as React from "react";

type FormFieldProps = React.ComponentProps<"div"> & {
  invalid?: boolean;
};

function FormField({ className, invalid = false, ...props }: FormFieldProps) {
  return (
    <div
      data-slot="form-field"
      data-invalid={invalid || undefined}
      className={cn("group/form-field space-y-1.5", className)}
      {...props}
    />
  );
}

type FormFieldLabelProps = React.ComponentProps<typeof Label>;

function FormFieldLabel({ className, ...props }: FormFieldLabelProps) {
  return (
    <Label
      data-slot="form-field-label"
      className={cn(
        "font-mono text-xs font-medium text-zinc-300 group-data-[invalid=true]/form-field:text-destructive-foreground",
        className,
      )}
      {...props}
    />
  );
}

function FormFieldError({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      role="alert"
      data-slot="form-field-error"
      className={cn("font-mono text-xs text-red-400", className)}
      {...props}
    />
  );
}

export { FormField, FormFieldError, FormFieldLabel };
export type { FormFieldLabelProps, FormFieldProps };
