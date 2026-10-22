"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Printer,
  Share2,
  Copy,
  X,
  Download,
  Loader2,
  FileCheck2,
} from "lucide-react";
import { toast } from "sonner";
import { generateReceiptPdf } from "@/lib/generateReceiptPdf";

export default function AdmissionSuccessModal({ data, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [printing, setPrinting] = useState(false);

  if (!data) return null;

  const handleCopyRef = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(data.applicationNumber);
      toast.success("Application number copied to clipboard!");
    }
  };

  // 1. Direct PDF Download
  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      const receipt = await generateReceiptPdf(data);
      receipt.download();
      const isMobile =
        typeof navigator !== "undefined" &&
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        toast.success("Downloading official admission slip to your phone...");
      } else {
        toast.success("Official Admission Receipt PDF downloaded!");
      }
    } catch (err) {
      console.error("Download PDF error:", err);
      toast.error("Could not generate PDF download. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  // 2. WhatsApp Share as Document / PDF (Web Share API with Intelligent Fallback)
  const handleShareWhatsApp = async () => {
    try {
      setSharing(true);
      const receipt = await generateReceiptPdf(data);

      // Check if Web Share API with files is supported (iOS Safari / Android Chrome)
      if (
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files: [receipt.file] })
      ) {
        await navigator.share({
          title: `MIS Admission Slip - ${data.applicationNumber}`,
          text: `Official Admission Acknowledgment Slip for ${data.studentName} (${data.className}) at Mahmud International School. Application No: ${data.applicationNumber}`,
          files: [receipt.file],
        });
        toast.success("Document shared successfully!");
      } else {
        // Fallback for Desktop: Auto-save PDF so user has the file & open WhatsApp with formatted receipt details
        receipt.download();
        const text = encodeURIComponent(
          `Hello, I have submitted an online admission application for Mahmud International School.\n\n` +
            `*Application Reference No:* ${data.applicationNumber}\n` +
            `*Student Name:* ${data.studentName}\n` +
            `*Class Applied For:* ${data.className}\n` +
            `*Parent/Guardian:* ${data.fatherName || "Parent"}\n` +
            `*Contact Phone:* ${data.contactPhone}\n\n` +
            `Official PDF Admission Slip has been downloaded to device.\n` +
            `Track Application Online: https://admission.misrupahi.com`
        );
        window.open(`https://wa.me/?text=${text}`, "_blank");
        toast.info("PDF saved to Downloads & WhatsApp chat opened!");
      }
    } catch (err) {
      // User cancelled share dialog is not an error
      if (err.name !== "AbortError") {
        console.error("Share error:", err);
        toast.error("Could not share document. Please try downloading the PDF instead.");
      }
    } finally {
      setSharing(false);
    }
  };

  // 3. Reliable Print Trigger (PDF Blob View or Isolated Print Frame)
  const handlePrint = async () => {
    try {
      setPrinting(true);
      const receipt = await generateReceiptPdf(data);
      const blobUrl = URL.createObjectURL(receipt.blob);

      const isMobile =
        typeof navigator !== "undefined" &&
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // On iOS & Android, opening the PDF blob in a dedicated tab allows direct native AirPrint / Save
        const newWin = window.open(blobUrl, "_blank");
        if (!newWin) {
          // If popup blocked, trigger standard window.print
          window.print();
        }
      } else {
        // On Desktop, trigger print via hidden iframe
        const iframe = document.createElement("iframe");
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        iframe.src = blobUrl;

        document.body.appendChild(iframe);

        iframe.onload = () => {
          setTimeout(() => {
            try {
              iframe.contentWindow?.focus();
              iframe.contentWindow?.print();
            } catch {
              window.print();
            }
            setTimeout(() => {
              if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
              }
              URL.revokeObjectURL(blobUrl);
            }, 60000);
          }, 300);
        };
      }
    } catch (err) {
      console.warn("PDF print fallback to standard window.print:", err);
      window.print();
    } finally {
      setPrinting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn print-modal-container">
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 overflow-hidden print-slip">
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-100 text-center relative">
          <button
            type="button"
            onClick={onClose}
            className="no-print absolute top-3 right-3 w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>

          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 p-1 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
            <img
              src="/images/logo.png"
              alt="Mahmud International School"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-1 border border-emerald-200/60">
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

          {/* Action Buttons: Download PDF, Share to WhatsApp, Print */}
          <div className="no-print pt-2 space-y-2">
            {/* Primary Action: Download Official PDF */}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
            >
              {downloading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>Generating Official PDF...</span>
                </>
              ) : (
                <>
                  <Download size={15} />
                  <span>Download PDF Receipt</span>
                </>
              )}
            </button>

            {/* Secondary Actions: Share to WhatsApp & Print */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                disabled={sharing}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60"
              >
                {sharing ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Preparing PDF...</span>
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    <span>Share to WhatsApp</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                disabled={printing}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60"
              >
                {printing ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Opening...</span>
                  </>
                ) : (
                  <>
                    <Printer size={14} />
                    <span>Print Slip</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

