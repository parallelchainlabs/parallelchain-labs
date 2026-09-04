"use client";

import React from "react";
import { Building, Building2, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function OfficeCardsSection() {
  const { t } = useLanguage();
  return (
    <div className="lg:col-span-6 space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623]">
          {t.contact.locations}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {t.contact.locationsDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#F7F9FB] border border-slate-200 rounded-2xl p-5 text-left hover:border-[#0E7C86] transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-3">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold font-heading text-[#0B1623]">
              {t.contact.hq}
            </h3>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              100 Tras Street, #16-01
              <br />
              100 AM, Singapore 079027
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=100+Tras+Street+%2316-01+Singapore+079027"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0E7C86] hover:underline pt-3"
          >
            <span>{t.contact.directions}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-[#F7F9FB] border border-slate-200 rounded-2xl p-5 text-left hover:border-[#0E7C86] transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold font-heading text-[#0B1623]">
              {t.contact.hk}
            </h3>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              26/F, Three Exchange Square
              <br />
              Central, Hong Kong
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Three+Exchange+Square+8+Connaught+Place+Central+Hong+Kong"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0E7C86] hover:underline pt-3"
          >
            <span>{t.contact.directions}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-[#F7F9FB] border border-slate-200 rounded-2xl p-5 text-left hover:border-[#0E7C86] transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold font-heading text-[#0B1623]">
              {t.contact.regional}
            </h3>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              {t.contact.thailand}
              <br />
              {t.contact.distributed}
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/parallelchain-lab/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0E7C86] hover:underline pt-3"
          >
            <span>{t.contact.learnMore}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
