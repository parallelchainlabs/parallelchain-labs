"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import {
  HOME_PROJECT_SLUGS,
  PROJECTS,
  projectCopy,
  type ProjectKind,
} from "../../lib/projects";

export default function TrustedProjects({
  limit,
  showHeader = true,
  home = false,
}: {
  limit?: number;
  showHeader?: boolean;
  home?: boolean;
}) {
  const { t, locale } = useLanguage();
  const items = home
    ? PROJECTS.filter((project) => HOME_PROJECT_SLUGS.includes(project.slug))
    : limit
      ? PROJECTS.slice(0, limit)
      : PROJECTS;

  const kindLabel = (kind: ProjectKind) =>
    kind === "live" ? t.projects.live : t.projects.reference;

  return (
    <section className="py-20 bg-[#F7F9FB] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase">
                {t.projects.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
                {t.projects.title}
              </h2>
              <p className="text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed">
                {t.projects.intro}
              </p>
            </div>
            {limit || home ? (
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0E7C86] hover:text-[#0B6871]"
              >
                {t.projects.viewAll}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((project) => {
            const copy = projectCopy(project, locale);
            return (
              <Link
                key={project.slug}
                href={project.href}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#0E7C86] hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-36">
                  <Image
                    src={project.image}
                    alt={copy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/70 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        project.kind === "live"
                          ? "bg-emerald-500 text-white"
                          : "bg-white/95 text-[#0E7C86]"
                      }`}
                    >
                      {kindLabel(project.kind)}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0B1623]/80 text-white text-[10px] font-bold">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0E7C86]">
                    {project.sector}
                  </p>
                  <h3 className="text-base font-bold font-heading text-[#0B1623] mt-1 group-hover:text-[#0E7C86]">
                    {copy.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                    {copy.summary}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {project.metrics.map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-xl bg-[#F7F9FB] border border-slate-100 px-2 py-2 text-center"
                      >
                        <div className="text-[11px] font-bold text-[#0B1623]">{k}</div>
                        <div className="text-[9px] text-slate-500">{v}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500 leading-relaxed flex items-start gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0E7C86] shrink-0 mt-0.5" />
                    {copy.outcome}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
