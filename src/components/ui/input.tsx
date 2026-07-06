import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldClassName } from "@/lib/component-styles";

type InputProps = React.ComponentProps<"input"> & {
  hasError?: boolean;
};

function Input({ className, type, hasError, "aria-invalid": ariaInvalid, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={hasError ?? ariaInvalid}
      className={cn(
        fieldClassName,
        "h-11 file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
