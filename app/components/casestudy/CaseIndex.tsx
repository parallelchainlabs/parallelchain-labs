"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { CASE_SLUGS, caseMeta } from "../../lib/catalog";

export default function CaseIndex() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1623] pt-14 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-[#2CCFD3] text-xs font-bold tracking-wider uppercase">
            {t.cases.breadcrumb}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-3 leading-tight">
            {t.cases.title1}
            <br />
            {t.cases.title2}
          </h1>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            {t.cases.intro}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FB] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_SLUGS.map((slug) => {
            const note = t.cases[slug];
            const meta = caseMeta[slug];
            return (
              <Link
                key={slug}
                href={`/case-studies/${slug}`}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#0E7C86] hover:shadow-xl transition-all"
              >
                <div className="relative h-40">
                  <Image
                    src={meta.image}
                    alt={note.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7C86]">
                    {note.kicker}
                  </span>
                  <h2 className="text-lg font-bold font-heading text-[#0B1623] mt-2 group-hover:text-[#0E7C86]">
                    {note.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {note.summary}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C86]">
                    {t.cases.openNote}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
