"use client";

import React from "react";
import { Send, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

interface ContactCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function ContactCtaSection({
  onOpenConsultation,
}: ContactCtaSectionProps) {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1623] border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden text-white">
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-full bg-white text-[#0E7C86] flex items-center justify-center shrink-0 shadow-lg">
              <Send className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {t.contact.ctaTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {t.contact.ctaDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="z-10 shrink-0 px-8 py-3.5 bg-[#2CCFD3] hover:bg-[#0E7C86] hover:text-white text-[#0B1623] font-bold text-xs rounded-xl transition-all shadow-xl flex items-center gap-2"
          >
            <span>{t.contact.bookFree}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
