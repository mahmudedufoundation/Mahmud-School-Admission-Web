"use client";

import React from "react";
import { Sparkles, CheckCircle, Bus, Home, GraduationCap } from "lucide-react";

export default function AdmissionHero() {
  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 bg-white border-b border-slate-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Session Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-semibold mb-1.5">
          <Sparkles size={12} className="text-amber-600" />
          <span>Academic Session 2027-2028 Admissions Open</span>
        </div>

        {/* Clean, Prestigious Heading */}
        <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
          Online Student Admission Registration
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-0.5 leading-normal">
          Mahmud International School • Nursery to Class XII • Rupahi, Nagaon, Assam
        </p>

        {/* Compact Key Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2.5 text-[11px] sm:text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <GraduationCap size={13} className="text-slate-700" />
            <span>Nursery to Class 12</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1">
            <Bus size={13} className="text-slate-700" />
            <span>GPS Bus Transport</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1">
            <Home size={13} className="text-slate-700" />
            <span>Boarding Hostel</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle size={13} className="text-emerald-600" />
            <span>Instant Digital Slip</span>
          </span>
        </div>
      </div>
    </section>
  );
}
