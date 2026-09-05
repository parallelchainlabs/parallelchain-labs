"use client";

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { jobCopy, type Job } from "../../lib/jobs";

export default function JobDetail({
  job,
  posted,
  modelLabel,
  employmentLabel,
  onBack,
  onApply,
}: {
  job: Job;
  posted: string;
  modelLabel: string;
  employmentLabel: string;
  onBack: () => void;
  onApply: () => void;
}) {
  const { t, locale } = useLanguage();
  const copy = jobCopy(job, locale);
  const whatYouDo = copy.features.slice(0, 3);
  const whatYouBring = copy.features.slice(3);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1623] text-white text-xs font-bold hover:bg-[#162533]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.careers.backToJobs}
        </button>
        <button
          type="button"
          onClick={onApply}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0E7C86] hover:bg-[#0B6871] text-white text-xs font-bold"
        >
          {t.careers.applyThis}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="inline-block px-2.5 py-1 rounded-md bg-[#0B1623] text-white text-[10px] font-bold uppercase tracking-wider">
        {copy.team}
      </span>
      <h3 className="text-2xl font-extrabold font-heading text-[#0B1623] mt-3 leading-tight">
        {copy.title}
      </h3>

      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold">
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F3F4F6] text-slate-600">
          <Clock className="w-3 h-3" />
          {posted}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F3F4F6] text-slate-600">
          <MapPin className="w-3 h-3" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F3F4F6] text-slate-600">
          <Briefcase className="w-3 h-3" />
          {employmentLabel}
        </span>
        <span className="px-2 py-1 rounded-md bg-[#0E7C86]/10 text-[#0E7C86]">
          {modelLabel}
        </span>
      </div>

      <section className="mt-5">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          {t.careers.aboutRole}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">{copy.summary}</p>
      </section>

      <section className="mt-5">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          {t.careers.whatYouDo}
        </h4>
        <ul className="space-y-2">
          {whatYouDo.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {whatYouBring.length > 0 ? (
        <section className="mt-5">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            {t.careers.whatYouBring}
          </h4>
          <ul className="space-y-2">
            {whatYouBring.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-5 rounded-2xl bg-[#F7F9FB] border border-slate-200 p-4">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          {t.careers.howWeWork}
        </h4>
        <dl className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <dt className="text-slate-400 font-semibold">{t.careers.posted}</dt>
            <dd className="text-[#0B1623] font-bold mt-0.5">{posted}</dd>
          </div>
          <div>
            <dt className="text-slate-400 font-semibold">{t.careers.team}</dt>
            <dd className="text-[#0B1623] font-bold mt-0.5">{copy.team}</dd>
          </div>
          <div>
            <dt className="text-slate-400 font-semibold">{t.careers.workModel}</dt>
            <dd className="text-[#0B1623] font-bold mt-0.5">{modelLabel}</dd>
          </div>
          <div>
            <dt className="text-slate-400 font-semibold">{t.careers.employment}</dt>
            <dd className="text-[#0B1623] font-bold mt-0.5">{employmentLabel}</dd>
          </div>
        </dl>
      </section>

      <button
        type="button"
        onClick={onApply}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0E7C86] hover:bg-[#0B6871] text-white font-bold text-sm"
      >
        {t.careers.applyThis}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
