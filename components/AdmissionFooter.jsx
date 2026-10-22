"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Bus,
  Home,
  CheckCircle2,
} from "lucide-react";

export default function AdmissionFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-10 sm:mt-16 border-t border-slate-200 bg-white pt-10 sm:pt-14 pb-8 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Col 1: School Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Mahmud International School"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 leading-tight">
                  Mahmud International School
                </h3>
                <p className="text-[10px] text-indigo-700 font-semibold tracking-wide uppercase">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Committed to academic rigour, moral values, and 360° student development in Rupahi, Nagaon, Assam.
            </p>
            <div className="pt-1 flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-600">
              <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                Nursery - Class XII
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                English Medium
              </span>
            </div>
          </div>

          {/* Col 2: Main Website Links (misrupahi.com) */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span>Main Website</span>
              <ExternalLink size={11} className="text-slate-400" />
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.misrupahi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>School Portal Home</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.misrupahi.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>About Campus & Vision</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.misrupahi.com/academics-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>Academic Curriculum</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.misrupahi.com/infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>Labs & Infrastructure</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.misrupahi.com/faculty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>Faculty Directory</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.misrupahi.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                >
                  <span>Student & Staff Login</span>
                  <ExternalLink size={10} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Facilities */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Admissions 2027–2028
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-left"
                >
                  Apply Online (Step 1-5)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("admission-faq-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-left"
                >
                  Class Eligibility & Age Matrix
                </button>
              </li>
              <li>
                <Link
                  href="/admission-rupahi"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Best School in Rupahi
                </Link>
              </li>
              <li>
                <Link
                  href="/class-11-admission-rupahi"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Class 11 Science & Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/school-bus-routes-rupahi"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GPS Bus Routes (Rupahi & Nagaon)
                </Link>
              </li>
              <li>
                <Link
                  href="/hostel-school-rupahi"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Residential Boarding & Hostel
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Document Verification Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Student Data Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Visiting Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Admissions Office
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Rupahi Town, Near BDO Office, Nagaon, Assam - 782125</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-slate-400 shrink-0" />
                <a href="tel:+919854012345" className="hover:text-slate-900 transition-colors">
                  +91 98540 12345 / 67890
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-slate-400 shrink-0" />
                <a href="mailto:admissions@misrupahi.com" className="hover:text-slate-900 transition-colors">
                  admissions@misrupahi.com
                </a>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Clock size={14} className="text-slate-400 shrink-0" />
                <span>Mon – Sat: 8:30 AM – 3:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Mahmud Educational Foundation. All Rights Reserved.</p>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/terms"
              className="text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4"
            >
              Terms & Conditions
            </Link>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck size={12} />
              <span>SSL Secured</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

