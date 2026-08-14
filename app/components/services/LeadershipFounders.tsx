"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { CheckCircle2, Quote } from "lucide-react";

export default function LeadershipFounders() {
  return (
    <section
      id="leadership"
      className="py-24 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden"
    >
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E7C86]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2CCFD3]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-900">
              <Image
                src="/images/leader_aayush.png"
                alt="Aayush Gupta - Founder & CEO"
                fill
                unoptimized
                sizes="(max-width: 1024px) 380px, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/85 via-transparent to-transparent" />

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-xl text-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-base font-extrabold font-heading text-[#0B1623]">
                    Aayush Gupta
                  </div>
                  <div className="text-xs font-bold text-[#0E7C86] mt-0.5">
                    Founder & CEO
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/ayush-gupta-5ba1ba220/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Aayush Gupta LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#0E7C86]/10 text-[#0E7C86] hover:bg-[#0E7C86] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Vision & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
                FOUNDER'S VISION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B1623] mt-2">
                Building Scalable Digital Products with Purpose
              </h2>
            </div>

            {/* Quote callout */}
            <div className="relative pl-5 border-l-4 border-[#0E7C86] py-1">
              <Quote className="w-6 h-6 text-[#0E7C86]/30 absolute -top-2 -left-1" />
              <p className="text-sm sm:text-base font-medium text-slate-700 italic leading-relaxed">
                "At JitSeeTec, our mission is simple: transform ambitious
                ideas into resilient, high-performance technology that
                empowers businesses to scale with absolute confidence."
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              As Founder & CEO, Aayush drives strategy, product innovation,
              and technical direction across all client engagements. With a
              deep focus on modern engineering standards and client-centric
              execution, he ensures that every product delivered by JitSeeTec
              combines elegant design with robust architecture.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strategic Technology Roadmaps",
                "Modern Full-Stack Architecture",
                "Enterprise-Grade Scalability",
                "Client-First Delivery Culture",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Sign-off & Social Connect */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xl font-serif italic font-bold text-[#0B1623]">
                  Aayush Gupta
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Founder & Chief Executive Officer, JitSeeTec
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/ayush-gupta-5ba1ba220/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white text-xs font-bold transition-all shadow-md shadow-[#0E7C86]/20"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
