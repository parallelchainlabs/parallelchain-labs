"use client";

import React, { useState } from "react";
import { useLanguage } from "../LanguageProvider";

export default function ContactFaqSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactFaqs = [
    { q: t.contact.faq1q, a: t.contact.faq1a },
    { q: t.contact.faq2q, a: t.contact.faq2a },
    { q: t.contact.faq3q, a: t.contact.faq3a },
    { q: t.contact.faq4q, a: t.contact.faq4a },
    { q: t.contact.faq5q, a: t.contact.faq5a },
  ];

  return (
    <div className="lg:col-span-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623]">
          {t.contact.faqTitle}
        </h2>
      </div>

      <div className="space-y-3">
        {contactFaqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#F7F9FB] border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs font-bold text-[#0B1623] hover:text-[#0E7C86] transition-colors"
            >
              <span>{faq.q}</span>
              <span className="text-base font-bold text-[#0E7C86] shrink-0 ml-3">
                {openFaq === idx ? "−" : "+"}
              </span>
            </button>
            {openFaq === idx && (
              <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
