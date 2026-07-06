import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const statisticCardVariants = cva("", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

type StatisticCardProps = React.ComponentProps<"div"> &
  VariantProps<typeof statisticCardVariants> & {
    value: React.ReactNode;
    label: React.ReactNode;
    icon?: React.ReactNode;
    trend?: React.ReactNode;
  };

function StatisticCard({
  className,
  align,
  value,
  label,
  icon,
  trend,
  ...props
}: StatisticCardProps) {
  return (
    <Card
      data-slot="statistic-card"
      variant="flat"
      className={cn("bg-background-alt", className)}
      {...props}
    >
      <CardContent className={cn("flex flex-col gap-4", statisticCardVariants({ align }))}>
        {icon ? <div data-slot="statistic-icon">{icon}</div> : null}
        <div
          data-slot="statistic-value"
          className="font-montserrat text-4xl font-black tracking-tight text-primary md:text-5xl"
        >
          {value}
        </div>
        <Text variant="label" align={align ?? "left"} className="text-muted-foreground">
          {label}
        </Text>
        {trend ? (
          <div data-slot="statistic-trend" className="text-sm text-muted-foreground">
            {trend}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export { StatisticCard, statisticCardVariants, type StatisticCardProps };
