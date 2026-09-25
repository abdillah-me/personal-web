"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/app-context";
import { PROFILE, T, pick } from "@/lib/content";
import { useReveal } from "@/lib/hooks";

export function Contact() {
  const { lang } = useApp();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText(PROFILE.email);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const copyLabel = copied
    ? lang === "en"
      ? "Copied ✓"
      : "Tersalin ✓"
    : lang === "en"
      ? "Copy"
      : "Salin";

  const linkStyle: React.CSSProperties = {
    border: "1px solid var(--darkLine)",
    color: "var(--darkInk)",
    borderRadius: 18,
    padding: "18px 22px",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 16,
    fontWeight: 600,
  };

  return (
    <div
      ref={ref}
      id="kontak"
      className="reveal"
      style={{
        marginTop: "clamp(40px,6vw,72px)",
        background: "var(--dark)",
        color: "var(--darkInk)",
        borderRadius: 32,
        padding: "clamp(28px,5vw,64px)",
        display: "flex",
        flexWrap: "wrap",
        gap: 40,
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          flex: "1.4 1 400px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div className="mono" style={{ fontSize: 13, color: "var(--darkSub)" }}>
          {pick(T.contactTag, lang)}
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(32px,5vw,52px)",
            fontWeight: 700,
            letterSpacing: "-.03em",
            lineHeight: 1.05,
            textWrap: "balance",
          }}
        >
          {pick(T.contactTitle, lang)}
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--darkP)",
            maxWidth: 520,
          }}
        >
          {pick(T.contactNote, lang)}
        </p>
      </div>

      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <button
          onClick={copyEmail}
          style={{
            border: 0,
            font: "inherit",
            cursor: "pointer",
            textAlign: "left",
            background: "var(--darkInk)",
            color: "#1f2a24",
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            fontWeight: 600,
            overflowWrap: "anywhere",
          }}
        >
          <span>{PROFILE.email}</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#3f7a59",
              whiteSpace: "nowrap",
            }}
          >
            {copyLabel}
          </span>
        </button>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hv-dark"
          style={linkStyle}
        >
          <span>LinkedIn</span>
          <span>↗</span>
        </a>
        <a
          href={PROFILE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hv-dark"
          style={linkStyle}
        >
          <span>Instagram</span>
          <span>↗</span>
        </a>
        <a
          href={PROFILE.cvUrl}
          download="CV-Muhammad-Abdillah.pdf"
          className="hv-dark"
          style={linkStyle}
        >
          <span>{pick(T.cvPdf, lang)}</span>
          <span>↓</span>
        </a>
      </div>
    </div>
  );
}
