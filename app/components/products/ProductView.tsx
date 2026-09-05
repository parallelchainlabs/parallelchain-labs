"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import ArchitectureDiagram from "../ArchitectureDiagram";
import NetworkStatusWidget from "../NetworkStatusWidget";
import { productMeta, type ProductSlug } from "../../lib/catalog";

export default function ProductView({ slug }: { slug: ProductSlug }) {
  const { t } = useLanguage();
  const meta = productMeta[slug];
  const copy = t.products[slug];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1623] pt-10 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2CCFD3] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.products.back}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[#2CCFD3] text-xs font-bold tracking-wider uppercase">
                {copy.kicker}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
                {copy.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {copy.lead}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/contact?product=${slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-bold text-xs transition-all"
                >
                  {t.products.nextCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {meta.caseSlug ? (
                  <Link
                    href={`/case-studies/${meta.caseSlug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-200 hover:border-[#2CCFD3] hover:text-white font-bold text-xs transition-all"
                  >
                    {t.products.seeDeploy}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-700/70">
                <Image
                  src={meta.image}
                  alt={copy.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/70 to-transparent" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-10 max-w-xl">
            {[
              [copy.m1, copy.m1l],
              [copy.m2, copy.m2l],
              [copy.m3, copy.m3l],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-slate-700/60 bg-[#162533]/70 px-3 py-3"
              >
                <div className="text-sm font-bold text-white">{k}</div>
                <div className="text-[11px] text-slate-400">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623] mb-8">
            {t.products.forTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[copy.a1, copy.a2, copy.a3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 text-sm text-slate-600 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            {t.products.archTitle}
          </h2>
          <ArchitectureDiagram variant={slug} />
          <NetworkStatusWidget compact />
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FB] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623] mb-8">
            {t.products.howTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [copy.s1t, copy.s1d],
              [copy.s2t, copy.s2d],
              [copy.s3t, copy.s3d],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-xs font-bold text-[#0E7C86] mb-2">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1623] mb-2">
                  {title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {copy.next}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C86] hover:bg-[#0B6871] text-white font-bold text-xs"
              >
                {t.products.nextCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {meta.caseSlug ? (
                <Link
                  href={`/case-studies/${meta.caseSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-[#0E7C86] font-bold text-xs"
                >
                  {t.products.seeDeploy}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
