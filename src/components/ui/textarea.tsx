import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldClassName } from "@/lib/component-styles";

type TextareaProps = React.ComponentProps<"textarea"> & {
  hasError?: boolean;
};

function Textarea({
  className,
  hasError,
  "aria-invalid": ariaInvalid,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      aria-invalid={hasError ?? ariaInvalid}
      className={cn(fieldClassName, "field-sizing-content min-h-28 py-3", className)}
      {...props}
    />
  );
}

export { Textarea, type TextareaProps };
