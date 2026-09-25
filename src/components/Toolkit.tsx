"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import {
  CERTS,
  CERT_LABELS,
  EDUCATION,
  STACK,
  T,
  certCount,
  pick,
  type CertCategory,
} from "@/lib/content";
import { Reveal } from "./Reveal";

type CertFilter = CertCategory | "all";
const CERT_FILTERS: CertFilter[] = ["all", "bootcamp", "tech", "other"];

export function Toolkit() {
  const { lang } = useApp();
  const [certFilter, setCertFilter] = useState<CertFilter>("all");

  const shownCerts = CERTS.filter(
    (c) => certFilter === "all" || c.cat === certFilter
  );

  return (
    <div
      id="bekal"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        marginTop: "clamp(40px,6vw,72px)",
      }}
    >
      <Reveal
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "0 8px",
        }}
      >
        <div className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
          {pick(T.kitTag, lang)}
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(30px,4.4vw,44px)",
            fontWeight: 700,
            letterSpacing: "-.03em",
            lineHeight: 1.08,
            textWrap: "balance",
          }}
        >
          {pick(T.kitTitle, lang)}
        </h2>
      </Reveal>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {/* Tech stack */}
        <Reveal
          style={{
            flex: "2 1 520px",
            background: "var(--dark)",
            color: "var(--darkInk)",
            borderRadius: 32,
            padding: "clamp(24px,3.5vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {STACK.map((g) => (
            <div
              key={g.label.en}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 16px",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  flex: "0 0 120px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--darkSub)",
                  paddingTop: 8,
                }}
              >
                {pick(g.label, lang)}
              </span>
              <div
                style={{
                  flex: "1 1 260px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="hv-dark"
                    style={{
                      border: "1px solid var(--darkLine)",
                      padding: "8px 14px",
                      borderRadius: 999,
                      fontSize: 15,
                      transition: "background .2s",
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Education */}
        <Reveal
          delay=".1s"
          style={{
            flex: "1 1 280px",
            background: "var(--mint)",
            borderRadius: 32,
            padding: "clamp(24px,3.5vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--mintInk)" }}>
            {pick(T.edu, lang)}
          </div>
          {EDUCATION.map((ed) => (
            <div
              key={ed.school}
              style={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>{ed.school}</span>
              <span style={{ fontSize: 14, color: "var(--mintInk)" }}>
                {pick(ed.field, lang)}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Languages */}
        <Reveal
          delay=".2s"
          style={{
            flex: "1 1 280px",
            background: "var(--sand)",
            borderRadius: 32,
            padding: "clamp(24px,3.5vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--sandInk)" }}>
            {pick(T.langLabel, lang)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{pick(T.langId, lang)}</span>
            <span style={{ fontSize: 14, color: "var(--sandInk2)" }}>
              {pick(T.langIdLvl, lang)}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{pick(T.langEn, lang)}</span>
            <span style={{ fontSize: 14, color: "var(--sandInk2)" }}>
              {pick(T.langEnLvl, lang)}
            </span>
          </div>
        </Reveal>
      </div>

      {/* Certifications */}
      <Reveal
        style={{
          background: "var(--card)",
          borderRadius: 32,
          padding: "clamp(22px,3.5vw,40px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-.02em" }}>
              {pick(T.certTitle, lang)}
            </div>
            <div style={{ fontSize: 15, color: "var(--muted)" }}>
              {pick(certCount(CERTS.length), lang)}
            </div>
          </div>
          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: 4,
              background: "var(--bg)",
              padding: 5,
              borderRadius: 999,
              overflowX: "auto",
              maxWidth: "100%",
            }}
          >
            {CERT_FILTERS.map((f) => {
              const on = f === certFilter;
              return (
                <button
                  key={f}
                  onClick={() => setCertFilter(f)}
                  style={{
                    border: 0,
                    cursor: "pointer",
                    font: "inherit",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 16px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                    background: on ? "var(--ink)" : "transparent",
                    color: on ? "var(--bg)" : "var(--ink)",
                  }}
                >
                  {pick(CERT_LABELS[f], lang)}
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(min(280px,100%),1fr))",
            gap: 12,
          }}
        >
          {shownCerts.map((ct) => (
            <div
              key={ct.name}
              className="hv-mint"
              style={{
                background: "var(--bg)",
                borderRadius: 20,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                transition: "background .2s",
              }}
            >
              <div
                className="mono"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                  fontSize: 12,
                  color: "var(--faint)",
                }}
              >
                <span>{pick(CERT_LABELS[ct.cat], lang)}</span>
                <span>{pick(ct.date, lang)}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.35 }}>
                {ct.name}
              </div>
              <div
                style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500 }}
              >
                {ct.issuer}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
