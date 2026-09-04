"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Users,
  Clock,
  Heart,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";

interface AboutCtaProps {
  onOpenConsultation?: () => void;
}

export default function AboutCta({ onOpenConsultation }: AboutCtaProps) {
  const { t } = useLanguage();
  return (
    <>
      {/* REMOTE CULTURE SECTION */}
      <section className="py-20 bg-[#0B1623] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#2CCFD3] text-xs font-semibold tracking-wider uppercase font-heading">
                {t.about.cultureEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                {t.about.cultureTitle1}
                <br />
                {t.about.cultureTitle2}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.about.cultureDesc}
              </p>
              <div className="pt-2">
                <Link
                  href="/about#team"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-bold text-xs transition-all shadow-lg"
                >
                  <span>{t.about.lifeAt}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Center Column: 6 Feature Pills */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c1}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c1d}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c2}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c2d}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c3}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c3d}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c4}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c4d}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c5}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c5d}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#162533] border border-slate-700/60 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.about.c6}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.about.c6d}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623]">
                {t.about.hireTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {t.about.hireDesc}
              </p>
            </div>

            <a
              href="mailto:info@parallelchain-labs.io?subject=Career%20Inquiry%20-%20ParallelChain%20Labs"
              className="shrink-0 px-8 py-3.5 bg-[#0E7C86] hover:bg-[#0B6871] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>{t.about.hireCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
