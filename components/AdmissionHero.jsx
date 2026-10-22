"use client";

import React from "react";
import { CheckCircle, Bus, Home, GraduationCap } from "lucide-react";

// Custom Handcrafted Academic Crest Emblem Icon (Replaces standard 3-star icon)
function AcademicCrestIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crestGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="crestInnerGlow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Outer Royal Shield */}
      <path
        d="M12 2L4.5 4.8V11.5C4.5 16.2 7.7 20.6 12 22C16.3 20.6 19.5 16.2 19.5 11.5V4.8L12 2Z"
        fill="url(#crestInnerGlow)"
        stroke="url(#crestGoldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Embossed Graduation Cap Motif */}
      <path
        d="M12 7L7 9.5L12 12L17 9.5L12 7Z"
        fill="url(#crestGoldGradient)"
      />
      <path
        d="M9.5 11.2V14.2C9.5 15.2 10.6 16.2 12 16.2C13.4 16.2 14.5 15.2 14.5 14.2V11.2"
        stroke="url(#crestGoldGradient)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Tassel line */}
      <path
        d="M16.5 10.2V14"
        stroke="url(#crestGoldGradient)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AdmissionHero({ onScrollToForm }) {
  return (
    <section className="relative w-full pt-6 pb-6 sm:pt-10 sm:pb-10 bg-gradient-to-b from-white via-slate-50/70 to-[#f8fafc] border-b border-slate-200/60 overflow-hidden text-center">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-gradient-to-b from-amber-100/25 via-indigo-50/15 to-transparent blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Ultra-Premium Session Badge with Custom Crest Icon */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-50/95 via-white to-emerald-50/95 border border-amber-300/80 shadow-[0_2px_14px_-3px_rgba(245,158,11,0.22)] backdrop-blur-md mb-3 sm:mb-4 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_4px_18px_-2px_rgba(245,158,11,0.32)] hover:scale-[1.01]">
          {/* Custom Crest Emblem */}
          <div className="w-5 h-5 rounded-full bg-amber-100/80 border border-amber-300/60 flex items-center justify-center shrink-0 shadow-2xs">
            <AcademicCrestIcon className="w-3.5 h-3.5" />
          </div>

          {/* Session Title */}
          <span className="text-xs sm:text-[13px] font-black text-amber-950 tracking-tight whitespace-nowrap">
            Academic Session 2027–2028
          </span>

          <span className="text-amber-300 font-bold hidden sm:inline select-none">•</span>

          <span className="text-xs sm:text-[13px] text-slate-800 font-bold hidden sm:inline whitespace-nowrap">
            Admissions Open
          </span>

          {/* Live Pulsing Status Pill */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs ml-0.5 whitespace-nowrap shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            <span>Live</span>
          </span>
        </div>


        {/* Clean, Prestigious Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight sm:leading-snug max-w-3xl mx-auto">
          Online Student Admission Registration 2027–2028
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 max-w-xl mx-auto mt-2 sm:mt-2.5 leading-relaxed font-normal">
          Mahmud International School • English Medium • Nursery to Class XII • Rupahi, Nagaon (Assam)
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

