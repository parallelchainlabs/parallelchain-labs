"use client";

import React from "react";
import { Network, ShieldCheck, Fingerprint, BrainCircuit } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function WhyChooseUsServices() {
  const { t } = useLanguage();
  const pillars = [
    { title: t.services.wp1Title, desc: t.services.wp1Desc, icon: Network },
    { title: t.services.wp2Title, desc: t.services.wp2Desc, icon: ShieldCheck },
    { title: t.services.wp3Title, desc: t.services.wp3Desc, icon: Fingerprint },
    { title: t.services.wp4Title, desc: t.services.wp4Desc, icon: BrainCircuit },
  ];

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
            {t.services.whyEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
            {t.services.whyTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:border-[#0E7C86] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold font-heading text-[#0B1623] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
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
