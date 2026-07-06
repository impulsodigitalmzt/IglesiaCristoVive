import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

type SocialLinksProps = {
  variant?: "header" | "footer";
  transparent?: boolean;
  className?: string;
};

function SocialLinks({
  variant = "header",
  transparent = false,
  className,
}: SocialLinksProps) {
  return (
    <div
      data-slot="social-links"
      className={cn("flex items-center gap-1.5", className)}
    >
      {socialLinks.map((item) => {
        const Icon = socialIcons[item.platform];

        return (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={cn(
              "inline-flex items-center justify-center rounded-full transition-colors",
              variant === "footer" &&
                "size-10 border border-white/15 text-white/80 hover:border-white/40 hover:text-white",
              variant === "header" &&
                cn(
                  "size-9",
                  transparent
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-text/70 hover:bg-background-alt hover:text-text",
                ),
            )}
          >
            <Icon className="size-4" />
          </Link>
        );
      })}
    </div>
  );
}

export { SocialLinks, type SocialLinksProps };
