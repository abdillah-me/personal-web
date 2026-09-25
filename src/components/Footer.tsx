"use client";

import { useApp } from "@/lib/app-context";
import { T, pick } from "@/lib/content";

export function Footer() {
  const { lang } = useApp();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        padding: "16px 8px",
        fontSize: 14,
        color: "var(--faint)",
      }}
    >
      <span>© 2026 Muhammad Abdillah</span>
      <span>{pick(T.footer, lang)}</span>
    </div>
  );
}
