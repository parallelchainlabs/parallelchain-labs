"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";
import { submitInquiry } from "../lib/submit-inquiry";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const result = await submitInquiry({
      kind: "updates",
      name: "Updates request",
      email,
      message: `Please add this address to lab updates: ${email}`,
    });
    if (!result.ok) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 6000);
  };

  return (
    <footer className="bg-[#070E17] text-slate-300 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Multi-Column Layout matching Reference Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-5 lg:pr-6 lg:border-r border-slate-800/60">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo/parallelchain-lab.png"
                alt="ParallelChain Lab"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-contain bg-white"
              />
              <span className="text-xl font-bold font-heading text-white">
                ParallelChain<span className="text-[#2CCFD3]"> Lab</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.footer.blurb}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/parallelchain-lab/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 hover:border-[#2CCFD3] hover:bg-[#0E7C86] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>
              <a
                href="https://github.com/parallelchain-io"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 hover:border-[#2CCFD3] hover:bg-[#0E7C86] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a
                href="https://x.com/ParallelChainLB"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 hover:border-[#2CCFD3] hover:bg-[#0E7C86] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links & Contact Info (Col span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pl-0 lg:pl-4">
            {/* Company */}
            <div>
              <h3 className="text-xs font-bold text-[#2CCFD3] tracking-wider uppercase mb-4 font-heading border-b border-[#2CCFD3]/30 pb-1.5 inline-block">
                {t.footer.company}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#team"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.team}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.careers}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.cases}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-bold text-[#2CCFD3] tracking-wider uppercase mb-4 font-heading border-b border-[#2CCFD3]/30 pb-1.5 inline-block">
                {t.footer.services}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link
                    href="/services#dapps-protocols"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.nav.dapps}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#digital-identity"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.nav.identity}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#defi"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.nav.defi}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ai-infrastructure"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.nav.ai}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.platforms}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold text-[#2CCFD3] tracking-wider uppercase mb-4 font-heading border-b border-[#2CCFD3]/30 pb-1.5 inline-block">
                {t.footer.legal}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#2CCFD3] transition-colors"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="col-span-2 sm:col-span-1 border-l border-slate-800/80 pl-4">
              <h3 className="text-xs font-bold text-[#2CCFD3] tracking-wider uppercase mb-4 font-heading border-b border-[#2CCFD3]/30 pb-1.5 inline-block">
                {t.footer.getInTouch}
              </h3>
              <ul className="space-y-3 text-xs font-medium">
                <li className="flex items-start gap-2.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#2CCFD3] shrink-0 mt-0.5" />
                  <span>
                    100 Tras Street, #16-01, 100 AM
                    <br />
                    Singapore 079027
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <Phone className="w-4 h-4 text-[#2CCFD3] shrink-0" />
                  <a
                    href="tel:+85223256667"
                    className="hover:text-white transition-colors"
                  >
                    +852 2325 6667
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <Mail className="w-4 h-4 text-[#2CCFD3] shrink-0" />
                  <a
                    href="mailto:hiring@parallelchain-lab.com"
                    className="hover:text-white transition-colors"
                  >
                    hiring@parallelchain-lab.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <FaTelegram className="w-4 h-4 text-[#2CCFD3] shrink-0" />
                  <a
                    href="https://t.me/hiring_parallelchainlab"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @hiring_parallelchainlab
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Bar ("Stay in the Loop") */}
        <div className="bg-[#0B1623] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0E7C86]/20 text-[#2CCFD3] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-white">
                {t.footer.stayLoop}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.footer.stayLoopDesc}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto"
          >
            {!subscribed ? (
              <>
                <input
                  type="email"
                  required
                  placeholder={t.footer.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-72 px-4 py-3 bg-[#162533] border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#2CCFD3] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C86] hover:bg-[#2CCFD3] hover:text-[#0B1623] text-white font-bold text-xs transition-all shadow-md shrink-0"
                >
                  <span>{t.footer.subscribe}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-[#16A34A] bg-[#16A34A]/10 border border-[#16A34A]/30 px-5 py-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.footer.subscribed}</span>
              </div>
            )}
          </form>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-800/40">
          <p>{t.footer.copyright}</p>

          <div className="flex items-center gap-2 text-slate-400">
            <Heart className="w-3.5 h-3.5 text-[#2CCFD3] fill-[#2CCFD3] inline" />
            <span>{t.footer.builtWith}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#2CCFD3]" />
            <span>{t.footer.dataSafe}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
