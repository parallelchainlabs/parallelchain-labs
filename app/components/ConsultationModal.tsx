"use client";

import React, { useState } from "react";
import { X, Send, Cpu } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { submitInquiry } from "../lib/submit-inquiry";
import InquiryReceipt from "./InquiryReceipt";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "dApps & Protocols",
    budget: "Research discussion",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const result = await submitInquiry({
      kind: "consult",
      name: formData.name,
      email: formData.email,
      service: formData.service,
      engagement: formData.budget,
      message: formData.message,
    });
    setSending(false);
    if (!result.ok || !result.reference) {
      setError(t.inquiry.error);
      return;
    }
    setSubmitted(result.reference);
  };

  const handleReset = () => {
    setSubmitted("");
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

              {error ? (
                <p className="text-xs text-red-400">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{sending ? t.inquiry.sending : t.modal.submit}</span>
              </button>
            </form>
          </div>
        ) : (
          <InquiryReceipt
            tone="dark"
            reference={submitted}
            name={formData.name}
            preview={formData.message}
            onReset={handleReset}
            resetLabel={t.modal.close}
          />
        )}
      </div>
    </div>
  );
}
