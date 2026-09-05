"use client";

import React from "react";
import Image from "next/image";
import {
  Blocks,
  Fingerprint,
  Landmark,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";

interface ServiceCardsProps {
  onOpenConsultation: () => void;
}

export default function ServiceCards({
  onOpenConsultation,
}: ServiceCardsProps) {
  const { t } = useLanguage();
  const services = [
    {
      id: "dapps-protocols",
      icon: Blocks,
      title: t.services.s1Title,
      description: t.services.s1Desc,
      image: {
        src: "/images/portfolio/mainnet.jpg",
        alt: t.services.s1Title,
      },
      features: [t.services.s1f1, t.services.s1f2, t.services.s1f3],
    },
    {
      id: "digital-identity",
      icon: Fingerprint,
      title: t.services.s2Title,
      description: t.services.s2Desc,
      image: {
        src: "/images/work_privid.png",
        alt: t.services.s2Title,
      },
      features: [t.services.s2f1, t.services.s2f2, t.services.s2f3],
    },
    {
      id: "defi",
      icon: Landmark,
      title: t.services.s3Title,
      description: t.services.s3Desc,
      image: {
        src: "/images/portfolio/ipc.jpg",
        alt: t.services.s3Title,
      },
      features: [t.services.s3f1, t.services.s3f2, t.services.s3f3],
    },
    {
      id: "ai-infrastructure",
      icon: BrainCircuit,
      title: t.services.s4Title,
      description: t.services.s4Desc,
      image: {
        src: "/images/portfolio/ai.jpg",
        alt: t.services.s4Title,
      },
      features: [t.services.s4f1, t.services.s4f2, t.services.s4f3],
    },
  ];
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
              {t.services.offerEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
              {t.services.offerTitle1}
              <br />
              {t.services.offerTitle2}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.services.offerDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col hover:border-[#0E7C86] hover:shadow-xl transition-all shadow-sm group"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/70 via-[#0B1623]/10 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#0E7C86] text-[11px] font-bold shadow-sm">
                    0{index + 1}
                  </span>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-[#0E7C86] text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#0B1623] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C86] hover:underline transition-colors"
                    >
                      <span>{t.services.discuss}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
