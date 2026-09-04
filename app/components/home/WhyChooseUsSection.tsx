"use client";

import React from "react";
import { Network, ShieldCheck, Fingerprint, BrainCircuit } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function WhyChooseUsSection() {
  const { t } = useLanguage();
  const pillars = [
    {
      title: t.home.pillar1Title,
      desc: t.home.pillar1Desc,
      icon: Network,
    },
    {
      title: t.home.pillar2Title,
      desc: t.home.pillar2Desc,
      icon: Fingerprint,
    },
    {
      title: t.home.pillar3Title,
      desc: t.home.pillar3Desc,
      icon: ShieldCheck,
    },
    {
      title: t.home.pillar4Title,
      desc: t.home.pillar4Desc,
      icon: BrainCircuit,
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
            {t.home.why}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
            {t.home.whyTitle}
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            {t.home.whyDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-[#0E7C86] transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#0B1623] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
