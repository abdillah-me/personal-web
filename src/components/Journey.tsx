"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import { CHAPTERS, T, pick } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Journey() {
  const { lang } = useApp();
  const [chapterIdx, setChapterIdx] = useState(CHAPTERS.length - 1);
  const chapter = CHAPTERS[chapterIdx];

  return (
    <div
      id="perjalanan"
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
          {pick(T.journeyTag, lang)}
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
          {pick(T.journeyTitle, lang)}
        </h2>
      </Reveal>

      <Reveal
        style={{
          background: "var(--card)",
          borderRadius: 32,
          padding: "clamp(20px,3.5vw,40px)",
          display: "flex",
          flexDirection: "column",
          gap: 36,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(150px,100%),1fr))",
            gap: 10,
          }}
        >
          {CHAPTERS.map((c, i) => {
            const on = i === chapterIdx;
            return (
              <button
                key={c.place}
                onClick={() => setChapterIdx(i)}
                style={{
                  border: 0,
                  font: "inherit",
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: 22,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  transition: "background .25s, color .25s",
                  background: on ? "var(--dark)" : "var(--bg)",
                  color: on ? "var(--darkInk)" : "var(--ink)",
                }}
              >
                <span
                  className="mono"
                  style={{ fontSize: 12, opacity: 0.75 }}
                >
                  {pick(T.chapter, lang)} {i + 1} · {pick(c.years, lang)}
                </span>
                <span
                  style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-.01em" }}
                >
                  {c.place}
                </span>
                <span style={{ fontSize: 14, opacity: 0.8 }}>
                  {pick(c.title, lang)}
                </span>
              </button>
            );
          })}
        </div>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,40px)" }}
        >
          <div
            style={{
              flex: "1 1 280px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: "clamp(22px,2.6vw,28px)",
                fontWeight: 700,
                letterSpacing: "-.02em",
                lineHeight: 1.2,
              }}
            >
              {pick(chapter.title, lang)}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--sub)",
                textWrap: "pretty",
              }}
            >
              {pick(chapter.note, lang)}
            </p>
          </div>

          <div
            style={{
              flex: "2 1 420px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {chapter.roles.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "20px minmax(0,1fr)",
                  gap: 14,
                  paddingBottom: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      border: "3px solid var(--accent)",
                      background: "var(--card)",
                      marginTop: 5,
                    }}
                  />
                  <span
                    style={{
                      flex: 1,
                      width: 2,
                      background: "var(--line)",
                      marginTop: 4,
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "4px 12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: 17, fontWeight: 600 }}>
                      {pick(r.role, lang)}
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: 12,
                        color: "var(--faint)",
                        paddingTop: 3,
                      }}
                    >
                      {pick(r.period, lang)}
                    </span>
                  </div>
                  <span
                    style={{ fontSize: 15, fontWeight: 500, color: "var(--accent)" }}
                  >
                    {r.company}
                  </span>
                  <span
                    style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}
                  >
                    {pick(r.desc, lang)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
