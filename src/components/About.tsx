"use client";

import { useApp } from "@/lib/app-context";
import { PRINCIPLES, T, pick } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  const { lang } = useApp();

  return (
    <>
      <div
        id="tentang"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: "clamp(40px,6vw,72px)",
        }}
      >
        <Reveal
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 8,
          }}
        >
          <div className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
            {pick(T.aboutTag, lang)}
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
            {pick(T.aboutTitle, lang)}
          </h2>
        </Reveal>

        <Reveal
          style={{
            flex: "2 1 560px",
            background: "var(--card)",
            borderRadius: 32,
            padding: "clamp(26px,4vw,48px)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px,1.5vw,18px)",
              lineHeight: 1.75,
              color: "var(--body)",
              textWrap: "pretty",
            }}
          >
            {pick(T.storyA, lang)}
          </p>
          <blockquote
            style={{
              margin: "8px 0",
              background: "var(--sand)",
              borderRadius: 24,
              padding: "clamp(24px,3vw,32px) clamp(22px,3vw,36px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 56,
                lineHeight: 0.6,
                fontWeight: 700,
                color: "var(--quoteMark)",
                height: 28,
              }}
            >
              &ldquo;
            </span>
            <span
              style={{
                fontSize: "clamp(19px,2.2vw,24px)",
                lineHeight: 1.45,
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--quote)",
                letterSpacing: "-.01em",
                textWrap: "pretty",
              }}
            >
              {pick(T.quote, lang)}
            </span>
          </blockquote>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px,1.5vw,18px)",
              lineHeight: 1.75,
              color: "var(--body)",
              textWrap: "pretty",
            }}
          >
            {pick(T.storyB, lang)}
          </p>
        </Reveal>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
          gap: 16,
        }}
      >
        {PRINCIPLES.map((pr, i) => (
          <Reveal key={pr.n} delay={`${i * 0.1}s`}>
            <div
              className="hv-mint"
              style={{
                height: "100%",
                background: "var(--card)",
                borderRadius: 28,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                transition: "background .25s",
              }}
            >
              <div
                className="mono"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: "var(--dark)",
                  color: "var(--darkInk)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                }}
              >
                {pr.n}
              </div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-.01em" }}>
                {pick(pr.title, lang)}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)" }}>
                {pick(pr.desc, lang)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
