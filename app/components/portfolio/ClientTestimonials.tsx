"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function ClientTestimonials() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: t.home.q1,
      author: t.home.proj1Title,
      role: t.home.q1Role,
      avatar: "PE",
    },
    {
      quote: t.home.q2,
      author: t.home.proj2Title,
      role: t.home.q2Role,
      avatar: "BI",
    },
    {
      quote: t.home.q3,
      author: "IPC",
      role: t.home.q3Role,
      avatar: "IC",
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1623] border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E7C86]/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-8">
            <div>
              <span className="text-[#2CCFD3] text-xs font-semibold tracking-wider uppercase font-heading">
                {t.home.clientsSay}
              </span>
              <h2 className="text-3xl font-bold font-heading text-white mt-2">
                {t.portfolio.clientsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    activeTestimonial === idx
                      ? "bg-[#162533] border-[#2CCFD3] shadow-lg"
                      : "bg-[#162533]/50 border-slate-700/60 hover:bg-[#162533]"
                  }`}
                >
                  <Quote className="w-8 h-8 text-[#0E7C86] mb-4 opacity-60" />
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0E7C86] text-white font-bold text-sm flex items-center justify-center">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {t.author}
                      </div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeTestimonial === idx
                      ? "w-8 bg-[#2CCFD3]"
                      : "w-2 bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
