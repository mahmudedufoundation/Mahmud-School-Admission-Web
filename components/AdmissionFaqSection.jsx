"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  BookOpen,
  Bus,
  Home,
  FileCheck2,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is the online admission procedure for Session 2027-2028?",
    a: "Applying takes only 3 minutes: (1) Select the target class and fill student details, (2) Provide father and mother contact information, (3) Enter your residential address, (4) Choose facility options like school bus transport and hostel boarding, and (5) Submit to receive an instant digital receipt slip with an application reference number (MIS-ADM-2027-XXXX).",
  },
  {
    q: "What is the minimum age criterion for Nursery and Class 1?",
    a: "As per National Education Policy (NEP) and standard schooling norms, as of March 31, 2027: Nursery requires minimum 3+ years, LKG 4+ years, UKG 5+ years, and Class 1 requires minimum 6 years of age.",
  },
  {
    q: "What documents will be requested during the offline document verification?",
    a: "After online submission, our admission desk will schedule a quick document verification. Please keep ready: (1) Student Birth Certificate (Municipal/Panchayat), (2) Recent passport size photographs, (3) Parent/Guardian ID card, (4) Previous school Report Card & Transfer Certificate (for Class 2 and above).",
  },
  {
    q: "Which routes are covered by the Mahmud International School bus transport?",
    a: "Our modern GPS-tracked school fleet covers extensive routes across Rupahi town, Juria, Batadrava, Dhing gate, Alitangani, Samaguri, Nagaon town, and surrounding rural neighborhoods with vetted drivers and attendants.",
  },
  {
    q: "Is residential hostel accommodation available for outstation students?",
    a: "Yes, Mahmud International School provides clean, safe, and air-conditioned residential boarding facilities with nutritious meal dining, 24/7 CCTV security, dedicated resident wardens, and supervised evening study hours.",
  },
  {
    q: "How can I check the live status of my application after submission?",
    a: "You can track your application anytime 24/7 by clicking the 'Track Application' button in the top navigation bar. Enter either your 16-character Application Number or the registered parent phone number.",
  },
];

const ELIGIBILITY_DATA = [
  { class: "Nursery", age: "3+ Years", timing: "08:30 AM - 12:30 PM", focus: "Play-based sensory learning, phonics & motor skills" },
  { class: "LKG & UKG", age: "4+ & 5+ Years", timing: "08:30 AM - 01:30 PM", focus: "Foundational literacy, numeracy, creative arts" },
  { class: "Class I - V", age: "6+ to 10 Years", timing: "08:30 AM - 02:45 PM", focus: "English medium core subjects, language mastery & science" },
  { class: "Class VI - X", age: "11+ to 15 Years", timing: "08:30 AM - 03:15 PM", focus: "Advanced mathematics, sciences, computer coding & languages" },
  { class: "Class XI - XII", age: "16+ Years", timing: "08:30 AM - 03:30 PM", focus: "Science (PCM/PCB), Commerce & Arts with integrated coaching" },
];

export default function AdmissionFaqSection({ onScrollToForm }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="admission-faq-section" className="w-full bg-slate-100/70 border-t border-slate-200/80 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={14} className="text-indigo-600" />
            <span>Admission Guidelines & FAQs</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Everything You Need to Know About Admissions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Transparent, fair, and merit-driven English medium education in Rupahi, Nagaon, Assam.
          </p>
        </div>

        {/* Age & Class Eligibility Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap size={15} className="text-indigo-600" />
                <span>Academic Session 2027-2028</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                Class Eligibility & Age Matrix
              </h3>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <span className="text-[10px] text-slate-400 font-medium sm:hidden">
                Swipe horizontally →
              </span>
              <button
                type="button"
                onClick={onScrollToForm}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[560px]">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-2.5 px-3.5 sm:px-4">Class / Grade</th>
                  <th className="py-2.5 px-3.5 sm:px-4">Min. Age (as of 31 March)</th>
                  <th className="py-2.5 px-3.5 sm:px-4">School Hours</th>
                  <th className="py-2.5 px-3.5 sm:px-4">Curriculum Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {ELIGIBILITY_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3.5 sm:px-4 font-bold text-slate-900">
                      {row.class}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 font-semibold text-slate-800">
                      {row.age}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 text-slate-500">
                      {row.timing}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 text-slate-600">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-slate-400 ring-2 ring-slate-900/5 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-4.5 flex items-start justify-between gap-3 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust & Amenities Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-9 h-9 mx-auto rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <BookOpen size={17} />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Holistic Learning</h4>
            <p className="text-[10px] text-slate-500">English Medium Standard</p>
          </div>

          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-9 h-9 mx-auto rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Bus size={17} />
            </div>
            <h4 className="font-bold text-xs text-slate-900">GPS Bus Fleet</h4>
            <p className="text-[10px] text-slate-500">Covering Nagaon & Rupahi</p>
          </div>

          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-9 h-9 mx-auto rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Home size={17} />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Boarding & Hostel</h4>
            <p className="text-[10px] text-slate-500">Supervised 24/7 Security</p>
          </div>

          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FileCheck2 size={17} />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Instant Slip</h4>
            <p className="text-[10px] text-slate-500">Digital Tracking Slip</p>
          </div>
        </div>
      </div>
    </section>
  );
}
