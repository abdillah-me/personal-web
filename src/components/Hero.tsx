"use client";

import Image from "next/image";
import { useApp } from "@/lib/app-context";
import { NOW_LIST, PROFILE, T, pick } from "@/lib/content";
import { useClock, useRotatingIndex } from "@/lib/hooks";
import { Reveal, smoothScrollTo } from "./Reveal";

export function Hero() {
  const { lang } = useApp();
  const clock = useClock();
  const [now, setNow] = useRotatingIndex(NOW_LIST.length);

  return (
    <div
      id="beranda"
      style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,1.5vw,16px)" }}
    >
      {/* Main hero card */}
      <Reveal
        style={{
          flex: "2 1 560px",
          background: "var(--card)",
          borderRadius: 32,
          padding: "clamp(28px,5vw,56px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 48,
          minHeight: "clamp(420px,50vw,540px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--mint)",
              color: "var(--mintInk)",
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            {pick(T.status, lang)}
          </div>
          <div
            className="mono"
            style={{ fontSize: 13, color: "var(--faint)", paddingTop: 8 }}
          >
            muhammad abdillah / software engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px,7vw,76px)",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-.035em",
              textWrap: "balance",
            }}
          >
            {pick(T.h1a, lang)}{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}
            >
              {pick(T.h1b, lang)}
            </span>
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px,1.6vw,19px)",
              lineHeight: 1.65,
              color: "var(--sub)",
              maxWidth: 600,
              textWrap: "pretty",
            }}
          >
            {pick(T.intro, lang)}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={PROFILE.cvUrl}
              download="CV-Muhammad-Abdillah.pdf"
              className="hv-accent"
              style={{
                background: "var(--ink)",
                color: "var(--bg)",
                padding: "14px 22px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>{pick(T.cv, lang)}</span>
              <span>↓</span>
            </a>
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("kontak");
              }}
              className="hv-mint"
              style={{
                border: "1px solid var(--line)",
                padding: "13px 22px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {pick(T.sayHi, lang)}
            </a>
          </div>
        </div>
      </Reveal>

      {/* Photo card */}
      <Reveal
        delay=".1s"
        style={{
          flex: "1 1 320px",
          borderRadius: 32,
          overflow: "hidden",
          background: "var(--ghost)",
          minHeight: "clamp(420px,50vw,540px)",
          position: "relative",
        }}
      >
        <Image
          src={PROFILE.photo}
          alt="Muhammad Abdillah"
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 14,
            background: "var(--glass)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: 20,
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{PROFILE.name}</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>
              {pick(T.loc, lang)}
            </span>
          </div>
          {clock && (
            <span
              className="mono"
              style={{
                fontSize: 13,
                background: "var(--dark)",
                color: "var(--darkInk)",
                padding: "6px 10px",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              {clock} WIB
            </span>
          )}
        </div>
      </Reveal>

      {/* "Now" card */}
      <Reveal
        style={{
          flex: "1.4 1 420px",
          background: "var(--dark)",
          color: "var(--darkInk)",
          borderRadius: 32,
          padding: "clamp(26px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minHeight: 200,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--darkSub)" }}>
          {pick(T.nowLabel, lang)}
        </div>
        <div
          style={{
            fontSize: "clamp(22px,2.6vw,30px)",
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-.02em",
            minHeight: 72,
          }}
        >
          {pick(NOW_LIST[now], lang)}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
          {NOW_LIST.map((_, i) => (
            <button
              key={i}
              onClick={() => setNow(i)}
              aria-label={`Show item ${i + 1}`}
              style={{
                height: 6,
                border: 0,
                padding: 0,
                borderRadius: 999,
                cursor: "pointer",
                width: i === now ? 28 : 6,
                background: i === now ? "var(--darkSub)" : "var(--darkLine)",
                transition: "all .3s",
              }}
            />
          ))}
        </div>
      </Reveal>

      {/* Career card */}
      <Reveal
        delay=".1s"
        style={{
          flex: "1 1 260px",
          background: "var(--sand)",
          borderRadius: 32,
          padding: "clamp(26px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 16,
          minHeight: 200,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--sandInk)" }}>
          {pick(T.careerLabel, lang)}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            fontWeight: 700,
            letterSpacing: "-.03em",
          }}
        >
          <span style={{ fontSize: 44 }}>{PROFILE.careerStart}</span>
          <span style={{ fontSize: 22, color: "var(--sandInk)" }}>→</span>
          <span style={{ fontSize: 44 }}>{pick(T.now, lang)}</span>
        </div>
        <div style={{ fontSize: 14, color: "var(--sandInk2)", lineHeight: 1.5 }}>
          {pick(T.careerNote, lang)}
        </div>
      </Reveal>

      {/* Daily card */}
      <Reveal
        delay=".2s"
        style={{
          flex: "1 1 260px",
          background: "var(--mint)",
          borderRadius: 32,
          padding: "clamp(26px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 16,
          minHeight: 200,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--mintInk)" }}>
          {pick(T.dailyLabel, lang)}
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: "-.01em",
          }}
        >
          {pick(T.daily, lang)}
        </div>
        <div style={{ fontSize: 14, color: "var(--mintInk)" }}>
          {pick(T.dailyNote, lang)}
        </div>
      </Reveal>
    </div>
  );
}
