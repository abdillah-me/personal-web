"use client";

import type { ReactNode } from "react";
import { AppProvider } from "@/lib/app-context";
import type { Lang } from "@/lib/content";

export function Providers({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  return <AppProvider initialLang={initialLang}>{children}</AppProvider>;
}
