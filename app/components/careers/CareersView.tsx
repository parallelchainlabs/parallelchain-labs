"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Paperclip,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import InquiryReceipt from "../InquiryReceipt";
import JobDetail from "./JobDetail";
import { submitInquiry } from "../../lib/submit-inquiry";
import {
  JOBS,
  JOB_PAGE_SIZE,
  jobCopy,
  type Job,
  type JobSlug,
} from "../../lib/jobs";

const fieldClass =
  "w-full px-4 py-3 bg-[#F7F9FB] border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0E7C86] focus:bg-white transition-all";

function postedLabel(
  postedAt: string,
  t: { postedToday: string; postedDays: string; postedWeeks: string },
) {
  const days = Math.max(
    0,
    Math.floor((Date.now() - new Date(`${postedAt}T00:00:00`).getTime()) / 86400000),
  );
  if (days <= 0) return t.postedToday;
  if (days < 7) return t.postedDays.replace("{n}", String(days));
  return t.postedWeeks.replace("{n}", String(Math.max(1, Math.floor(days / 7))));
}

export default function CareersView() {
  const { t, locale } = useLanguage();
  const [role, setRole] = useState<JobSlug | "other">("solidity-engineer");
  const [detailSlug, setDetailSlug] = useState<JobSlug | null>(null);
  const [page, setPage] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [compensation, setCompensation] = useState("");
  const [workModel, setWorkModel] = useState<string>(JOBS[0].workModel);
  const [employment, setEmployment] = useState<string>(JOBS[0].employment);
  const [availability, setAvailability] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [notice, setNotice] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const pages = Math.ceil(JOBS.length / JOB_PAGE_SIZE);
  const pageJobs = useMemo(
    () => JOBS.slice(page * JOB_PAGE_SIZE, page * JOB_PAGE_SIZE + JOB_PAGE_SIZE),
    [page],
  );

  const selectedJob = JOBS.find((job) => job.slug === role);
  const detailJob = detailSlug
    ? JOBS.find((job) => job.slug === detailSlug)
    : undefined;
  const roleTitle = selectedJob
    ? jobCopy(selectedJob, locale).title
    : t.careers.roleOther;

  const selectJob = (job: Job) => {
    setRole(job.slug);
    setWorkModel(job.workModel);
    setEmployment(job.employment);
    const jobPage = Math.floor(
      JOBS.findIndex((item) => item.slug === job.slug) / JOB_PAGE_SIZE,
    );
    setPage(jobPage);
  };

  const openDetail = (job: Job) => {
    selectJob(job);
    setDetailSlug(job.slug);
  };

  const resetForm = () => {
    setReference("");
    setDescription("");
    setCv(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const result = await submitInquiry(
      {
        kind: "career",
        name: fullName,
        email,
        phone,
        role: roleTitle,
        message: description,
        compensation,
        workModel,
        employment,
        city,
        linkedin,
        availability,
        portfolio,
        notice,
      },
      cv,
    );
    setSending(false);
    if (!result.ok || !result.reference) {
      setError(t.inquiry.error);
      return;
    }
    setReference(result.reference);
  };

  const modelLabel = (value: Job["workModel"]) =>
    value === "remote"
      ? t.careers.remote
      : value === "hybrid"
        ? t.careers.hybrid
        : t.careers.onsite;

  const employmentLabel = (value: Job["employment"]) =>
    value === "part-time" ? t.careers.partTime : t.careers.fullTime;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1623] pt-14 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-[#2CCFD3] text-xs font-bold tracking-wider uppercase">
            {t.careers.breadcrumb}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-3 leading-tight">
            {t.careers.title1}
            <br />
            {t.careers.title2}
          </h1>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            {t.careers.intro}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FB] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div
              id="career-apply"
              className="order-2 lg:order-1 lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24"
            >
              {reference ? (
                <InquiryReceipt
                  reference={reference}
                  name={fullName}
                  preview={`${roleTitle}\n${employment} · ${workModel}\n${compensation}\n${description}`}
                  onReset={resetForm}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#0B1623]">
                      {t.careers.applyTitle}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {t.careers.applyDesc}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.careers.roleLabel}
                    </label>
                    <select
                      required
                      value={role}
                      onChange={(e) => {
                        const next = e.target.value as JobSlug | "other";
                        setRole(next);
                        const job = JOBS.find((item) => item.slug === next);
                        if (job) openDetail(job);
                      }}
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      {JOBS.map((job) => (
                        <option key={job.slug} value={job.slug}>
                          {jobCopy(job, locale).title}
                        </option>
                      ))}
                      <option value="other">{t.careers.roleOther}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.fullName}
                      </label>
                      <input
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={t.contact.namePh}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.email}
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPh}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.phone}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+65 0000 0000"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.city}
                      </label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Singapore"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.workModel}
                      </label>
                      <select
                        required
                        value={workModel}
                        onChange={(e) => setWorkModel(e.target.value)}
                        className={`${fieldClass} appearance-none cursor-pointer`}
                      >
                        <option value="">{t.careers.selectModel}</option>
                        <option value="remote">{t.careers.remote}</option>
                        <option value="hybrid">{t.careers.hybrid}</option>
                        <option value="onsite">{t.careers.onsite}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.employment}
                      </label>
                      <select
                        required
                        value={employment}
                        onChange={(e) => setEmployment(e.target.value)}
                        className={`${fieldClass} appearance-none cursor-pointer`}
                      >
                        <option value="">{t.careers.selectEmployment}</option>
                        <option value="full-time">{t.careers.fullTime}</option>
                        <option value="part-time">{t.careers.partTime}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.compensation}
                      </label>
                      <input
                        required
                        value={compensation}
                        onChange={(e) => setCompensation(e.target.value)}
                        placeholder={t.careers.compensationPh}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.availability}
                      </label>
                      <input
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        placeholder={t.careers.availabilityPh}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.linkedin}
                      </label>
                      <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                        {t.careers.portfolio}
                      </label>
                      <input
                        type="url"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="https://github.com/..."
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.careers.notice}
                    </label>
                    <input
                      value={notice}
                      onChange={(e) => setNotice(e.target.value)}
                      placeholder={t.careers.availabilityPh}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.careers.description}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={t.careers.descriptionPh}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1623] mb-1.5">
                      {t.careers.cv}
                    </label>
                    <label className="flex items-center gap-3 px-4 py-3 bg-[#F7F9FB] border border-dashed border-slate-300 rounded-xl text-xs text-slate-600 cursor-pointer hover:border-[#0E7C86]">
                      <Paperclip className="w-4 h-4 text-[#0E7C86] shrink-0" />
                      <span className="truncate">
                        {cv
                          ? `${t.careers.cvChosen}: ${cv.name}`
                          : t.careers.cvHint}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="sr-only"
                        onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  </div>

                  {error ? <p className="text-xs text-red-600">{error}</p> : null}
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C86] text-white font-bold text-xs disabled:opacity-60"
                  >
                    {sending ? t.inquiry.sending : t.careers.apply}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <aside className="order-1 lg:order-2 lg:col-span-5">
              <div className="flex items-end justify-between gap-3 mb-4">
                <h2 className="text-2xl font-extrabold font-heading text-[#0B1623]">
                  {t.careers.openCount.replace("{n}", String(JOBS.length))}
                </h2>
                {!detailJob ? (
                  <span className="text-[11px] font-bold text-slate-500">
                    {t.careers.pageOf
                      .replace("{page}", String(page + 1))
                      .replace("{pages}", String(pages))}
                  </span>
                ) : null}
              </div>

              {detailJob ? (
                <JobDetail
                  job={detailJob}
                  posted={postedLabel(detailJob.postedAt, t.careers)}
                  modelLabel={modelLabel(detailJob.workModel)}
                  employmentLabel={employmentLabel(detailJob.employment)}
                  onBack={() => setDetailSlug(null)}
                  onApply={() => {
                    selectJob(detailJob);
                    document
                      .getElementById("career-apply")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                />
              ) : (
              <div className="space-y-3">
                {pageJobs.map((job) => {
                  const copy = jobCopy(job, locale);
                  const active = role === job.slug;
                  return (
                    <article
                      key={job.slug}
                      className={`w-full text-left rounded-2xl border p-4 transition-all ${
                        active
                          ? "border-[#0E7C86] bg-white shadow-lg"
                          : "border-slate-200 bg-white hover:border-[#0E7C86]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-bold font-heading text-[#0B1623]">
                            {copy.title}
                          </h3>
                          <p className="text-[11px] text-[#0E7C86] font-semibold mt-0.5">
                            {copy.team}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 shrink-0">
                          <Clock className="w-3 h-3" />
                          {postedLabel(job.postedAt, t.careers)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {copy.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F3F4F6] text-slate-600">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F3F4F6] text-slate-600">
                          <Briefcase className="w-3 h-3" />
                          {employmentLabel(job.employment)}
                        </span>
                        <span className="px-2 py-1 rounded-md bg-[#0E7C86]/10 text-[#0E7C86]">
                          {modelLabel(job.workModel)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => openDetail(job)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C86] hover:text-[#0B6871]"
                      >
                        {t.careers.viewDetails}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </article>
                  );
                })}
              </div>
              )}

              {!detailJob ? (
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.careers.prev}
                </button>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: pages }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPage(i)}
                      className={`h-8 min-w-8 px-2 rounded-lg text-xs font-bold ${
                        i === page
                          ? "bg-[#0E7C86] text-white"
                          : "bg-white border border-slate-200 text-slate-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={page >= pages - 1}
                  onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 disabled:opacity-40"
                >
                  {t.careers.next}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
