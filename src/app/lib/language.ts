"use client";

import { useEffect, useState } from "react";

export type Language = "hu" | "en";

const languageStorageKey = "pcmagus-language";
const fallbackLanguage: Language = "hu";

function isLanguage(value: string | null): value is Language {
  return value === "hu" || value === "en";
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return fallbackLanguage;
    }

    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguage(storedLanguage) ? storedLanguage : fallbackLanguage;
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    function handleStorageChange(event: StorageEvent) {
      if (
        event.key === languageStorageKey &&
        isLanguage(event.newValue)
      ) {
        setLanguageState(event.newValue);
        document.documentElement.lang = event.newValue;
      }
    }

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem(languageStorageKey, nextLanguage);
  }

  return { language, setLanguage };
}
