"use client";

import React from "react";
import { Search, ArrowRight } from "lucide-react";

export default function AdmissionNavbar({ onOpenTracker, onScrollToForm }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* School Logo & Title - Single Row, Zero Overflow */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-50 border border-slate-200 p-0.5 flex items-center justify-center shrink-0">
            <img
              src="/images/logo.png"
              alt="Mahmud International School Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight truncate block">
              Mahmud International School
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium truncate block leading-none mt-0.5">
              Online Admission • Session 2027-2028
            </span>
          </div>
        </div>

        {/* Action Controls - Compact & Aligned */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenTracker}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Search size={13} className="text-slate-500" />
            <span className="hidden sm:inline text-xs">Track Application</span>
            <span className="sm:hidden text-xs">Status</span>
          </button>

          <button
            type="button"
            onClick={onScrollToForm}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-2xs"
          >
            <span>Apply Now</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </header>
  );
}
