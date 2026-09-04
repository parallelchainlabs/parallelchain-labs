"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Cpu } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { openLabMailto } from "../lib/mailto";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "dApps & Protocols",
    budget: "Research discussion",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openLabMailto(
      `Consultation — ${formData.service}`,
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Area: ${formData.service}`,
        `Engagement: ${formData.budget}`,
        "",
        formData.message,
      ].join("\n"),
    );
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#162533] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0E7C86] rounded-full blur-3xl opacity-30 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label={t.modal.closeAria}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#0E7C86] flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-heading text-white">
                {t.modal.title}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              {t.modal.intro}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {t.modal.fullName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.namePh}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0B1623] border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#2CCFD3] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {t.modal.workEmail}
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0B1623] border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#2CCFD3] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.service}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-[#0B1623] border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#2CCFD3] transition-colors"
                  >
                    <option value="dApps & Protocols">{t.nav.dapps}</option>
                    <option value="Digital Identity">{t.nav.identity}</option>
                    <option value="Decentralized Finance">{t.nav.defi}</option>
                    <option value="AI Infrastructure">{t.nav.ai}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.modal.budget}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-[#0B1623] border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#2CCFD3] transition-colors"
                  >
                    <option value="Research discussion">
                      {t.modal.engResearch}
                    </option>
                    <option value="Pilot">{t.modal.engPilot}</option>
                    <option value="Production deployment">
                      {t.modal.engProduction}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {t.modal.summary}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={t.modal.summaryPh}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0B1623] border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#2CCFD3] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>{t.modal.submit}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#16A34A]/20 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              {t.modal.doneTitle}
            </h3>
            <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
              {t.modal.thankYou}{" "}
              <span className="text-[#2CCFD3] font-semibold">
                {formData.name}
              </span>
              . {t.modal.doneDesc}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {t.modal.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
