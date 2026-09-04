"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { useLanguage } from "../LanguageProvider";
import { openLabMailto } from "../../lib/mailto";

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    agreePrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreePrivacy) {
      alert(t.contact.privacyAlert);
      return;
    }
    openLabMailto(
      `Inquiry from ${form.fullName || "website"}`,
      [
        `Name: ${form.fullName}`,
        `Email: ${form.email}`,
        `Company: ${form.company || "—"}`,
        `Phone: ${form.phone || "—"}`,
        `Service: ${form.service || "—"}`,
        `Engagement: ${form.budget || "—"}`,
        `Timeline: ${form.timeline || "—"}`,
        "",
        form.message,
      ].join("\n"),
    );
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F7F9FB] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Form Card ("Send Us a Message") */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1623] mb-2">
              {t.contact.sendTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              {t.contact.sendDesc}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      placeholder={t.contact.namePh}
                      className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder={t.contact.emailPh}
                      className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder={t.contact.companyPh}
                      className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+977 98000 00000"
                      className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                    {t.contact.service}
                  </label>
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t.contact.selectService}</option>
                      <option value="dapps-protocols">{t.nav.dapps}</option>
                      <option value="digital-identity">{t.nav.identity}</option>
                      <option value="defi">{t.nav.defi}</option>
                      <option value="ai-infrastructure">{t.nav.ai}</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.budget}
                    </label>
                    <div className="relative">
                      <select
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">{t.contact.selectBudget}</option>
                        <option value="Research discussion">
                          {t.contact.budgetLt5}
                        </option>
                        <option value="Pilot">{t.contact.budget5to15}</option>
                        <option value="Production deployment">
                          {t.contact.budget15to30}
                        </option>
                        <option value="Not sure yet">{t.contact.budget30}</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.contact.timeline}
                    </label>
                    <div className="relative">
                      <select
                        value={form.timeline}
                        onChange={(e) =>
                          setForm({ ...form, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">{t.contact.selectTimeline}</option>
                        <option value="urgent">{t.contact.timeUrgent}</option>
                        <option value="1-3months">{t.contact.time13}</option>
                        <option value="3-6months">{t.contact.time36}</option>
                        <option value="flexible">{t.contact.timeFlex}</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 5: Project Details Textarea */}
                <div>
                  <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                    {t.contact.details}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={t.contact.detailsPh}
                    className="w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    checked={form.agreePrivacy}
                    onChange={(e) =>
                      setForm({ ...form, agreePrivacy: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-[#0E7C86] focus:ring-[#0E7C86] accent-[#0E7C86] cursor-pointer"
                  />
                  <label
                    htmlFor="agreePrivacy"
                    className="text-xs text-slate-600 cursor-pointer"
                  >
                    {t.contact.agree}{" "}
                    <Link
                      href="/privacy"
                      className="text-[#0E7C86] underline font-medium"
                    >
                      {t.contact.privacy}
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0E7C86] hover:bg-[#0B6871] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{t.contact.send}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0B1623]">
                  {t.contact.sentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {t.contact.sentDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0E7C86] text-white font-bold text-xs rounded-xl hover:bg-[#0B6871] transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            )}
          </div>

          {/* Right Column Sidebar ("Get in Touch") */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#0B1623] mb-2">
                {t.contact.getInTouch}
              </h2>
              <p className="text-xs text-slate-600 mb-8">
                {t.contact.getInTouchDesc}
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1623]">
                      {t.contact.location}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      100 Tras Street, #16-01, 100 AM
                      <br />
                      Singapore 079027
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1623]">
                      {t.contact.phoneLabel}
                    </div>
                    <a
                      href="tel:+85223256667"
                      className="text-xs text-slate-600 hover:text-[#0E7C86] mt-0.5 block font-medium"
                    >
                      +852 2325 6667
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1623]">
                      {t.contact.emailLabel}
                    </div>
                    <a
                      href="mailto:info@parallelchain-labs.io"
                      className="text-xs text-slate-600 hover:text-[#0E7C86] mt-0.5 block font-medium"
                    >
                      info@parallelchain-labs.io
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center shrink-0">
                    <FaTelegram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1623]">
                      {t.contact.telegram}
                    </div>
                    <a
                      href="https://t.me/InfoParallelChainLabs"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-600 hover:text-[#0E7C86] mt-0.5 block font-medium"
                    >
                      @InfoParallelChainLabs
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0E7C86]/10 text-[#0E7C86] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1623]">
                      {t.contact.hours}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {t.contact.hoursValue}
                      <br />
                      {t.contact.hoursTz}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
