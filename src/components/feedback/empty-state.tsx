import * as React from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = React.ComponentProps<"div"> & {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      role="status"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-card)] border border-dashed border-border bg-background-alt px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      {icon ? (
        <div data-slot="empty-state-icon" className="text-muted-foreground" aria-hidden>
          {icon}
        </div>
      ) : null}
      {title ? (
        <div
          data-slot="empty-state-title"
          className="font-montserrat text-xl font-black tracking-tight text-text"
        >
          {title}
        </div>
      ) : null}
      {description ? (
        <div
          data-slot="empty-state-description"
          className="max-w-md text-sm leading-relaxed text-muted-foreground"
        >
          {description}
        </div>
      ) : null}
      {children}
      {action ? <div data-slot="empty-state-action">{action}</div> : null}
    </div>
  );
}

export { EmptyState, type EmptyStateProps };
