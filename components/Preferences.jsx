"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { arabic } from "@/data/arabic";

const Preferences = createContext({ t: (value) => value });

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState("ar");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    try {
      setLanguage(localStorage.getItem("portfolio-language") === "en" ? "en" : "ar");
      setTheme(localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-language", language);
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [language, theme]);
  function t(value) {
    if (language !== "ar") return value;
    if (typeof value === "string") return arabic[value] || value;
    if (Array.isArray(value)) return value.map(t);
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, t(item)]));
    return value;
  }
  return <Preferences.Provider value={{ language, theme, setLanguage, setTheme, t }}>{children}</Preferences.Provider>;
}

export const usePreferences = () => useContext(Preferences);

export function PreferenceControls() {
  const { language, theme, setLanguage, setTheme, t } = usePreferences();
  return <div className="flex shrink-0 items-center gap-2">
    <button type="button" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"} className="rounded-lg border border-line px-3 py-2 text-sm hover:border-brass">{language === "ar" ? "EN" : "العربية"}</button>
    <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t(theme === "light" ? "Dark mode" : "Light mode")} className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm hover:border-brass"><span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span><span className="hidden sm:inline">{t(theme === "light" ? "Dark mode" : "Light mode")}</span></button>
  </div>;
}
