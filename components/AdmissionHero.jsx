"use client";

import React from "react";
import { Sparkles, CheckCircle, Bus, Home, GraduationCap, ShieldCheck } from "lucide-react";

export default function AdmissionHero({ onScrollToForm }) {
  return (
    <section className="relative w-full pt-6 pb-6 sm:pt-10 sm:pb-10 bg-gradient-to-b from-white via-slate-50/70 to-[#f8fafc] border-b border-slate-200/60 overflow-hidden text-center">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-gradient-to-b from-amber-100/20 via-indigo-50/15 to-transparent blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Improved Prestigious Session Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-emerald-500/10 border border-amber-300/70 shadow-xs backdrop-blur-md mb-3 sm:mb-4 transition-all duration-200 hover:border-amber-400 hover:shadow-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Sparkles size={13} className="text-amber-600 shrink-0" />
          <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
            Academic Session 2027–2028
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-xs sm:text-[13px] text-emerald-700 font-semibold hidden sm:inline">
            Admissions Open
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white ml-0.5 shadow-2xs">
            Live
          </span>
        </div>

        {/* Clean, Prestigious Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight sm:leading-snug max-w-2xl mx-auto">
          Online Student Admission Registration
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 max-w-xl mx-auto mt-2 sm:mt-2.5 leading-relaxed font-normal">
          Mahmud International School • Nursery to Class XII • Rupahi, Nagaon, Assam
        </p>

        {/* Key Highlights Micro-Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-3.5 sm:mt-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700">
            <GraduationCap size={13} className="text-indigo-600 shrink-0" />
            <span>Nursery to Class 12</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700">
            <Bus size={13} className="text-amber-600 shrink-0" />
            <span>GPS Bus Transport</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700">
            <Home size={13} className="text-blue-600 shrink-0" />
            <span>Boarding Hostel</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700">
            <CheckCircle size={13} className="text-emerald-600 shrink-0" />
            <span>Instant Digital Slip</span>
          </div>
        </div>
      </div>
    </section>
  );
}

