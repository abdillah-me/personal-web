import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LOCALES.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: lang === "id" ? 1 : 0.9,
    alternates: {
      languages: {
        id: `${SITE_URL}/id`,
        en: `${SITE_URL}/en`,
      },
    },
  }));
}
