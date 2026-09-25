"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import {
  CATEGORY_LABELS,
  PROJECTS,
  T,
  pick,
  type ProjectCategory,
} from "@/lib/content";
import { Reveal } from "./Reveal";

type Filter = ProjectCategory | "all";
const FILTERS: Filter[] = ["all", "ent", "web", "ai"];

export function Work() {
  const { lang } = useApp();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number>(0);

  const shown = PROJECTS.map((p, i) => ({ ...p, i })).filter(
    (p) => filter === "all" || p.cat === filter
  );

  const changeFilter = (f: Filter) => {
    setFilter(f);
    setOpen(f === "all" ? 0 : PROJECTS.findIndex((p) => p.cat === f));
  };

  return (
    <div
      id="karya"
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
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 20,
          flexWrap: "wrap",
          padding: "0 8px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
            {pick(T.workTag, lang)}
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px,4.4vw,44px)",
              fontWeight: 700,
              letterSpacing: "-.03em",
              lineHeight: 1.08,
            }}
          >
            {pick(T.workTitle, lang)}
          </h2>
        </div>
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 4,
            background: "var(--card)",
            padding: 5,
            borderRadius: 999,
            overflowX: "auto",
            maxWidth: "100%",
          }}
        >
          {FILTERS.map((f) => {
            const on = f === filter;
            return (
              <button
                key={f}
                onClick={() => changeFilter(f)}
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
                {pick(CATEGORY_LABELS[f], lang)}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(340px,100%),1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {shown.map((p, k) => {
          const isOpen = open === p.i;
          return (
            <Reveal key={p.i} delay={`${(k % 3) * 0.08}s`}>
              <div
                className="hv-card"
                onClick={() => setOpen(isOpen ? -1 : p.i)}
                style={{
                  background: "var(--card)",
                  borderRadius: 28,
                  padding: "14px 14px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  cursor: "pointer",
                  transition: "transform .2s, box-shadow .2s",
                }}
              >
                <div
                  className="mono"
                  style={{
                    aspectRatio: "16 / 10",
                    borderRadius: 18,
                    background:
                      "repeating-linear-gradient(45deg,var(--ph1) 0 10px,var(--ph2) 10px 20px)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 8,
                    padding: 12,
                    fontSize: 12,
                    color: "var(--faint)",
                  }}
                >
                  <span>{pick(T.shot, lang)}</span>
                  <span
                    style={{
                      background: "var(--card)",
                      color: "var(--ink)",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {pick(CATEGORY_LABELS[p.cat], lang)}
                  </span>
                </div>

                <div
                  style={{
                    padding: "0 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      {pick(p.client, lang)}
                    </span>
                    <span style={{ color: "var(--faint)" }}>{pick(p.year, lang)}</span>
                  </div>
                  <div
                    style={{
                      fontSize: 21,
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {pick(p.title, lang)}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
                    {pick(p.desc, lang)}
                  </div>

                  {isOpen && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        borderTop: "1px solid var(--line)",
                        paddingTop: 14,
                        marginTop: 6,
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 600 }}>
                        {pick(T.myRole, lang)}{" "}
                        <span style={{ fontWeight: 400, color: "var(--muted)" }}>
                          {pick(p.role, lang)}
                        </span>
                      </div>
                      <div
                        style={{ display: "flex", flexDirection: "column", gap: 6 }}
                      >
                        {pick(p.points, lang).map((pt, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              gap: 10,
                              fontSize: 14,
                              lineHeight: 1.55,
                              color: "var(--body)",
                            }}
                          >
                            <span style={{ color: "var(--accent)" }}>—</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {p.stack.map((st) => (
                          <span
                            key={st}
                            style={{
                              background: "var(--bg)",
                              padding: "5px 10px",
                              borderRadius: 999,
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--accent)",
                      marginTop: 4,
                    }}
                  >
                    {isOpen
                      ? lang === "en"
                        ? "Hide details ↑"
                        : "Tutup detail ↑"
                      : lang === "en"
                        ? "View details ↓"
                        : "Lihat detail ↓"}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
