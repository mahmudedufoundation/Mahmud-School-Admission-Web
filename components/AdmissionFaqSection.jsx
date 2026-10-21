"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  BookOpen,
  Bus,
  Home,
  FileCheck2,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is the online admission procedure for Session 2026-2027?",
    a: "Applying takes only 3 minutes: (1) Select the target class and fill student details, (2) Provide father and mother contact information, (3) Enter your residential address, (4) Choose facility options like school bus transport and hostel boarding, and (5) Submit to receive an instant digital receipt slip with an application reference number (MIS-ADM-2026-XXXX).",
  },
  {
    q: "What is the minimum age criterion for Nursery and Class 1?",
    a: "As per National Education Policy (NEP) and CBSE standards, as of March 31, 2026: Nursery requires minimum 3+ years, LKG 4+ years, UKG 5+ years, and Class 1 requires minimum 6 years of age.",
  },
  {
    q: "What documents will be requested during the offline document verification?",
    a: "After online submission, our admission desk will schedule a quick document verification. Please keep ready: (1) Student Birth Certificate (Municipal/Panchayat), (2) Recent passport size photographs, (3) Parent/Guardian Aadhaar or ID card, (4) Previous school Report Card & Transfer Certificate (for Class 2 and above).",
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
  { class: "Class I - V", age: "6+ to 10 Years", timing: "08:30 AM - 02:45 PM", focus: "CBSE core subjects, language mastery, science experiments" },
  { class: "Class VI - X", age: "11+ to 15 Years", timing: "08:30 AM - 03:15 PM", focus: "Advanced mathematics, physics/chem/bio labs, computer coding" },
  { class: "Class XI - XII", age: "16+ Years", timing: "08:30 AM - 03:30 PM", focus: "Science (PCM/PCB), Commerce & Arts with integrated test prep" },
];

export default function AdmissionFaqSection({ onScrollToForm }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
          <HelpCircle size={14} className="text-purple-700" />
          <span>Admission Guidelines & FAQs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Everything You Need to Know About Admissions
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Transparent, fair, and merit-driven CBSE education in Rupahi, Nagaon, Assam.
          Review our criteria or submit your online inquiry directly.
        </p>
      </div>

      {/* Age & Class Eligibility Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap size={16} />
              <span>Academic Session 2026-2027</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-1">
              Class Eligibility & Age Matrix (CBSE & NEP Norms)
            </h3>
          </div>
          <button
            onClick={onScrollToForm}
            className="self-start sm:self-auto px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-purple-950 text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
          >
            Apply Now ➔
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3 px-4 sm:px-6">Class / Grade</th>
                <th className="py-3 px-4">Min. Age (as of 31 March)</th>
                <th className="py-3 px-4">School Hours</th>
                <th className="py-3 px-4 sm:px-6">Curriculum Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {ELIGIBILITY_DATA.map((row, i) => (
                <tr key={i} className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                    {row.class}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-purple-900">
                    {row.age}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 text-xs">
                    {row.timing}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs">
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accordion FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all duration-200 bg-white ${
                isOpen
                  ? "border-purple-300 shadow-md ring-1 ring-purple-100"
                  : "border-slate-200/90 hover:border-slate-300 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-purple-700" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Trust & Amenities Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
          <div className="w-9 h-9 mx-auto rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <h4 className="font-bold text-xs text-slate-800">Affiliated CBSE</h4>
          <p className="text-[10px] text-slate-500">Holistic National Curriculum</p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
          <div className="w-9 h-9 mx-auto rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Bus size={18} />
          </div>
          <h4 className="font-bold text-xs text-slate-800">GPS Fleet Bus</h4>
          <p className="text-[10px] text-slate-500">Covering Nagaon & Rupahi</p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
          <div className="w-9 h-9 mx-auto rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Home size={18} />
          </div>
          <h4 className="font-bold text-xs text-slate-800">Boarding & Hostel</h4>
          <p className="text-[10px] text-slate-500">Supervised 24/7 Security</p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
          <div className="w-9 h-9 mx-auto rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <FileCheck2 size={18} />
          </div>
          <h4 className="font-bold text-xs text-slate-800">Instant Slip</h4>
          <p className="text-[10px] text-slate-500">Digital Tracking Slip</p>
        </div>
      </div>
    </section>
  );
}
