"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll. Returns a ref to attach to an element; the element gets
 * the `in` class once it scrolls into view. Respects reduced-motion and
 * degrades gracefully when IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }

    // Already in view on mount (e.g. hero) — reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/**
 * Live clock formatted for Asia/Jakarta (WIB), HH:MM. Updates every 15s.
 * Returns an empty string until mounted to keep SSR output stable.
 */
export function useClock(): string {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return clock;
}

/**
 * Rotating index 0..count-1, advancing every `intervalMs`. Used by the hero
 * "Lately I've been…" carousel. `set` lets dots jump directly.
 */
export function useRotatingIndex(count: number, intervalMs = 3800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % count),
      intervalMs
    );
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return [index, setIndex] as const;
}

/**
 * Tracks which section id is currently "active" based on scroll position.
 * Uses IntersectionObserver when available, with a scroll fallback. The active
 * section is the one whose top is nearest the upper third of the viewport.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);
    if (!els.length) return;

    const pickActive = () => {
      // Choose the last section whose top has passed a line ~1/3 down the viewport.
      const line = window.innerHeight * 0.35;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      // Near the very bottom, force the last section (short final sections
      // may never reach the line).
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = els[els.length - 1].id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [ids]);

  return active;
}
