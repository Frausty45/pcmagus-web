"use client";

import type { Language } from "../lib/language";

type LanguageToggleProps = {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
};

export default function LanguageToggle({
  language,
  label,
  onChange,
}: LanguageToggleProps) {
  return (
    <div
      aria-label={label}
      className="grid h-9 grid-cols-2 border border-violet-200/20 bg-black/35 p-1 text-xs font-semibold text-zinc-300 shadow-[0_0_24px_rgba(124,58,237,0.18)] backdrop-blur"
      role="group"
    >
      {(["hu", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          onClick={() => onChange(option)}
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
  );
}
