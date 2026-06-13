export const languages = ["hu", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "hu";

export function isLanguage(value: string | undefined): value is Language {
  return languages.some((language) => language === value);
}

export function getLanguage(value: string | undefined): Language | null {
  return isLanguage(value) ? value : null;
}

export function localizedPath(language: Language, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedPath === "/" ? `/${language}` : `/${language}${normalizedPath}`;
}
