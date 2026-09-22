"use client";

import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function InteractiveMapSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-xl h-[420px] bg-slate-200">
          <iframe
            title="ParallelChain Lab Headquarters Location Map"
            src="https://maps.google.com/maps?q=100+Tras+Street+Singapore+079027&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          />

          <div className="absolute bottom-6 left-6 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-3 z-10">
            <h3 className="text-base font-bold font-heading text-[#0B1623]">
              {t.contact.mapTitle}
            </h3>
            <p className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#0E7C86] shrink-0 mt-0.5" />
              <span>100 Tras Street, #16-01, 100 AM, Singapore 079027</span>
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=100+Tras+Street+%2316-01+Singapore+079027"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E7C86] hover:bg-[#0B6871] text-white text-xs font-bold transition-all shadow-md"
            >
              <span>{t.contact.directions}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
