"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import type { Locale } from "../lib/i18n";

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  const options: { id: Locale; label: string }[] = [
    { id: "en", label: t.lang.en },
    { id: "zh", label: t.lang.zh },
  ];

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-lg border border-slate-700/80 bg-[#0B1623]/80 p-0.5 ${
        compact ? "" : ""
      }`}
    >
      {options.map((opt) => {
        const active = locale === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLocale(opt.id)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition-colors ${
              active
                ? "bg-[#0E7C86] text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
