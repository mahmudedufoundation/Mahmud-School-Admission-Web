"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AdmissionFooter() {
  return (
    <footer className="mt-8 sm:mt-12 border-t border-slate-200 bg-white pt-8 pb-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
          {/* Col 1: School Identity */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Mahmud International School"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Mahmud International School</h3>
                <p className="text-[11px] text-indigo-700 font-semibold">Excellence in Education</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Committed to providing academic rigour, holistic character building, and caring education in Rupahi, Nagaon, Assam.
            </p>
          </div>

          {/* Col 2: Campus & Contact */}
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              Admissions Office
            </h4>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="text-slate-500 shrink-0 mt-0.5" />
              <span>Rupahi Town, Near Block Development Office, Nagaon, Assam - 782125</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-slate-500 shrink-0" />
              <span>Helpline: +91 98540 12345 / 98540 67890</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-slate-500 shrink-0" />
              <span>Email: admissions@misrupahi.com</span>
            </p>
          </div>

          {/* Col 3: Admissions Office Hours */}
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              Visiting Hours
            </h4>
            <p className="flex items-center gap-2">
              <Clock size={14} className="text-slate-500 shrink-0" />
              <span>Monday to Saturday: 8:30 AM – 3:30 PM</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Campus tours and counseling are available on all working days by prior appointment.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Mahmud Educational Foundation. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Online Admission Portal</span>
            <span>•</span>
            <span className="text-indigo-700 font-bold">Session 2026-2027</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
