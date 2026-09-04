"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";
import { useLanguage } from "../components/LanguageProvider";

export default function TermsPage() {
  const { t } = useLanguage();
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1623] text-white">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />
      <main className="flex-1 bg-white text-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623]">
            {t.legal.termsTitle}
          </h1>
          <p className="text-xs text-slate-500">{t.legal.updated}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{t.legal.terms1}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{t.legal.terms2}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{t.legal.terms3}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{t.legal.terms4}</p>
          <Link
            href="/contact"
            className="inline-block text-sm font-bold text-[#0E7C86] hover:underline"
          >
            {t.legal.back}
          </Link>
        </div>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
