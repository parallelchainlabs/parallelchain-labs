"use client";

import React, { useState } from "react";
import { CheckCircle2, Copy, Check } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function InquiryReceipt({
  reference,
  name,
  preview,
  onReset,
  resetLabel,
  tone = "light",
}: {
  reference: string;
  name?: string;
  preview?: string;
  onReset?: () => void;
  resetLabel?: string;
  tone?: "light" | "dark";
}) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const dark = tone === "dark";

  const copyRef = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md ${
          dark ? "bg-[#16A34A]/20 text-[#16A34A]" : "bg-emerald-100 text-emerald-600"
        }`}
      >
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <h3
        className={`text-2xl font-bold font-heading ${dark ? "text-white" : "text-[#0B1623]"}`}
      >
        {t.inquiry.receivedTitle}
      </h3>
      {name ? (
        <p className={`text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {t.modal.thankYou}{" "}
          <span className="text-[#2CCFD3] font-semibold">{name}</span>.
        </p>
      ) : null}
      <p
        className={`text-xs sm:text-sm max-w-md mx-auto ${dark ? "text-slate-300" : "text-slate-600"}`}
      >
        {t.inquiry.receivedDesc}
      </p>
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${
          dark
            ? "bg-[#0B1623] border-slate-700"
            : "bg-[#F7F9FB] border-slate-200"
        }`}
      >
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          {t.inquiry.reference}
        </span>
        <span
          className={`text-sm font-mono font-bold ${dark ? "text-white" : "text-[#0B1623]"}`}
        >
          {reference}
        </span>
        <button
          type="button"
          onClick={copyRef}
          className="p-1.5 rounded-lg text-slate-500 hover:text-[#0E7C86] hover:bg-white transition-colors"
          aria-label={t.inquiry.copy}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
      {preview ? (
        <div
          className={`max-w-md mx-auto text-left rounded-xl p-4 border ${
            dark
              ? "bg-[#0B1623] border-slate-700"
              : "bg-[#F7F9FB] border-slate-200"
          }`}
        >
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            {t.inquiry.summary}
          </div>
          <p
            className={`text-xs whitespace-pre-wrap leading-relaxed ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {preview}
          </p>
        </div>
      ) : null}
      {onReset ? (
        <button
          type="button"
          onClick={onReset}
          className="px-6 py-2.5 bg-[#0E7C86] text-white font-bold text-xs rounded-xl hover:bg-[#0B6871] transition-colors"
        >
          {resetLabel || t.inquiry.sendAnother}
        </button>
      ) : null}
    </div>
  );
}
