"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Phone,
  GraduationCap,
  HelpCircle,
  FileText,
  Shield,
} from "lucide-react";

export default function AdmissionNavbar({ onOpenTracker, onScrollToForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleApplyClick = () => {
    setMobileMenuOpen(false);
    if (onScrollToForm) {
      onScrollToForm();
    } else if (typeof window !== "undefined") {
      window.location.href = "/#admission-wizard-card";
    }
  };

  const handleScrollToFaq = () => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      const el = document.getElementById("admission-faq-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#admission-faq-section";
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* School Logo & Title */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group cursor-pointer">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-200 p-0.5 flex items-center justify-center shrink-0 group-hover:border-slate-300 transition-colors">
            <img
              src="/images/logo.png"
              alt="Mahmud International School Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="shrink-0">
            <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight whitespace-nowrap block group-hover:text-slate-800">
              Mahmud International School
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium whitespace-nowrap block leading-none mt-0.5">
              Online Admission • Session 2027–2028
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-[13px] font-semibold text-slate-600">
          <a
            href="https://www.misrupahi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 group py-1.5 whitespace-nowrap"
          >
            <span>Main Website</span>
            <ExternalLink size={12} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
          </a>
          <button
            type="button"
            onClick={handleScrollToFaq}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1.5 whitespace-nowrap"
          >
            Eligibility & Matrix
          </button>
          <button
            type="button"
            onClick={handleScrollToFaq}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1.5 whitespace-nowrap"
          >
            Bus & Hostel
          </button>
          <button
            type="button"
            onClick={handleScrollToFaq}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1.5 whitespace-nowrap"
          >
            FAQs
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {onOpenTracker && (
            <button
              type="button"
              onClick={onOpenTracker}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Search size={13} className="text-slate-500" />
              <span className="hidden sm:inline text-xs font-semibold">Track Status</span>
              <span className="sm:hidden text-xs font-semibold">Track</span>
            </button>
          )}

          {/* Apply Now button: Visible on tablet/desktop, hidden on mobile since user is already on admission form */}
          <button
            type="button"
            onClick={handleApplyClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
          >
            <span>Apply Now</span>
            <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 text-xs font-medium text-slate-700">
            <a
              href="https://www.misrupahi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-900 font-semibold"
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={14} className="text-indigo-600" />
                <span>Visit Main School Website (misrupahi.com)</span>
              </span>
              <ExternalLink size={12} className="text-slate-400" />
            </a>

            <button
              type="button"
              onClick={handleScrollToFaq}
              className="w-full flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left"
            >
              <GraduationCap size={14} className="text-slate-500" />
              <span>Class Eligibility & Age Matrix</span>
            </button>

            <button
              type="button"
              onClick={handleScrollToFaq}
              className="w-full flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left"
            >
              <HelpCircle size={14} className="text-slate-500" />
              <span>Admission FAQs & Guidelines</span>
            </button>

            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <FileText size={14} className="text-slate-500" />
              <span>Terms & Admission Conditions</span>
            </Link>

            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Shield size={14} className="text-slate-500" />
              <span>Student Data Privacy Policy</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
            <a
              href="tel:+919854012345"
              className="flex items-center gap-1.5 text-slate-600 font-semibold p-2 hover:text-slate-900 transition-colors"
            >
              <Phone size={13} className="text-emerald-600" />
              <span>Helpline: +91 98540 12345</span>
            </a>

            <button
              type="button"
              onClick={handleApplyClick}
              className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg font-semibold shadow-2xs hover:bg-slate-800 transition-colors"
            >
              Start Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

