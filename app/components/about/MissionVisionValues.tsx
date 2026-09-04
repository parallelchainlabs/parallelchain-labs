"use client";

import React from "react";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function MissionVisionValues() {
  const { t } = useLanguage();
  const values = [t.about.v1, t.about.v2, t.about.v3, t.about.v4, t.about.v5, t.about.v6];

  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1623] mb-3">
                {t.about.mission}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1623] mb-3">
                {t.about.vision}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0B1623] mb-4">
              {t.about.values}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {values.map((val, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0" />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
