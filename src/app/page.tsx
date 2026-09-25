import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/content";

// The root path redirects to the default locale so every visitor lands on a
// language-specific, indexable URL.
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
