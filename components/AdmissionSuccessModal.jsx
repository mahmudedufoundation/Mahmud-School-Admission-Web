"use client";

import React from "react";
import { CheckCircle2, Printer, Share2, Copy, X } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print-slip">
        {/* Top Header - Pure Light with Official Logo */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-100 text-center relative">
          <button
            type="button"
            onClick={onClose}
            className="no-print absolute top-3 right-3 w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>

          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 p-1 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Mahmud International School"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-1">
            <CheckCircle2 size={13} />
            <span>Application Submitted Successfully</span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Mahmud International School, Rupahi
          </h3>
          <p className="text-[11px] text-slate-500">
            Academic Session 2027-2028 • Official Acknowledgment Receipt
          </p>
        </div>

        {/* Application Number Box */}
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Application Reference Number
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-wider">
                {data.applicationNumber}
              </span>
              <button
                type="button"
                onClick={handleCopyRef}
                title="Copy Reference Number"
                className="no-print p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <Copy size={15} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500">
              Please save this reference number for tracking and desk verification.
            </p>
          </div>

          {/* Applicant Details Grid */}
          <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-[10px] font-medium text-slate-500 block">Student Name</span>
              <span className="font-bold text-slate-900">{data.studentName}</span>
            </div>
            <div>
              <span className="text-[10px] font-medium text-slate-500 block">Class Applied For</span>
              <span className="font-bold text-slate-900">{data.className}</span>
            </div>
            <div>
              <span className="text-[10px] font-medium text-slate-500 block">Parent / Guardian</span>
              <span className="font-bold text-slate-900">{data.fatherName || "Parent"}</span>
            </div>
            <div>
              <span className="text-[10px] font-medium text-slate-500 block">Contact Phone</span>
              <span className="font-bold text-slate-900">{data.contactPhone}</span>
            </div>
          </div>

          {/* Next Steps Information */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-0.5">
            <h4 className="font-bold text-slate-900 text-xs">What Happens Next?</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Our Admissions Office will review your application within 2-3 business days. You will receive an SMS/WhatsApp notification for document verification.
            </p>
          </div>

          {/* Action Buttons - Solid Single-Color */}
          <div className="no-print pt-1 flex flex-col sm:flex-row items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print Receipt Slip</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 size={14} />
              <span>Share to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
