"use client";

import React from "react";
import { FaPython, FaRust, FaGolang, FaDocker } from "react-icons/fa6";
import {
  SiSolidity,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiEthereum,
  SiIpfs,
  SiHuggingface,
  SiKubernetes,
  SiOpencv,
} from "react-icons/si";
import { useLanguage } from "../LanguageProvider";

export default function TechMarqueeBar() {
  const { t } = useLanguage();
  const techStack = [
    {
      name: "Rust",
      icon: FaRust,
      color: "text-[#DEA584]",
      glowColor:
        "group-hover:border-[#DEA584] group-hover:shadow-[0_0_25px_rgba(222,165,132,0.4)]",
    },
    {
      name: "Solidity",
      icon: SiSolidity,
      color: "text-slate-100",
      glowColor:
        "group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]",
    },
    {
      name: "Go",
      icon: FaGolang,
      color: "text-[#00ADD8]",
      glowColor:
        "group-hover:border-[#00ADD8] group-hover:shadow-[0_0_25px_rgba(0,173,216,0.4)]",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "text-[#3776AB]",
      glowColor:
        "group-hover:border-[#3776AB] group-hover:shadow-[0_0_25px_rgba(55,118,171,0.4)]",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "text-[#00599C]",
      glowColor:
        "group-hover:border-[#00599C] group-hover:shadow-[0_0_25px_rgba(0,89,156,0.4)]",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      color: "text-[#FF6F00]",
      glowColor:
        "group-hover:border-[#FF6F00] group-hover:shadow-[0_0_25px_rgba(255,111,0,0.4)]",
    },
    {
      name: "PyTorch",
      icon: SiPytorch,
      color: "text-[#EE4C2C]",
      glowColor:
        "group-hover:border-[#EE4C2C] group-hover:shadow-[0_0_25px_rgba(238,76,44,0.4)]",
    },
    {
      name: "Ethereum",
      icon: SiEthereum,
      color: "text-[#627EEA]",
      glowColor:
        "group-hover:border-[#627EEA] group-hover:shadow-[0_0_25px_rgba(98,126,234,0.4)]",
    },
    {
      name: "IPFS",
      icon: SiIpfs,
      color: "text-[#65C2CB]",
      glowColor:
        "group-hover:border-[#65C2CB] group-hover:shadow-[0_0_25px_rgba(101,194,203,0.4)]",
    },
    {
      name: "Hugging Face",
      icon: SiHuggingface,
      color: "text-[#FFD21E]",
      glowColor:
        "group-hover:border-[#FFD21E] group-hover:shadow-[0_0_25px_rgba(255,210,30,0.4)]",
    },
    {
      name: "OpenCV",
      icon: SiOpencv,
      color: "text-[#5C3EE8]",
      glowColor:
        "group-hover:border-[#5C3EE8] group-hover:shadow-[0_0_25px_rgba(92,62,232,0.4)]",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "text-[#326CE5]",
      glowColor:
        "group-hover:border-[#326CE5] group-hover:shadow-[0_0_25px_rgba(50,108,229,0.4)]",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "text-[#2496ED]",
      glowColor:
        "group-hover:border-[#2496ED] group-hover:shadow-[0_0_25px_rgba(36,150,237,0.4)]",
    },
  ];

  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-6 sm:py-8 bg-[#070E17] text-white border-y border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-36 bg-[#0E7C86]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-36 bg-[#2CCFD3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7C86]/10 border border-[#0E7C86]/30 text-[#2CCFD3] text-[11px] font-mono font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#2CCFD3] animate-pulse" />
          <span>{t.home.stackBadge}</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#070E17] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#070E17] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
          {marqueeItems.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center gap-2 shrink-0 cursor-pointer"
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0B1623] border-2 border-slate-800/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${tech.glowColor}`}
                >
                  <IconComp
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold font-heading text-slate-300 group-hover:text-white transition-colors text-center whitespace-nowrap tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
