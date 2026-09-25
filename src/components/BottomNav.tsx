"use client";

import { useMemo } from "react";
import { useApp } from "@/lib/app-context";
import { NAV, pick } from "@/lib/content";
import { useActiveSection } from "@/lib/hooks";
import { NavIcon } from "./NavIcon";
import { smoothScrollTo } from "./Reveal";

/**
 * App-style bottom navigation. Hidden on tablet/desktop via the `.bottom-nav`
 * media query in globals.css; only shown on mobile (<= 760px).
 */
export function BottomNav() {
  const { lang } = useApp();
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const active = useActiveSection(ids);

  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      <div className="bottom-nav-inner">
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => smoothScrollTo(n.id)}
              aria-current={on ? "true" : undefined}
              className={`bottom-nav-item${on ? " active" : ""}`}
            >
              <NavIcon name={n.icon} size={22} />
              <span className="bottom-nav-label">{pick(n.label, lang)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
