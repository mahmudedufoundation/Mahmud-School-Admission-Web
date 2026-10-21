"use client";

import React from "react";
import { CheckCircle2, Printer, Share2, Download, Copy, Calendar, Phone, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";

export default function AdmissionSuccessModal({ data, onClose }) {
  if (!data) return null;

  const handleCopyRef = () => {
    navigator.clipboard.writeText(data.applicationNumber);
    toast.success("Application number copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello, I have submitted an online admission application for Mahmud International School.\nApplication No: ${data.applicationNumber}\nStudent Name: ${data.studentName}\nClass: ${data.className}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden print-slip">
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-purple-950 via-indigo-900 to-purple-900 text-white text-center relative">
          <button
            type="button"
            onClick={onClose}
            className="no-print absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 size={32} />
          </div>

          <h3 className="text-xl font-black tracking-tight">Application Submitted!</h3>
          <p className="text-xs text-purple-200 mt-1">
            Mahmud International School, Rupahi • Academic Session 2026-2027
          </p>
        </div>

        {/* Application Number Box */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              Official Application Reference Number
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-purple-950 font-mono tracking-wider">
                {data.applicationNumber}
              </span>
              <button
                type="button"
                onClick={handleCopyRef}
                title="Copy Reference"
                className="no-print p-1.5 rounded-lg text-purple-800 hover:bg-purple-100 transition-colors cursor-pointer"
              >
                <Copy size={16} />
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Please save this number for future application status tracking and interview scheduling.
            </p>
          </div>

          {/* Applicant Details Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs">
            <div>
              <span className="text-[10px] font-semibold text-slate-400 block">Student Name</span>
              <span className="font-bold text-slate-800">{data.studentName}</span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 block">Class Applied For</span>
              <span className="font-bold text-purple-900">{data.className}</span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 block">Parent / Guardian</span>
              <span className="font-bold text-slate-800">{data.fatherName || "Parent"}</span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 block">Primary Contact</span>
              <span className="font-bold text-slate-800">{data.contactPhone}</span>
            </div>
          </div>

          {/* Next Steps Information */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1">
            <h4 className="font-extrabold flex items-center gap-1.5">
              <span>What Happens Next?</span>
            </h4>
            <p className="text-[11px] text-amber-900 leading-relaxed">
              Our Admissions Office will review your application within 2-3 business days. You will receive an SMS and WhatsApp invitation for the student interaction and document verification.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="no-print pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-purple-900 text-white text-xs font-bold hover:bg-purple-950 flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Printer size={15} />
              <span>Print Application Slip</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-emerald-600 text-emerald-800 bg-emerald-50 text-xs font-bold hover:bg-emerald-100 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Share2 size={15} />
              <span>Share to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
