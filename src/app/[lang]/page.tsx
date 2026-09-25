import { Providers } from "../providers";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { Toolkit } from "@/components/Toolkit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { toLocale } from "@/lib/content";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = toLocale((await params).lang);

  return (
    <Providers initialLang={lang}>
      <PersonJsonLd lang={lang} />
      <main
        className="page-shell"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "12px clamp(12px,3vw,24px) 32px",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px,2vw,24px)",
        }}
      >
        <Nav />
        <Hero />
        <About />
        <Work />
        <Journey />
        <Toolkit />
        <Contact />
        <Footer />
      </main>
      <BottomNav />
    </Providers>
  );
}
