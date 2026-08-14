"use client";

import React from "react";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  Layout,
  Terminal,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  customPreview?: React.ReactNode;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "web-dev",
    icon: Code2,
    title: "Web Development",
    description:
      "We build fast, secure and scalable web applications using modern frameworks and best practices.",
    image: {
      src: "/images/finova_dashboard.png",
      alt: "Web Development Dashboard Mockup",
    },
    features: [
      "Custom Web Applications",
      "Enterprise Web Solutions",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless performance and great user experience.",
    image: {
      src: "/images/mediflow_app.png",
      alt: "Mobile App Development Mockup",
    },
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform (Flutter / React Native)",
    ],
  },
  {
    id: "uiux-design",
    icon: Layout,
    title: "UI/UX Design",
    description:
      "User-centered designs that are intuitive, engaging and aligned with your brand and business goals.",
    image: {
      src: "/images/shophub_platform.png",
      alt: "UI/UX Design Showcase Mockup",
    },
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "UI Design & Design Systems",
    ],
  },

  {
    id: "api-dev",
    icon: Terminal,
    title: "API Development",
    description:
      "Secure, well-documented and high-performance APIs to connect your applications and third-party services.",
    customPreview: (
      <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-[#0B1623] p-4 font-mono text-[11px] text-[#2CCFD3] border border-slate-800 flex items-center justify-center">
        <div>
          <div className="text-slate-400">{`// REST & GraphQL API`}</div>
          <div className="text-emerald-400">GET /api/v1/services 200 OK</div>
          <div className="text-white mt-1">{`{ "status": "success" }`}</div>
        </div>
      </div>
    ),
    features: [
      "RESTful API Development",
      "GraphQL API",
      "Third-party Integrations",
    ],
  },
  {
    id: "custom-software",
    icon: Cpu,
    title: "Custom Software",
    description:
      "Tailor-made software solutions built to solve complex business challenges and drive operational efficiency.",
    image: {
      src: "/images/finova_dashboard.png",
      alt: "Custom Enterprise Software Mockup",
    },
    features: [
      "Business Software",
      "SaaS Development",
      "Legacy System Modernization",
    ],
  },
];

interface ServiceCardsProps {
  onOpenConsultation: () => void;
}

export default function ServiceCards({
  onOpenConsultation,
}: ServiceCardsProps) {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[#0E7C86] text-xs font-bold tracking-wider uppercase font-heading">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1623] mt-2">
              End-to-End Digital Solutions
              <br />
              Tailored to Your Needs
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm leading-relaxed">
              From strategy and design to development and support, we offer a
              wide range of services to turn your ideas into powerful digital
              products.
            </p>
          </div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-[#0E7C86] hover:shadow-xl transition-all shadow-sm group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center mb-6 group-hover:bg-[#0E7C86] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B1623] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.image ? (
                    <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    service.customPreview
                  )}

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C86] hover:underline transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
