"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Cpu,
  Blocks,
  Fingerprint,
  Landmark,
  BrainCircuit,
  Layers,
  Home as HomeIcon,
  Briefcase,
  Users,
  Mail,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070E17]/95 backdrop-blur-lg border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo/parallelchain-lab.png"
            alt="ParallelChain Lab"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg object-contain bg-white"
            priority
          />
          <span className="text-lg lg:text-2xl font-bold font-heading tracking-tight text-white">
            ParallelChain<span className="text-[#2CCFD3]"> Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
              isActive("/")
                ? "text-[#2CCFD3] bg-[#0E7C86]/10"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            {t.nav.home}
            {isActive("/") && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2CCFD3] rounded-full" />
            )}
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-all relative ${
                isActive("/services")
                  ? "text-[#2CCFD3] bg-[#0E7C86]/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              <span>{t.nav.services}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#2CCFD3]" : ""}`}
              />
              {isActive("/services") && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2CCFD3] rounded-full" />
              )}
            </Link>

            {/* Dropdown Panel matching Reference Design */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-[480px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0B1623] border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl grid grid-cols-12 gap-4">
                  {/* Left Column Services List */}
                  <div className="col-span-7 space-y-1">
                    <Link
                      href="/services#dapps-protocols"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#0E7C86]/20 text-slate-300 hover:text-white transition-colors group"
                    >
                      <Blocks className="w-4 h-4 text-[#2CCFD3] group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">
                        {t.nav.dapps}
                      </span>
                    </Link>

                    <Link
                      href="/services#digital-identity"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#0E7C86]/20 text-slate-300 hover:text-white transition-colors group"
                    >
                      <Fingerprint className="w-4 h-4 text-[#2CCFD3] group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">
                        {t.nav.identity}
                      </span>
                    </Link>

                    <Link
                      href="/services#defi"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#0E7C86]/20 text-slate-300 hover:text-white transition-colors group"
                    >
                      <Landmark className="w-4 h-4 text-[#2CCFD3] group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">
                        {t.nav.defi}
                      </span>
                    </Link>

                    <Link
                      href="/services#ai-infrastructure"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#0E7C86]/20 text-slate-300 hover:text-white transition-colors group"
                    >
                      <BrainCircuit className="w-4 h-4 text-[#2CCFD3] group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">
                        {t.nav.ai}
                      </span>
                    </Link>
                  </div>

                  {/* Right Column Custom Solutions Promo Card */}
                  <div className="col-span-5 bg-[#162533]/90 border border-slate-700/60 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center mb-3">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1.5 font-heading">
                        {t.nav.web2web3}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                        {t.nav.web2web3Desc}
                      </p>
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2CCFD3] hover:text-white transition-colors"
                    >
                      <span>{t.nav.exploreServices}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
              isActive("/portfolio")
                ? "text-[#2CCFD3] bg-[#0E7C86]/10"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            {t.nav.portfolio}
            {isActive("/portfolio") && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2CCFD3] rounded-full" />
            )}
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
              isActive("/about")
                ? "text-[#2CCFD3] bg-[#0E7C86]/10"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            {t.nav.about}
            {isActive("/about") && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2CCFD3] rounded-full" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
              isActive("/contact")
                ? "text-[#2CCFD3] bg-[#0E7C86]/10"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            {t.nav.contact}
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2CCFD3] rounded-full" />
            )}
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[#2CCFD3]/20"
          >
            <span>{t.nav.book}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label={t.nav.toggleMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Layout matching Reference Design */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070E17] border-b border-slate-800 px-6 pt-4 pb-8 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive("/")
                  ? "bg-[#0E7C86]/20 border-[#2CCFD3] text-[#2CCFD3]"
                  : "bg-[#162533] border-slate-700/60 text-slate-200 hover:text-white"
              }`}
            >
              <HomeIcon className="w-5 h-5 text-[#2CCFD3]" />
              <span className="text-sm font-semibold">{t.nav.home}</span>
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive("/services")
                  ? "bg-[#0E7C86]/20 border-[#2CCFD3] text-[#2CCFD3]"
                  : "bg-[#162533] border-slate-700/60 text-slate-200 hover:text-white"
              }`}
            >
              <Cpu className="w-5 h-5 text-[#2CCFD3]" />
              <span className="text-sm font-semibold">{t.nav.services}</span>
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive("/portfolio")
                  ? "bg-[#0E7C86]/20 border-[#2CCFD3] text-[#2CCFD3]"
                  : "bg-[#162533] border-slate-700/60 text-slate-200 hover:text-white"
              }`}
            >
              <Briefcase className="w-5 h-5 text-[#2CCFD3]" />
              <span className="text-sm font-semibold">{t.nav.portfolio}</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive("/about")
                  ? "bg-[#0E7C86]/20 border-[#2CCFD3] text-[#2CCFD3]"
                  : "bg-[#162533] border-slate-700/60 text-slate-200 hover:text-white"
              }`}
            >
              <Users className="w-5 h-5 text-[#2CCFD3]" />
              <span className="text-sm font-semibold">{t.nav.about}</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive("/contact")
                  ? "bg-[#0E7C86]/20 border-[#2CCFD3] text-[#2CCFD3]"
                  : "bg-[#162533] border-slate-700/60 text-slate-200 hover:text-white"
              }`}
            >
              <Mail className="w-5 h-5 text-[#2CCFD3]" />
              <span className="text-sm font-semibold">{t.nav.contact}</span>
            </Link>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenConsultation) onOpenConsultation();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white text-sm font-bold transition-all shadow-lg"
          >
            <span>{t.nav.book}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
