"use client";

import Link from "next/link";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage, type Language } from "../lib/language";
import BuildsShowcase from "./BuildsShowcase";

const copy = {
  hu: {
    switchLabel: "Nyelvváltás",
    back: "Vissza",
    eyebrow: "Korábbi építések",
    title: "Saját munkák, nem stock fotók.",
    intro:
      "Kattints egy buildre a részletekhez. Egyelőre egy konfiguráció van fent, később jöhetnek külön alkatrészlisták, célok és tanulságok.",
  },
  en: {
    switchLabel: "Language switcher",
    back: "Back",
    eyebrow: "Previous builds",
    title: "Real work, not stock photos.",
    intro:
      "Click a build to see details. For now there is one configuration here; later this can grow into separate parts lists, goals, and lessons learned.",
  },
} satisfies Record<Language, Record<string, string>>;

export default function BuildsPageContent() {
  const { language, setLanguage } = useLanguage();
  const content = copy[language];

  return (
    <main className="min-h-screen bg-[#05040a] text-zinc-100">
      <section className="border-b border-violet-300/10 bg-[radial-gradient(circle_at_78%_0%,rgba(124,58,237,0.28),transparent_34%),linear-gradient(180deg,rgba(124,58,237,0.08),transparent_52%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-lg font-semibold tracking-wide">
                PCMagus
              </Link>
              <LanguageToggle
                language={language}
                label={content.switchLabel}
                onChange={setLanguage}
              />
            </div>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center border border-violet-200/[0.22] px-4 text-sm font-semibold text-white transition hover:border-violet-200/[0.45] hover:bg-violet-300/[0.10]"
            >
              {content.back}
            </Link>
          </header>

          <div className="max-w-3xl py-20">
            <p className="mb-5 inline-flex border border-violet-300/25 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-100">
              {content.eyebrow}
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      <BuildsShowcase language={language} />
    </main>
  );
}
