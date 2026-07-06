import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type QuoteCardProps = React.ComponentProps<"div"> & {
  quote: React.ReactNode;
  author?: React.ReactNode;
  role?: React.ReactNode;
  avatar?: React.ReactNode;
};

function QuoteCard({
  className,
  quote,
  author,
  role,
  avatar,
  ...props
}: QuoteCardProps) {
  return (
    <Card
      data-slot="quote-card"
      variant="flat"
      className={cn("bg-background-alt", className)}
      {...props}
    >
      <CardContent className="flex flex-col gap-6">
        <figure>
          <blockquote className="relative pl-6 font-inter text-lg leading-relaxed text-text md:text-xl">
            <span
              aria-hidden
              className="absolute top-0 left-0 font-montserrat text-4xl leading-none text-primary/30"
            >
              &ldquo;
            </span>
            {quote}
          </blockquote>
          {(author || role || avatar) && (
            <CardFooter className="mt-6 items-center gap-3 border-t border-border/60 px-0 pt-4">
              {avatar}
              <figcaption className="flex flex-col gap-1">
                {author ? (
                  <Text as="span" variant="label" weight="semibold">
                    {author}
                  </Text>
                ) : null}
                {role ? (
                  <Text as="span" variant="caption">
                    {role}
                  </Text>
                ) : null}
              </figcaption>
            </CardFooter>
          )}
        </figure>
      </CardContent>
    </Card>
  );
}

export { QuoteCard, type QuoteCardProps };
