import * as React from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = React.ComponentProps<"main"> & {
  skipTargetId?: string;
};

function PageContainer({
  className,
  skipTargetId = "main-content",
  id = "main-content",
  children,
  ...props
}: PageContainerProps) {
  return (
    <main
      id={id}
      data-slot="page-container"
      tabIndex={-1}
      aria-label={props["aria-label"]}
      className={cn("flex min-h-screen flex-col bg-background text-foreground outline-none", className)}
      {...props}
    >
      <span id={skipTargetId} className="sr-only" />
      {children}
    </main>
  );
}

export { PageContainer, type PageContainerProps };
