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
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
          <HelpCircle size={14} className="text-slate-700" />
          <span>Admission Guidelines & FAQs</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Everything You Need to Know About Admissions
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Transparent, fair, and merit-driven English medium education in Rupahi, Nagaon, Assam.
        </p>
      </div>

      {/* Age & Class Eligibility Table - Pure Light Styling */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap size={15} />
              <span>Academic Session 2027-2028</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
              Class Eligibility & Age Matrix
            </h3>
          </div>
          <button
            type="button"
            onClick={onScrollToForm}
            className="self-start sm:self-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3 sm:px-4">Class / Grade</th>
                <th className="py-2.5 px-3 sm:px-4">Min. Age (as of 31 March)</th>
                <th className="py-2.5 px-3 sm:px-4">School Hours</th>
                <th className="py-2.5 px-3 sm:px-4">Curriculum Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {ELIGIBILITY_DATA.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-bold text-slate-900">
                    {row.class}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-slate-900">
                    {row.age}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-slate-500">
                    {row.timing}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-slate-600">
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accordion FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-xl transition-colors bg-white ${
                isOpen
                  ? "border-slate-400 ring-1 ring-slate-200 shadow-xs"
                  : "border-slate-200 hover:border-slate-300 shadow-2xs"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left p-3.5 sm:p-4 flex items-start justify-between gap-2.5 focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={15}
                  className={`text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-slate-900" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-2.5">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Trust & Amenities Badges - Pure Light Theme */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
        <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
          <div className="w-8 h-8 mx-auto rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
            <BookOpen size={16} />
          </div>
          <h4 className="font-bold text-xs text-slate-900">Holistic Learning</h4>
          <p className="text-[10px] text-slate-500">English Medium Standard</p>
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
          <div className="w-8 h-8 mx-auto rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
            <Bus size={16} />
          </div>
          <h4 className="font-bold text-xs text-slate-900">GPS Bus Fleet</h4>
          <p className="text-[10px] text-slate-500">Covering Nagaon & Rupahi</p>
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
          <div className="w-8 h-8 mx-auto rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
            <Home size={16} />
          </div>
          <h4 className="font-bold text-xs text-slate-900">Boarding & Hostel</h4>
          <p className="text-[10px] text-slate-500">Supervised 24/7 Security</p>
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
          <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <FileCheck2 size={16} />
          </div>
          <h4 className="font-bold text-xs text-slate-900">Instant Slip</h4>
          <p className="text-[10px] text-slate-500">Digital Tracking Slip</p>
        </div>
      </div>
    </section>
  );
}
