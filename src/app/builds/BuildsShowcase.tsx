"use client";

import Image from "next/image";
import { useState } from "react";
import type { Language } from "../lib/language";

const copy = {
  hu: {
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
  en: {
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
} satisfies Record<
  Language,
  {
    buildLabel: string;
    title: string;
    shortDescription: string;
    description: string;
    details: string;
    open: string;
    close: string;
    previousImage: string;
    nextImage: string;
    images: Array<{ label: string; src: string; alt: string }>;
  }
>;

type BuildsShowcaseProps = {
  language: Language;
};

export default function BuildsShowcase({ language }: BuildsShowcaseProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const content = copy[language];
  const imageCount = content.images.length;
  const currentImage = content.images[activeImage];

  function showPreviousImage() {
    setActiveImage((index) => (index === 0 ? imageCount - 1 : index - 1));
  }

  function showNextImage() {
    setActiveImage((index) => (index + 1) % imageCount);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        className="group grid w-full overflow-hidden border border-violet-300/14 bg-white/[0.035] text-left transition duration-300 hover:border-violet-200/35 hover:bg-violet-400/[0.055] lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative aspect-[16/10] bg-black lg:aspect-auto lg:min-h-[360px]">
          <Image
            src={content.images[0].src}
            alt={content.images[0].alt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05040a]/78 via-transparent to-transparent" />
        </div>

        <div className="flex min-h-[280px] flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="mb-4 inline-flex border border-violet-300/25 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-100">
              {content.buildLabel}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
              {content.shortDescription}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-violet-100">
              {expanded ? content.close : content.open}
            </span>
            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center border border-violet-200/25 text-lg text-white transition duration-300 ${
                expanded
                  ? "rotate-45 bg-violet-400"
                  : "group-hover:bg-violet-400/20"
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-500 ease-out ${
          expanded
            ? "grid-rows-[1fr] translate-y-0 opacity-100"
            : "grid-rows-[0fr] -translate-y-3 opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="border-x border-b border-violet-300/14 bg-violet-400/[0.035] p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05040a]/55 via-transparent to-[#05040a]/15" />
                <button
                  type="button"
                  aria-label={content.previousImage}
                  onClick={showPreviousImage}
                  className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-violet-100/25 bg-black/45 text-2xl text-white backdrop-blur transition hover:border-violet-100/50 hover:bg-violet-400/55"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label={content.nextImage}
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-violet-100/25 bg-black/45 text-2xl text-white backdrop-blur transition hover:border-violet-100/50 hover:bg-violet-400/55"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-4 border border-violet-100/20 bg-black/50 px-3 py-2 text-xs font-semibold text-zinc-100 backdrop-blur">
                  {activeImage + 1} / {imageCount} - {currentImage.label}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {content.details}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {content.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  {content.images.map((image, index) => (
                    <span
                      key={image.src}
                      aria-label={`${image.label} image`}
                      className={`h-2.5 w-2.5 transition ${
                        activeImage === index
                          ? "bg-violet-300"
                          : "bg-violet-200/25"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
