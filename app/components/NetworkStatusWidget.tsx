"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const rails = [
  { key: "enterprise" as const, href: "/products/enterprise" },
  { key: "mainnet" as const, href: "/products/mainnet" },
  { key: "ipc" as const, href: "/products/ipc" },
];

export default function NetworkStatusWidget({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div
      className={`rounded-2xl border border-slate-700/70 bg-[#0B1623]/80 backdrop-blur-md ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-[11px] font-bold tracking-wider uppercase text-[#2CCFD3]">
            {t.status.eyebrow}
          </p>
          {!compact ? (
            <p className="text-sm font-bold font-heading text-white mt-1">
              {t.status.title}
            </p>
          ) : null}
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {rails.map((rail) => (
          <Link
            key={rail.key}
            href={rail.href}
            className="group rounded-xl border border-slate-700/60 bg-[#162533]/80 px-3 py-3 hover:border-[#2CCFD3]/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white group-hover:text-[#2CCFD3] transition-colors">
                {t.status[rail.key]}
              </span>
              <span className="text-[10px] font-semibold text-emerald-400">
                {t.status.operational}
              </span>
            </div>
            <div className="mt-2 h-1 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#0E7C86] to-[#2CCFD3] animate-status-flow" />
            </div>
          </Link>
        ))}
      </div>
      <p className="text-[10px] text-slate-500 mt-3">{t.status.hint}</p>
    </div>
  );
}
