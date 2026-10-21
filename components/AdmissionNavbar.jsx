"use client";

import React from "react";
import { Phone, Search, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdmissionNavbar({ onOpenTracker, onScrollToForm }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* School Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
            <img
              src="/images/logo.png"
              alt="Mahmud International School"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-tight">
                Mahmud International School
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Session 2026-2027
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-indigo-600 font-semibold flex items-center gap-1.5 mt-0.5">
              <ShieldCheck size={12} className="text-indigo-600" />
              <span>Official Online Admission Portal</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenTracker}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-700 bg-white hover:bg-slate-50 transition-colors border border-slate-300 shadow-xs cursor-pointer"
          >
            <Search size={14} className="text-slate-600" />
            <span className="hidden sm:inline">Track Application</span>
            <span className="sm:hidden">Status</span>
          </button>

          <a
            href="tel:+919854012345"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Phone size={13} className="text-slate-500" />
            <span>+91 98540 12345</span>
          </a>

          <button
            type="button"
            onClick={onScrollToForm}
            className="flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
