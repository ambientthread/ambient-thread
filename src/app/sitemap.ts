import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { GUIDES } from "@/lib/resources";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-09-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified: new Date("2026-09-21"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2026-10-22"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date("2026-10-22"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/resources`, lastModified: new Date("2026-11-03"), changeFrequency: "monthly", priority: 0.6 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/resources/${g.slug}`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
