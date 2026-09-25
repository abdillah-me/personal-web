"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, type Lang, type Theme } from "./content";

interface AppState {
  lang: Lang;
  theme: Theme;
  /** Navigate to the given locale's URL (also updates <html lang>). */
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  /** True once the client has mounted and read persisted theme. */
  ready: boolean;
}

const AppContext = createContext<AppState | null>(null);

const THEME_KEY = "abdillah-theme";

export function AppProvider({
  children,
  initialLang = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  /** Locale from the current route — the source of truth for language. */
  initialLang?: Lang;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Language is driven by the URL; theme is a client preference.
  const [theme, setThemeState] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  // Read persisted theme after mount (pre-paint script already applied it).
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      const prefersDark =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(
        storedTheme === "dark" || storedTheme === "light"
          ? storedTheme
          : prefersDark
            ? "dark"
            : "light"
      );
    } catch {
      // localStorage unavailable — keep default.
    }
    setReady(true);
  }, []);

  // Reflect theme onto <html> for CSS variables.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Switching language means navigating to the other locale's URL, preserving
  // the current hash (scroll section) so the user stays in place.
  const setLang = useCallback(
    (l: Lang) => {
      if (l === initialLang) return;
      const rest = pathname.replace(/^\/(id|en)(?=\/|$)/, "");
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.push(`/${l}${rest}${hash}`);
    },
    [initialLang, pathname, router]
  );

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ lang: initialLang, theme, setLang, setTheme, toggleTheme, ready }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <AppProvider>");
  return ctx;
}
