"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaMagento,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiKubernetes,
  SiFlutter,
  SiShopify,
  SiWoocommerce,
  SiWordpress,
  SiLaravel,
  SiStrapi,
} from "react-icons/si";

export default function TechMarqueeBar() {
  const techStack = [
    {
      name: "Shopify",
      icon: SiShopify,
      color: "text-[#7AB55C]",
      glowColor:
        "group-hover:border-[#7AB55C] group-hover:shadow-[0_0_25px_rgba(122,181,92,0.4)]",
    },
    {
      name: "Magento 2",
      icon: FaMagento,
      color: "text-[#EE672F]",
      glowColor:
        "group-hover:border-[#EE672F] group-hover:shadow-[0_0_25px_rgba(238,103,47,0.4)]",
    },
    {
      name: "WooCommerce",
      icon: SiWoocommerce,
      color: "text-[#96588A]",
      glowColor:
        "group-hover:border-[#96588A] group-hover:shadow-[0_0_25px_rgba(150,88,138,0.4)]",
    },
    {
      name: "WordPress",
      icon: SiWordpress,
      color: "text-[#21759B]",
      glowColor:
        "group-hover:border-[#21759B] group-hover:shadow-[0_0_25px_rgba(33,117,155,0.4)]",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "text-[#FF2D20]",
      glowColor:
        "group-hover:border-[#FF2D20] group-hover:shadow-[0_0_25px_rgba(255,45,32,0.4)]",
    },
    {
      name: "Strapi",
      icon: SiStrapi,
      color: "text-[#4945FF]",
      glowColor:
        "group-hover:border-[#4945FF] group-hover:shadow-[0_0_25px_rgba(73,69,255,0.4)]",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-[#61DAFB]",
      glowColor:
        "group-hover:border-[#61DAFB] group-hover:shadow-[0_0_25px_rgba(97,218,251,0.4)]",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      glowColor:
        "group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-[#3178C6]",
      glowColor:
        "group-hover:border-[#3178C6] group-hover:shadow-[0_0_25px_rgba(49,120,198,0.4)]",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-[#5FA04E]",
      glowColor:
        "group-hover:border-[#5FA04E] group-hover:shadow-[0_0_25px_rgba(95,160,78,0.4)]",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "text-[#3776AB]",
      glowColor:
        "group-hover:border-[#3776AB] group-hover:shadow-[0_0_25px_rgba(55,118,171,0.4)]",
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "text-[#FF9900]",
      glowColor:
        "group-hover:border-[#FF9900] group-hover:shadow-[0_0_25px_rgba(255,153,0,0.4)]",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "text-[#2496ED]",
      glowColor:
        "group-hover:border-[#2496ED] group-hover:shadow-[0_0_25px_rgba(36,150,237,0.4)]",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-[#4169E1]",
      glowColor:
        "group-hover:border-[#4169E1] group-hover:shadow-[0_0_25px_rgba(65,105,225,0.4)]",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-[#47A248]",
      glowColor:
        "group-hover:border-[#47A248] group-hover:shadow-[0_0_25px_rgba(71,162,72,0.4)]",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-[#06B6D4]",
      glowColor:
        "group-hover:border-[#06B6D4] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "text-[#326CE5]",
      glowColor:
        "group-hover:border-[#326CE5] group-hover:shadow-[0_0_25px_rgba(50,108,229,0.4)]",
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "text-[#02569B]",
      glowColor:
        "group-hover:border-[#02569B] group-hover:shadow-[0_0_25px_rgba(2,86,155,0.4)]",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "text-[#F24E1E]",
      glowColor:
        "group-hover:border-[#F24E1E] group-hover:shadow-[0_0_25px_rgba(242,78,30,0.4)]",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-[#F05032]",
      glowColor:
        "group-hover:border-[#F05032] group-hover:shadow-[0_0_25px_rgba(240,80,50,0.4)]",
    },
  ];

  // Tripled list for infinite seamless marquee loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-6 sm:py-8 bg-[#070E17] text-white border-y border-slate-800/80 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-36 bg-[#0E7C86]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-36 bg-[#2CCFD3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7C86]/10 border border-[#0E7C86]/30 text-[#2CCFD3] text-[11px] font-mono font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#2CCFD3] animate-pulse" />
          <span>TECHNOLOGY STACK</span>
        </div>
      </div>

      {/* Marquee Track Container with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#070E17] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#070E17] to-transparent z-10 pointer-events-none" />

        {/* Infinite Scrolling Row */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
          {marqueeItems.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center gap-2 shrink-0 cursor-pointer"
              >
                {/* Bigger Completely Round Circular Logo Bubble */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0B1623] border-2 border-slate-800/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${tech.glowColor}`}
                >
                  <IconComp
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                {/* Tech Stack Name Below Logo */}
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
