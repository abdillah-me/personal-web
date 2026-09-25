"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/app-context";
import { NAV, PROFILE, T, pick, type Lang } from "@/lib/content";
import { smoothScrollTo } from "./Reveal";

const LANGS: { key: Lang; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "en", label: "EN" },
];

export function Nav() {
  const { lang, theme, toggleTheme } = useApp();

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        background: "var(--nav)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "8px 8px 8px 14px",
        borderRadius: 28,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            overflow: "hidden",
            background: "var(--ghost)",
            position: "relative",
          }}
        >
          <Image
            src={PROFILE.photo}
            alt=""
            fill
            sizes="34px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <span style={{ fontWeight: 600, fontSize: 16 }}>Abdillah</span>
      </div>

      <div
        className="nav-links no-scrollbar"
        style={{
          display: "flex",
          gap: 2,
          fontSize: 14,
          fontWeight: 500,
          background: "var(--card)",
          padding: 5,
          borderRadius: 999,
          overflowX: "auto",
        }}
      >
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            onClick={onNavClick(n.id)}
            className="hv-mint"
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              flex: "1 0 auto",
              textAlign: "center",
            }}
          >
            {pick(n.label, lang)}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {/* Language switch — real links to each locale URL (SEO-friendly),
            styled as a sliding highlight pill. */}
        <div
          className="lang-toggle"
          role="group"
          aria-label="Language"
          data-active={lang}
        >
          <span className="lang-thumb" aria-hidden="true" />
          {LANGS.map((l) => {
            const on = lang === l.key;
            return (
              <Link
                key={l.key}
                href={`/${l.key}`}
                hrefLang={l.key}
                aria-current={on ? "true" : undefined}
                className={`lang-btn${on ? " active" : ""}`}
                onClick={(e) => {
                  // Preserve the current section (hash) when switching locale.
                  const hash = window.location.hash;
                  if (hash) {
                    e.preventDefault();
                    window.location.href = `/${l.key}${hash}`;
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle with animated sun/moon crossfade + rotation. */}
        <button
          onClick={toggleTheme}
          aria-label={pick(T.themeAria, lang)}
          className="theme-toggle hv-mint"
          data-theme={theme}
        >
          <span className="theme-icon theme-icon-sun" aria-hidden="true">
            ☀
          </span>
          <span className="theme-icon theme-icon-moon" aria-hidden="true">
            ☾
          </span>
        </button>
      </div>
    </div>
  );
}
