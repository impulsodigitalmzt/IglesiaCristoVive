import type { SocialLink } from "@/types";

export const youtubeChannel = {
  id: "UC59m1E29UNi2VfHHa1-gxrA",
  url: "https://www.youtube.com/channel/UC59m1E29UNi2VfHHa1-gxrA",
  handle: "@cristovivemzt",
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: "social-facebook",
    platform: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/cristovivemzt/",
  },
  {
    id: "social-instagram",
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/cristovivemzt/",
  },
  {
    id: "social-youtube",
    platform: "youtube",
    label: "YouTube — Iglesia Cristo Vive",
    url: youtubeChannel.url,
  },
];

export const social = {
  facebook: "https://www.facebook.com/cristovivemzt/",
  instagram: "https://www.instagram.com/cristovivemzt/",
  youtube: youtubeChannel.url,
} as const;
