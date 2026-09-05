"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { productMeta } from "../../lib/catalog";

export default function CategoryFilterGrid() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("all");

  const categories = [
    { id: "all", label: t.portfolio.allProjects },
    { id: "dapps", label: t.nav.dapps },
    { id: "identity", label: t.nav.identity },
    { id: "defi", label: t.portfolio.defi },
    { id: "ai", label: t.nav.ai },
  ];

  const industries = [
    { id: "all", label: t.portfolio.allDomains },
    { id: "blockchain", label: t.portfolio.blockchain },
    { id: "identity", label: t.portfolio.identity },
    { id: "finance", label: t.portfolio.finance },
    { id: "ai", label: t.portfolio.ai },
    { id: "enterprise", label: t.portfolio.enterprise },
  ];

  const categoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id;
  const industryLabel = (id: string) =>
    industries.find((c) => c.id === id)?.label ?? id;

  const projects = [
    {
      id: "enterprise",
      category: "dapps",
      industry: "enterprise",
      title: t.portfolio.p1Title,
      desc: t.portfolio.p1Desc,
      tags: ["Enterprise", "PoIM", "Privacy"],
      image: productMeta.enterprise.image,
      href: "/products/enterprise",
    },
    {
      id: "bingo",
      category: "identity",
      industry: "identity",
      title: t.portfolio.p2Title,
      desc: t.portfolio.p2Desc,
      tags: ["BINGO", "KYC", "GDPR"],
      image: productMeta.bingo.image,
      href: "/products/bingo",
    },
    {
      id: "mainnet",
      category: "dapps",
      industry: "blockchain",
      title: t.portfolio.p3Title,
      desc: t.portfolio.p3Desc,
      tags: ["Mainnet", "PoS", "L1"],
      image: productMeta.mainnet.image,
      href: "/products/mainnet",
    },
    {
      id: "ipc",
      category: "defi",
      industry: "finance",
      title: t.portfolio.p4Title,
      desc: t.portfolio.p4Desc,
      tags: ["IPC", "Enterprise", "Mainnet"],
      image: productMeta.ipc.image,
      href: "/products/ipc",
    },
    {
      id: "wallet",
      category: "identity",
      industry: "identity",
      title: t.portfolio.p5Title,
      desc: t.portfolio.p5Desc,
      tags: ["Wallet", "Biometrics", "SSI"],
      image: productMeta.wallet.image,
      href: "/products/wallet",
    },
    {
      id: "ai-infra",
      category: "ai",
      industry: "ai",
      title: t.portfolio.p6Title,
      desc: t.portfolio.p6Desc,
      tags: ["AI", "Trusted Compute", "Research"],
      image: productMeta["ai-infra"].image,
      href: "/products/ai-infra",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchInd = activeIndustry === "all" || p.industry === activeIndustry;
    return matchCat && matchInd;
  });

  return (
    <section className="py-16 bg-[#F7F9FB] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#0E7C86] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={activeIndustry}
              onChange={(e) => setActiveIndustry(e.target.value)}
              className="appearance-none px-4 py-2 pr-8 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#0E7C86] shadow-sm cursor-pointer"
            >
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:border-[#0E7C86] hover:shadow-xl transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/50 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#0E7C86] text-[11px] font-bold shadow-sm backdrop-blur-md">
                      {categoryLabel(project.category)}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0B1623]/80 text-white text-[11px] font-bold backdrop-blur-md">
                      {industryLabel(project.industry)}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-heading text-[#0B1623] group-hover:text-[#0E7C86] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#F3F4F6] text-[11px] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
