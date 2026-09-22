"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Rocket, Users, Code2 } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function AboutHero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16 bg-[#0B1623] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#2CCFD3]">{t.about.breadcrumb}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-[#2CCFD3] text-xs font-semibold tracking-wider uppercase font-heading">
              {t.about.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
              {t.about.title1}
              <br />
              {t.about.title2}{" "}
              <span className="text-[#2CCFD3]">{t.about.title3}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.about.intro}
            </p>

            {/* 4 Quick Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-white">
                    2018
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {t.about.founded}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-[#2CCFD3]">
                    {t.about.dual}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {t.about.chainPlatforms}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-white">
                    R&amp;D
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {t.about.engineerLab}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-[#2CCFD3]">
                    AI + Web3
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {t.about.coreFocus}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Office Photo Mockup */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 group">
              <Image
                src="/images/about_lab_hero.png"
                alt="ParallelChain Lab blockchain and AI research lab"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
