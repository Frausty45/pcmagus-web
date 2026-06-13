import type { Language } from "../lib/i18n";

type BuildImage = {
  label: string;
  src: string;
  alt: string;
};

export type BuildShowcaseItem = {
  id: string;
  buildLabel: string;
  title: string;
  shortDescription: string;
  description: string;
  details: string;
  open: string;
  close: string;
  previousImage: string;
  nextImage: string;
  images: BuildImage[];
};

type BuildsPageCopy = {
  metadata: {
    title: string;
    description: string;
    openGraphLocale: string;
  };
  switchLabel: string;
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export const buildsPageCopy = {
  hu: {
    metadata: {
      title: "Korábbi építések",
      description:
        "PCMagus korábbi PC építések és konfigurációk rövid bemutatója.",
      openGraphLocale: "hu_HU",
    },
    switchLabel: "Nyelvváltás",
    back: "Vissza",
    eyebrow: "Korábbi építések",
    title: "Saját munkák, nem stock fotók.",
    intro:
      "Kattints egy buildre a részletekhez. Egyelőre egy konfiguráció van fent, később jöhetnek külön alkatrészlisták, célok és tanulságok.",
  },
  en: {
    metadata: {
      title: "Previous builds",
      description:
        "A short showcase of previous PCMagus PC builds and configurations.",
      openGraphLocale: "en_US",
    },
    switchLabel: "Language switcher",
    back: "Back",
    eyebrow: "Previous builds",
    title: "Real work, not stock photos.",
    intro:
      "Click a build to see details. For now there is one configuration here; later this can grow into separate parts lists, goals, and lessons learned.",
  },
} satisfies Record<Language, BuildsPageCopy>;

export const buildsShowcaseCopy = {
  hu: [
    {
      id: "clean-older-gaming-pc",
      buildLabel: "Build #01",
      title: "Letisztult, régebbi gaming gép",
      shortDescription: "Visszafogott, fekete setup blurple világítással.",
      description:
        "Rövid leírás helye. Ide kerülhet majd a konfiguráció célja, főbb alkatrészei, milyen igényre készült, és mitől lett jó ez a build.",
      details: "Részletek",
      open: "Megnyitás",
      close: "Bezárás",
      previousImage: "Előző kép",
      nextImage: "Következő kép",
      images: [
        {
          label: "Világítással",
          src: "/pcmagus-real-build.jpg",
          alt: "Letisztult régebbi gaming gép blurple világítással",
        },
        {
          label: "Kikapcsolva",
          src: "/pcmagus-build-desk-off.jpg",
          alt: "Letisztult régebbi gaming gép kikapcsolt állapotban",
        },
      ],
    },
  ],
  en: [
    {
      id: "clean-older-gaming-pc",
      buildLabel: "Build #01",
      title: "Clean older gaming PC",
      shortDescription: "A restrained black setup with blurple lighting.",
      description:
        "Description placeholder. Later this can cover the goal of the configuration, key components, what it was built for, and what made the build work well.",
      details: "Details",
      open: "Open",
      close: "Close",
      previousImage: "Previous image",
      nextImage: "Next image",
      images: [
        {
          label: "With lighting",
          src: "/pcmagus-real-build.jpg",
          alt: "Clean older gaming PC with blurple lighting",
        },
        {
          label: "Powered off",
          src: "/pcmagus-build-desk-off.jpg",
          alt: "Clean older gaming PC powered off",
        },
      ],
    },
  ],
} satisfies Record<Language, BuildShowcaseItem[]>;
