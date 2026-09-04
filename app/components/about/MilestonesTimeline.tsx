"use client";

import React from "react";
import { Flag, ShieldCheck, Blocks, Fingerprint, Link2 } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function MilestonesTimeline() {
  const { t } = useLanguage();
  const milestones = [
    { year: "2018", title: t.about.m1Title, desc: t.about.m1Desc, icon: Flag },
    { year: "2020", title: t.about.m2Title, desc: t.about.m2Desc, icon: ShieldCheck },
    { year: "2022", title: t.about.m3Title, desc: t.about.m3Desc, icon: Blocks },
    { year: "2023", title: t.about.m4Title, desc: t.about.m4Desc, icon: Fingerprint },
    { year: t.about.m5Year, title: t.about.m5Title, desc: t.about.m5Desc, icon: Link2 },
  ];

  return (
    <section className="py-20 bg-[#EEF4F8] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:text-left">
          <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
            {t.about.journey}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
            {t.about.journeyTitle1}
            <br className="hidden sm:block" /> {t.about.journeyTitle2}
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-3">
            {t.about.journeyDesc}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {milestones.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#0E7C86] border-2 border-slate-200 flex items-center justify-center mb-6 shadow-md z-10 transition-all duration-300 group-hover:bg-[#0E7C86] group-hover:text-white group-hover:border-[#2CCFD3] group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(44,207,211,0.35)]">
                    <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="w-full bg-[#F7F9FB] border border-slate-200 rounded-2xl p-5 text-center transition-all duration-300 shadow-sm group-hover:border-[#0E7C86] group-hover:shadow-lg group-hover:-translate-y-1 flex-1">
                    <div className="text-xs font-bold text-[#0E7C86] font-mono mb-1">
                      {m.year}
                    </div>
                    <h3 className="text-sm font-bold font-heading text-[#0B1623] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
