"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "hu" | "en";

const copy = {
  hu: {
    navLabel: "Fő navigáció",
    nav: {
      services: "Szolgáltatások",
      process: "Folyamat",
      contact: "Kapcsolat",
    },
    switchLabel: "Nyelvváltás",
    eyebrow: "PC és laptop diagnosztika, javítás, gépépítés",
    title: "A géped kapjon rendes diagnózist, ne találgatást.",
    intro:
      "PCMagus segít hibakeresésben, karbantartásban, bővítésben és egyedi PC építésben. Érthető magyarázat, tiszta munka, felesleges körök nélkül.",
    primaryCta: "Ajánlatot kérek",
    secondaryCta: "Szolgáltatások",
    highlights: [
      "Átlátható diagnózis",
      "Nincs felesleges alkatrészcsere",
      "Gaming és workstation szemlélet",
      "Windows és Linux tapasztalat",
    ],
    servicesEyebrow: "Szolgáltatások",
    servicesTitle: "Javítás, bővítés és építés egy helyen.",
    services: [
      {
        title: "Diagnosztika",
        description:
          "Hibaokok feltárása, teljesítményproblémák, instabilitás, túlmelegedés és furcsa Windows-jelenségek. A gép nem varázslatból lassú. Általában.",
      },
      {
        title: "PC és laptop javítás",
        description:
          "Alkatrészcsere, tisztítás, pasztázás, SSD/RAM bővítés, rendszerhelyreállítás és megbízható állapotfelmérés.",
      },
      {
        title: "Egyedi gépépítés",
        description:
          "Gaming, tanulás, munka vagy kreatív feladatok: alkatrészválasztás, kompatibilitás-ellenőrzés, összeszerelés és tesztelés.",
      },
    ],
    processEyebrow: "Folyamat",
    processTitle: "Egyszerű, követhető, nem misztikus.",
    processIntro:
      "A cél, hogy pontosan tudd, mi történik a gépeddel, mennyibe kerül, és miért az a javasolt megoldás.",
    processSteps: [
      "Megkeresel a hibával vagy az elképzeléssel.",
      "Átnézem a gépet vagy az igényeidet.",
      "Kapsz egy érthető javaslatot és árajánlatot.",
      "Javítás, bővítés vagy építés után tesztelve adom vissza.",
    ],
    contactEyebrow: "Kapcsolat",
    contactTitle: "Írd le, mi a gond, vagy milyen gépet szeretnél.",
    contactIntro:
      "A részletes űrlap és árkalkulátor később jön. Első körben elég egy rövid üzenet: milyen eszközről van szó, mi a tünet, és mennyire sürgős.",
    contactCardTitle: "Induló kapcsolat",
    contactCard:
      "Ide kerül majd az email, telefonszám vagy időpontfoglalás. Addig is ez a blokk jelzi, hogy a konverziós pont helye megvan.",
    imageAlt: "Saját építésű PC konfiguráció blurple világítással",
  },
  en: {
    navLabel: "Main navigation",
    nav: {
      services: "Services",
      process: "Process",
      contact: "Contact",
    },
    switchLabel: "Language switcher",
    eyebrow: "PC and laptop diagnostics, repairs, custom builds",
    title: "Your machine deserves diagnosis, not guesswork.",
    intro:
      "PCMagus helps with troubleshooting, maintenance, upgrades, and custom PC builds. Clear explanations, clean work, and no unnecessary loops.",
    primaryCta: "Request a quote",
    secondaryCta: "Services",
    highlights: [
      "Clear diagnostics",
      "No pointless part swaps",
      "Gaming and workstation mindset",
      "Windows and Linux experience",
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Repair, upgrade, and build support in one place.",
    services: [
      {
        title: "Diagnostics",
        description:
          "Root-cause checks for performance issues, instability, overheating, and strange Windows behavior. Computers are rarely slow because of magic. Usually.",
      },
      {
        title: "PC and laptop repair",
        description:
          "Part replacement, cleaning, thermal paste, SSD/RAM upgrades, system recovery, and reliable condition checks.",
      },
      {
        title: "Custom PC builds",
        description:
          "Gaming, study, work, or creative workloads: component selection, compatibility checks, assembly, and testing.",
      },
    ],
    processEyebrow: "Process",
    processTitle: "Simple, traceable, not mystical.",
    processIntro:
      "The goal is that you know exactly what is happening with your machine, what it costs, and why that solution makes sense.",
    processSteps: [
      "You describe the issue or the build idea.",
      "I inspect the machine or your requirements.",
      "You get a clear recommendation and quote.",
      "After repair, upgrade, or build work, the machine is tested before handoff.",
    ],
    contactEyebrow: "Contact",
    contactTitle: "Tell me what is wrong, or what kind of PC you want.",
    contactIntro:
      "A detailed form and price calculator will come later. For now, a short message is enough: device type, symptoms, and urgency.",
    contactCardTitle: "Initial contact",
    contactCard:
      "Email, phone, or booking details will live here. For now, this block marks the conversion point cleanly.",
    imageAlt: "Custom-built PC setup with blurple lighting",
  },
} satisfies Record<Language, Record<string, unknown>>;

export default function Home() {
  const [language, setLanguage] = useState<Language>("hu");
  const content = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="min-h-screen bg-[#05040a] text-zinc-100">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/pcmagus-real-build.jpg"
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[90%_center] opacity-[0.62] sm:object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,10,0.98)_0%,rgba(5,4,10,0.86)_42%,rgba(5,4,10,0.46)_72%,rgba(52,30,110,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(124,58,237,0.34),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05040a] to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <a href="#" className="text-lg font-semibold tracking-wide">
                PCMagus
              </a>
              <div
                aria-label={content.switchLabel}
                className="grid h-9 grid-cols-2 border border-violet-200/20 bg-black/35 p-1 text-xs font-semibold text-zinc-300 shadow-[0_0_24px_rgba(124,58,237,0.18)] backdrop-blur"
                role="group"
              >
                {(["hu", "en"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={language === option}
                    onClick={() => setLanguage(option)}
                    className={`min-w-10 px-3 transition ${
                      language === option
                        ? "bg-violet-400 text-white"
                        : "hover:bg-violet-300/10 hover:text-white"
                    }`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <nav
              aria-label={content.navLabel}
              className="hidden items-center gap-7 text-sm text-zinc-300 md:flex"
            >
              <a href="#services" className="transition hover:text-white">
                {content.nav.services}
              </a>
              <a href="#process" className="transition hover:text-white">
                {content.nav.process}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {content.nav.contact}
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex border border-violet-300/25 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-100">
                {content.eyebrow}
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {content.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center bg-violet-400 px-6 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.35)] transition hover:bg-violet-300"
                >
                  {content.primaryCta}
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center border border-violet-200/[0.22] px-6 text-sm font-semibold text-white transition hover:border-violet-200/[0.45] hover:bg-violet-300/[0.10]"
                >
                  {content.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.highlights.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            {content.servicesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {content.servicesTitle}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="border-y border-violet-300/10 bg-violet-400/[0.04] px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
              {content.processEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {content.processTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              {content.processIntro}
            </p>
          </div>

          <ol className="grid gap-4">
            {content.processSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border border-violet-300/10 bg-[#05040a] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-violet-400 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-zinc-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            {content.contactEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {content.contactTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            {content.contactIntro}
          </p>
        </div>

        <div className="border border-violet-300/20 bg-violet-400/10 p-6 shadow-[0_0_36px_rgba(124,58,237,0.12)]">
          <h3 className="text-xl font-semibold text-white">
            {content.contactCardTitle}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {content.contactCard}
          </p>
          <a
            href="mailto:info@pcmagus.hu"
            className="mt-6 inline-flex h-12 items-center justify-center bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            hello@pcmagus.hu
          </a>
        </div>
      </section>
    </main>
  );
}
