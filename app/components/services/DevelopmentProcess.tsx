"use client";

import React from "react";
import {
  Search,
  FileText,
  Edit3,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

export default function DevelopmentProcess() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "We understand your business, goals and challenges.",
      icon: Search,
    },
    {
      step: "02",
      title: "Plan",
      desc: "We define the strategy, roadmap and technical approach.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Design",
      desc: "We create intuitive designs that users love.",
      icon: Edit3,
    },
    {
      step: "04",
      title: "Develop",
      desc: "We build robust, scalable and secure solutions.",
      icon: Code2,
    },
    {
      step: "05",
      title: "Deliver",
      desc: "We test, deploy and deliver great software on time.",
      icon: Rocket,
    },
    {
      step: "06",
      title: "Support",
      desc: "We provide ongoing support and continuous improvement.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-[#EEF4F8] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:text-left">
          <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
            A Collaborative Process
            <br />
            That Delivers Results
          </h2>
        </div>

        {/* 6 Step Horizontal Process */}
        <div className="relative">
          {/* Connector line for desktop - starts at first icon and ends at last icon */}
          <div className="hidden lg:block absolute top-6 left-[8.333%] right-[8.333%] h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 gap-y-10 relative z-10">
            {steps.map((proc, idx) => {
              const ProcessIcon = proc.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-3 relative"
                >
                  {/* Floating Icon Completely Outside & Above Card */}
                  <div className="w-12 h-12 rounded-full bg-white text-[#0E7C86] border border-slate-200 flex items-center justify-center shadow-md transition-all duration-300 z-10 group-hover:bg-[#0E7C86] group-hover:text-white group-hover:border-[#2CCFD3] group-hover:shadow-[0_0_22px_rgba(14,124,134,0.65),0_0_35px_rgba(44,207,211,0.45)] group-hover:-translate-y-1.5 group-hover:scale-110">
                    <ProcessIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* The Card */}
                  <div className="w-full flex-1 bg-[#F7F9FB] border border-slate-200 rounded-2xl p-5 text-center transition-all duration-300 shadow-sm group-hover:border-[#0E7C86] group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#0E7C86] font-mono mb-1">
                        {proc.step}
                      </div>
                      <h3 className="text-sm font-bold font-heading text-[#0B1623] mb-2">
                        {proc.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {proc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
