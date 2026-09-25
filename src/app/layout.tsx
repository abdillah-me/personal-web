import type { Metadata } from "next";
import { SEO, SITE_URL } from "@/lib/content";

// The <html>/<body> shell and per-locale metadata live in `[lang]/layout.tsx`,
// so the correct `lang` attribute and SEO tags are set per route (and each
// locale stays statically prerendered). This root layout is a pass-through
// required by the App Router.

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.id.title,
  description: SEO.id.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
