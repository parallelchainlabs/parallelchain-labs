"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../LanguageProvider";

export default function LeadershipTeam() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t.about.r1,
      role: t.about.empOrg,
      image: "/images/team_emp_1.jpg",
    },
    {
      name: t.about.r2,
      role: t.about.empOrg,
      image: "/images/team_emp_2.jpg",
    },
    {
      name: t.about.r3,
      role: t.about.empOrg,
      image: "/images/team_emp_3.jpg",
    },
    {
      name: t.about.r4,
      role: t.about.empOrg,
      image: "/images/team_emp_4.jpg",
    },
    {
      name: t.about.r5,
      role: t.about.empOrg,
      image: "/images/team_emp_5.jpg",
    },
    {
      name: t.about.r6,
      role: t.about.empOrg,
      image: "/images/team_emp_6.jpg",
    },
    {
      name: t.about.r7,
      role: t.about.empOrg,
      image: "/images/team_emp_7.jpg",
    },
    {
      name: t.about.r8,
      role: t.about.empOrg,
      image: "/images/team_emp_8.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  }, [teamMembers.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  }, [teamMembers.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getCardStyle = (index: number) => {
    const diff =
      (index - activeIndex + teamMembers.length) % teamMembers.length;

    if (diff === 0) {
      return {
        className:
          "z-30 scale-100 opacity-100 translate-x-0 cursor-default shadow-[0_20px_50px_rgba(14,124,134,0.25)]",
        isCenter: true,
      };
    }
    if (diff === 1) {
      return {
        className:
          "z-20 scale-[0.85] opacity-65 translate-x-[65%] sm:translate-x-[85%] md:translate-x-[105%] cursor-pointer hover:opacity-85 shadow-md",
        isCenter: false,
      };
    }
    if (diff === teamMembers.length - 1) {
      return {
        className:
          "z-20 scale-[0.85] opacity-65 -translate-x-[65%] sm:-translate-x-[85%] md:-translate-x-[105%] cursor-pointer hover:opacity-85 shadow-md",
        isCenter: false,
      };
    }
    if (diff === 2) {
      return {
        className:
          "z-10 scale-[0.7] opacity-0 translate-x-[140%] pointer-events-none",
        isCenter: false,
      };
    }
    return {
      className:
        "z-10 scale-[0.7] opacity-0 -translate-x-[140%] pointer-events-none",
      isCenter: false,
    };
  };

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-b from-[#F7F9FB] via-[#EEF4F8] to-[#F7F9FB] text-slate-900 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0E7C86]/10 blur-[130px] pointer-events-none -z-0 rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#2CCFD3]/10 blur-[100px] pointer-events-none -z-0 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-wider text-[#0B1623]">
            <span>{t.about.teamTitle1}</span>
            <span className="text-[#0E7C86]">{t.about.teamTitle2}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto">
            {t.about.teamDesc}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0E7C86] via-[#2CCFD3] to-[#0E7C86] rounded-full mx-auto mt-4" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[530px]">
          <button
            onClick={prevSlide}
            aria-label={t.about.prevMember}
            className="absolute left-1 sm:left-4 md:left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0E7C86] hover:text-white hover:border-[#0E7C86] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative w-full h-[450px] sm:h-[520px] flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {teamMembers.map((member, idx) => {
              const { className, isCenter } = getCardStyle(idx);
              return (
                <div
                  key={member.image}
                  onClick={() => !isCenter && setActiveIndex(idx)}
                  className={`absolute transition-all duration-500 ease-out transform ${className} w-[260px] sm:w-[310px] md:w-[340px] ${
                    isCenter
                      ? "h-[430px] sm:h-[490px] md:h-[510px]"
                      : "h-[350px] sm:h-[410px] md:h-[430px]"
                  }`}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#0B1623]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      className="object-cover object-top"
                      priority={idx === activeIndex}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E17]/95 via-[#070E17]/35 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className={`font-bold font-heading text-white tracking-tight ${
                            isCenter
                              ? "text-lg sm:text-xl"
                              : "text-sm sm:text-base"
                          }`}
                        >
                          {member.name}
                        </h3>
                        <a
                          href="https://www.linkedin.com/company/parallelchain-lab/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="ParallelChain Lab LinkedIn"
                          className="w-7 h-7 shrink-0 rounded-lg bg-white/15 text-white hover:bg-[#0E7C86] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <FaLinkedin className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs font-semibold text-[#2CCFD3] uppercase tracking-wider mt-1">
                        {member.role}
                      </p>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#0E7C86] to-[#2CCFD3] rounded-full mt-2.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            aria-label={t.about.nextMember}
            className="absolute right-1 sm:right-4 md:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0E7C86] hover:text-white hover:border-[#0E7C86] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {teamMembers.map((member, dotIdx) => (
            <button
              key={member.image}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`${t.about.nextMember} ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === dotIdx
                  ? "w-8 bg-[#0E7C86]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
