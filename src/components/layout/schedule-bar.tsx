import { CalendarIcon, ClockIcon } from "lucide-react";

import { church } from "@/data/church";
import { cn } from "@/lib/utils";

type ScheduleBarProps = {
  className?: string;
};

function ScheduleBar({ className }: ScheduleBarProps) {
  return (
    <section
      data-slot="schedule-bar"
      aria-label="Horarios de reunión"
      className={cn("border-y border-primary/20 bg-primary text-primary-foreground", className)}
    >
      <div className="container-content flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-7">
        <p className="font-montserrat text-sm font-black tracking-[0.18em] uppercase md:text-base">
          Horarios de reunión
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold md:text-base">
            <CalendarIcon className="size-5 shrink-0 opacity-90" aria-hidden />
            {church.schedule.sunday}
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold md:text-base">
            <ClockIcon className="size-5 shrink-0 opacity-90" aria-hidden />
            {church.schedule.wednesday}
          </span>
        </div>
      </div>
    </section>
  );
}

export { ScheduleBar, type ScheduleBarProps };
