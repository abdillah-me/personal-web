import { PROFILE, SEO, SITE_URL, type Lang } from "@/lib/content";

/**
 * Structured data (schema.org Person) so search engines understand whose
 * profile this is. Rendered server-side into the page.
 */
export function PersonJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}${PROFILE.photo}`,
    jobTitle: "Software Engineer",
    email: `mailto:${PROFILE.email}`,
    description: SEO[lang].description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: [PROFILE.linkedin, PROFILE.instagram],
    knowsLanguage: ["id", "en"],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
