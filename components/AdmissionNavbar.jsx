"use client";

import React from "react";
import { GraduationCap, Phone, Search, Sparkles, ArrowRight } from "lucide-react";

export default function AdmissionNavbar({ onOpenTracker, onScrollToForm }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-purple-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* School Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md shadow-purple-950/20 border border-amber-400/30">
            <GraduationCap size={24} className="sm:size-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-tight">
                Mahmud International School
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                CBSE Affiliated
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-purple-700 font-semibold flex items-center gap-1.5 mt-0.5">
              <Sparkles size={11} className="text-amber-500 animate-pulse" />
              <span>Online Admissions 2026-2027</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenTracker}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-purple-950 hover:bg-purple-50/80 transition-all border border-slate-200/90 cursor-pointer"
          >
            <Search size={14} className="text-purple-600" />
            <span className="hidden sm:inline">Track Application</span>
            <span className="sm:hidden">Status</span>
          </button>

          <a
            href="tel:+919854012345"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Phone size={13} className="text-amber-600" />
            <span>Helpline: +91 98540 12345</span>
          </a>

          <button
            type="button"
            onClick={onScrollToForm}
            className="flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-950 via-indigo-900 to-purple-900 text-white shadow-md shadow-purple-950/20 hover:shadow-lg hover:shadow-purple-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
