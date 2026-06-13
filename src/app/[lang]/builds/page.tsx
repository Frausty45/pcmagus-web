import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BuildsShowcase from "../../components/BuildsShowcase";
import LanguageToggle from "../../components/LanguageToggle";
import { buildsPageCopy, buildsShowcaseCopy } from "../../content/builds";
import { getLanguage, languages, localizedPath } from "../../lib/i18n";

type BuildsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: BuildsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const content = buildsPageCopy[language];
  const canonical = localizedPath(language, "/builds");

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical,
      languages: {
        hu: "/hu/builds",
        en: "/en/builds",
      },
    },
    openGraph: {
      title: `PCMagus | ${content.metadata.title}`,
      description: content.metadata.description,
      url: canonical,
      siteName: "PCMagus",
      locale: content.metadata.openGraphLocale,
      type: "website",
    },
  };
}

export default async function BuildsPage({ params }: BuildsPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const content = buildsPageCopy[language];

  return (
    <main className="min-h-screen bg-[#05040a] text-zinc-100">
      <section className="border-b border-violet-300/10 bg-[radial-gradient(circle_at_78%_0%,rgba(124,58,237,0.28),transparent_34%),linear-gradient(180deg,rgba(124,58,237,0.08),transparent_52%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <Link
                href={localizedPath(language)}
                className="text-lg font-semibold tracking-wide"
              >
                PCMagus
              </Link>
              <LanguageToggle
                language={language}
                label={content.switchLabel}
                path="/builds"
              />
            </div>
            <Link
              href={localizedPath(language)}
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

      <BuildsShowcase builds={buildsShowcaseCopy[language]} />
    </main>
  );
}
