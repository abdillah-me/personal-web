"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/lib/hooks";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Transition delay, e.g. "0.1s", for staggered reveals. */
  delay?: string;
  as?: "div" | "section";
  id?: string;
}

/** Wraps content with the reveal-on-scroll animation. */
export function Reveal({
  children,
  className = "",
  style,
  delay,
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`.trim()}
      style={{ ...style, transitionDelay: delay }}
    >
      {children}
    </Tag>
  );
}

/** Smooth-scroll to a section id with a fixed offset for the sticky nav. */
export function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: "smooth" });
}
