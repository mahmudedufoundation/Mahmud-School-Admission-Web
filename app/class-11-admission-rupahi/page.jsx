import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Beaker,
  TrendingUp,
  Palette,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  FileCheck2,
  BookOpen,
} from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "Class 11 Science, Commerce & Arts Admission 2027–2028 | Mahmud International School Rupahi",
  description:
    "Apply for Class XI admission in Science (PCM/PCB), Commerce, and Arts at Mahmud International School, Rupahi, Nagaon, Assam. Modern physics/chemistry/biology labs, integrated NEET/JEE coaching, expert faculty & hostel boarding.",
  keywords: [
    "class 11 science admission rupahi",
    "class 11 admission rupahi nagaon",
    "senior secondary school rupahi",
    "class 11 commerce admission rupahi",
    "class 11 arts admission rupahi",
    "neet coaching school rupahi",
    "best junior college rupahi nagaon",
  ],
  alternates: {
    canonical: "https://admission.misrupahi.com/class-11-admission-rupahi",
  },
  openGraph: {
    title: "Class 11 Science, Commerce & Arts Admission | Mahmud International School Rupahi",
    description:
      "Join premier Senior Secondary education in Rupahi, Nagaon. Specialized Science, Commerce, and Arts streams with modern labs and entrance guidance.",
    url: "https://admission.misrupahi.com/class-11-admission-rupahi",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Class 11 & 12 Senior Secondary Stream Admissions (Science, Commerce, Arts)",
      description: "Class XI admission with integrated competitive entrance coaching (NEET, JEE, CUET) in Rupahi, Nagaon, Assam.",
      provider: {
        "@type": "School",
        name: "Mahmud International School",
        url: "https://admission.misrupahi.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://admission.misrupahi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Class 11 Admission Rupahi",
          item: "https://admission.misrupahi.com/class-11-admission-rupahi",
        },
      ],
    },
  ],
};

export default function Class11AdmissionRupahiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdmissionNavbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Admission Portal
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Class 11 Admission (Rupahi)</span>
          </nav>

          {/* Hero Banner */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <GraduationCap size={15} className="text-indigo-600" />
              <span>Senior Secondary Admissions 2027–2028</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
              Class 11 Science, Commerce & Arts Admissions in Rupahi
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
              Equip your career with specialized streams, world-class laboratory infrastructure, and integrated entrance coaching (NEET / JEE / CUET) in Rupahi, Nagaon, Assam.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02]"
              >
                <span>Apply for Class 11 Online</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919854012345"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={14} className="text-emerald-600" />
                <span>Stream Counseling: +91 98540 12345</span>
              </a>
            </div>
          </section>

          {/* 3 Streams Detailed Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Science Stream */}
            <div className="p-6 bg-white rounded-3xl border border-indigo-100 shadow-2xs space-y-4 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Beaker size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Science Stream</h3>
                <span className="text-[11px] font-semibold text-indigo-700">PCM / PCB / PCMB</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Physics, Chemistry, Math & Biology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Modern Experimental Science Labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Integrated NEET & JEE Modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Computer Science / Informatics Practice</span>
                </li>
              </ul>
            </div>

            {/* Commerce Stream */}
            <div className="p-6 bg-white rounded-3xl border border-amber-100 shadow-2xs space-y-4 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Commerce Stream</h3>
                <span className="text-[11px] font-semibold text-amber-700">Business & Finance Focus</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Accountancy, Business Studies & Economics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Applied Mathematics Option</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>CA Foundation & CUET Prep</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Financial Literacy & Case Studies</span>
                </li>
              </ul>
            </div>

            {/* Arts Stream */}
            <div className="p-6 bg-white rounded-3xl border border-blue-100 shadow-2xs space-y-4 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Palette size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Arts & Humanities</h3>
                <span className="text-[11px] font-semibold text-blue-700">Civil Services & Media</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Political Science, History & Sociology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Geography, Economics & English Electives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>UPSC/APSC Foundation Seminars</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Critical Thinking & Oratory Debates</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom Direct CTA */}
          <div className="text-center bg-white p-8 rounded-3xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Limited Seats Available for Session 2027–2028</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Merit-based admissions open for Class 10 graduates from SEBA, CBSE, and ICSE boards.
            </p>
            <Link
              href="/#admission-wizard-card"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <span>Submit Class 11 Registration Form</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <AdmissionFooter />
    </div>
  );
}
