import type { Language } from "../lib/i18n";

type Service = {
  title: string;
  description: string;
};

type HomeCopy = {
  metadata: {
    title: string;
    description: string;
    openGraphLocale: string;
  };
  navLabel: string;
  nav: {
    services: string;
    process: string;
    contact: string;
  };
  switchLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  buildsCta: string;
  highlights: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  services: Service[];
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  processSteps: string[];
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
  contactCardTitle: string;
  contactCard: string;
  imageAlt: string;
};

export const homeCopy = {
  hu: {
    metadata: {
      title: "PC és laptop javítás, diagnosztika, gépépítés",
      description:
        "PC és laptop diagnosztika, javítás, karbantartás, bővítés és egyedi gépépítés érthető javaslatokkal.",
      openGraphLocale: "hu_HU",
    },
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
    buildsCta: "Korábbi építések",
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
      "Küldj egy rövid leírást a hibáról, a géped állapotáról vagy az elképzelt konfigurációról. Minél több részletet írsz, annál gyorsabban lehet értelmes irányt mondani.",
    contactCardTitle: "Emailes megkeresés",
    contactCard:
      "Írd meg, milyen eszközről van szó, mit tapasztalsz, és ha tudod, milyen alkatrészek vannak benne. Fotót is küldhetsz, ha a hiba vagy a gép állapota látható.",
    imageAlt: "Saját építésű PC konfiguráció blurple világítással",
  },
  en: {
    metadata: {
      title: "PC and laptop repair, diagnostics, custom builds",
      description:
        "PC and laptop diagnostics, repairs, maintenance, upgrades, and custom PC builds with clear recommendations.",
      openGraphLocale: "en_US",
    },
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
    buildsCta: "Previous builds",
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
      "Send a short description of the issue, the machine's condition, or the configuration you have in mind. The more context you include, the faster I can point you in the right direction.",
    contactCardTitle: "Email contact",
    contactCard:
      "Mention the device type, symptoms, and any known components. Photos are welcome if the issue or the machine's condition is visible.",
    imageAlt: "Custom-built PC setup with blurple lighting",
  },
} satisfies Record<Language, HomeCopy>;
