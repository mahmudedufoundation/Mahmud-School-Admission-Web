"use client";

import React from "react";
import {
  Award,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  SCAT_REGISTRATION_URL,
  SCHOOL_HELPLINE_DISPLAY,
  SCHOOL_HELPLINE_TEL,
} from "@/lib/constants";

const SCAT_HIGHLIGHTS = [
  {
    icon: Award,
    iconBg: "bg-amber-50 text-amber-700 border-amber-200/80",
    title: "Merit Scholarships",
    description: "Scholarships up to ₹ 1,50,000/- for meritorious students (Session 2027–28).",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    title: "Eligible Wings & Classes",
    description: "Hifz-ul-Qur'an (Hafizi), Quantum Wing (IV–V), Foundation (VI–VIII) & Class XI.",
  },
  {
    icon: MapPin,
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    title: "Exam & Instant Admit Card",
    description: "Offline exam at Rupahi Campus with online registration & instant admit card.",
  },
];

export default function ScatRedirectCard() {
  return (
    <div id="admission-wizard-card" className="w-full max-w-4xl mx-auto px-3 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Status Header Bar */}
        <div className="bg-gradient-to-r from-slate-50 via-amber-50/40 to-emerald-50/40 border-b border-slate-200/80 px-4 py-3.5 sm:px-7 sm:py-4 flex flex-wrap items-center justify-between gap-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700">
            <CalendarClock size={15} className="text-amber-600 shrink-0" />
            <span>Regular Admission Form (2027–2028) — Opening Soon</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-2xs shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            <span>SCAT 2026 Registration Live</span>
          </span>
        </div>

        {/* Main Card Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-7">
          {/* Primary Notice & Headline */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-900 text-[11px] sm:text-xs font-bold">
              <Award size={13} className="text-amber-600 shrink-0" />
              <span>Scholarship cum Admission Test • SCAT 2026</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Apply for SCAT 2026 Exam Registration
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Regular online admissions for Session 2027–2028 have not started yet. Currently,
              students are being registered for the{" "}
              <strong className="font-semibold text-slate-900">
                Scholarship cum Admission Test (SCAT 2026)
              </strong>{" "}
              on our official school website.
            </p>
          </div>

          {/* 3 Compact Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {SCAT_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2"
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.iconBg}`}
                  >
                    <Icon size={17} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1">
            <a
              href={SCAT_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Register for SCAT 2026 Exam</span>
              <ArrowUpRight size={17} className="shrink-0" />
            </a>

            <a
              href={SCHOOL_HELPLINE_TEL}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold border border-slate-200/80 transition-colors"
            >
              <Phone size={15} className="text-emerald-600 shrink-0" />
              <span>Helpline: {SCHOOL_HELPLINE_DISPLAY}</span>
            </a>
          </div>

          {/* Secondary Main Website Link */}
          <div className="text-center">
            <a
              href="https://www.misrupahi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span>Or visit official website (misrupahi.com)</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Bottom Reassurance Strip */}
        <div className="bg-slate-50/90 border-t border-slate-200/80 px-4 py-3 sm:px-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 text-center sm:text-left">
            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
            <span>
              Regular admission portal (Nursery to Class XII) will reopen right here once dates are announced.
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-slate-500 font-medium shrink-0">
            <ShieldCheck size={13} className="text-slate-400" />
            <span>Official MIS Portal</span>
          </span>
        </div>
      </div>
    </div>
  );
}
