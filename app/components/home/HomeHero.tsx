"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import NetworkStatusWidget from "../NetworkStatusWidget";

interface HomeHeroProps {
  onOpenConsultation: () => void;
}

export default function HomeHero({ onOpenConsultation }: HomeHeroProps) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16 bg-[#0B1623]">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero_devs_office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1623]/85 via-[#0B1623]/45 to-[#0B1623]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/55 via-transparent to-[#0B1623]/25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] text-white">
            ParallelChain{" "}
            <span className="text-[#2CCFD3] inline-block">Lab</span>
          </h1>

          {/* Company Overview */}
          <div className="space-y-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            <p>{t.home.p1}</p>
            <p>{t.home.p2}</p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-bold text-xs transition-all duration-300 shadow-xl shadow-[#0E7C86]/30"
            >
              <span>{t.home.book}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* TRUSTED BY BUSINESSES WORLDWIDE */}
          <div className="pt-6 mt-6 border-t border-slate-800/80">
            <p className="text-left text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-4">
              {t.home.trusted}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 opacity-80 hover:opacity-100 transition-opacity">
              {[
                { label: "Enterprise", href: "/products/enterprise" },
                { label: "Mainnet", href: "/products/mainnet" },
                { label: "BINGO", href: "/products/bingo" },
                { label: "ParallelWallet", href: "/products/wallet" },
                { label: "IPC", href: "/products/ipc" },
              ].map((logo) => (
                <Link
                  key={logo.href}
                  href={logo.href}
                  className="flex items-center gap-2 text-slate-300 font-heading font-bold text-sm hover:text-[#2CCFD3] transition-colors"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0E7C86]" />
                  <span>{logo.label}</span>
                </Link>
              ))}
            </div>
            <div className="pt-6 max-w-2xl mx-auto lg:mx-0">
              <NetworkStatusWidget compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
