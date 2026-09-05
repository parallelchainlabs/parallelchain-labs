"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { caseMeta, type CaseSlug } from "../../lib/catalog";

export default function CaseArticle({ slug }: { slug: CaseSlug }) {
  const { t } = useLanguage();
  const note = t.cases[slug];
  const meta = caseMeta[slug];

  return (
    <>
      <section className="bg-[#0B1623] pt-10 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2CCFD3] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.cases.back}
          </Link>
          <span className="text-[#2CCFD3] text-xs font-bold tracking-wider uppercase">
            {note.kicker}
          </span>
          <h1 className="text-4xl font-extrabold font-heading text-white mt-3">
            {note.title}
          </h1>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            {note.summary}
          </p>
        </div>
      </section>
      <section className="py-14 bg-white text-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative h-56 rounded-3xl overflow-hidden">
            <Image
              src={meta.image}
              alt={note.title}
              fill
              className="object-cover"
              sizes="768px"
            />
          </div>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>{note.problem}</p>
            <p>{note.approach}</p>
            <p>{note.result}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/products/${meta.product}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E7C86] text-white font-bold text-xs"
            >
              {t.cases.product}: {t.products[meta.product].title}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs"
            >
              {t.cases.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
