import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import {
  DEFAULT_LOCALE,
  LOCALES,
  PROFILE,
  SEO,
  SITE_URL,
  toLocale,
} from "@/lib/content";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Prerender one static page per locale. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = toLocale((await params).lang);
  const { title, description } = SEO[lang];
  const path = `/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: PROFILE.name }],
    alternates: {
      // Canonical points at this locale; hreflang maps each locale + default.
      canonical: path,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}${path}`,
      locale: lang === "id" ? "id_ID" : "en_US",
      siteName: PROFILE.name,
      images: [{ url: PROFILE.photo, width: 1200, height: 1200, alt: PROFILE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [PROFILE.photo],
    },
  };
}

const themeScript = `(function(){try{var t=localStorage.getItem('abdillah-theme');if(!t){t=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = toLocale((await params).lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${jakarta.variable} ${jetbrains.variable}`}>
        {/* Apply theme before paint to avoid a flash of the wrong theme.
            `beforeInteractive` runs before hydration and is injected by Next,
            so it executes correctly inside this nested layout. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
