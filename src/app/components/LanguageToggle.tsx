import Link from "next/link";
import { languages, localizedPath, type Language } from "../lib/i18n";

type LanguageToggleProps = {
  language: Language;
  label: string;
  path?: string;
};

export default function LanguageToggle({
  language,
  label,
  path = "",
}: LanguageToggleProps) {
  return (
    <div
      aria-label={label}
      className="grid h-9 grid-cols-2 border border-violet-200/20 bg-black/35 p-1 text-xs font-semibold text-zinc-300 shadow-[0_0_24px_rgba(124,58,237,0.18)] backdrop-blur"
      role="group"
    >
      {languages.map((option) => (
        <Link
          key={option}
          href={localizedPath(option, path)}
          aria-current={language === option ? "page" : undefined}
          className={`grid min-w-10 place-items-center px-3 transition ${
            language === option
              ? "bg-violet-400 text-white"
              : "hover:bg-violet-300/10 hover:text-white"
          }`}
        >
          {option.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
